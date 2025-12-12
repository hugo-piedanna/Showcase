/**
 * Valide et sécurise les variables d'environnement au démarrage
 * Empêche l'application de démarrer si des valeurs suspectes sont détectées
 */

const REQUIRED_ENV_VARS = [
  'STRIPE_SECRET_KEY',
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
  'MINIO_ENDPOINT',
  'MINIO_ACCESS_KEY',
  'MINIO_SECRET_KEY',
  'MINIO_BUCKET',
] as const;

// Patterns suspects à bloquer
const SUSPICIOUS_PATTERNS = {
  IP_ADDRESS: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  SUSPICIOUS_PORTS: /:(80|8080|8888|3128)$/,
  LOCALHOST: /^(localhost|127\.0\.0\.1|0\.0\.0\.0)/,
};

interface ValidationError {
  var: string;
  issue: string;
  value?: string;
}

export function validateEnvironmentVariables(): ValidationError[] {
  const errors: ValidationError[] = [];

  // Vérifier que toutes les variables requises sont présentes
  for (const envVar of REQUIRED_ENV_VARS) {
    if (!process.env[envVar]) {
      errors.push({
        var: envVar,
        issue: 'Variable manquante',
      });
    }
  }

  // Validation spécifique pour MINIO_ENDPOINT
  const minioEndpoint = process.env.MINIO_ENDPOINT;
  if (minioEndpoint) {
    // Détection d'adresse IP directe (suspect)
    if (SUSPICIOUS_PATTERNS.IP_ADDRESS.test(minioEndpoint)) {
      errors.push({
        var: 'MINIO_ENDPOINT',
        issue: 'Utilisation d\'une adresse IP directe détectée (potentiellement malveillant)',
        value: minioEndpoint,
      });
    }

    // Détection de localhost
    if (SUSPICIOUS_PATTERNS.LOCALHOST.test(minioEndpoint)) {
      if (process.env.NODE_ENV === 'production') {
        errors.push({
          var: 'MINIO_ENDPOINT',
          issue: 'Localhost détecté en production',
          value: minioEndpoint,
        });
      }
    }

    // Détection de ports suspects
    const minioPort = process.env.MINIO_PORT;
    if (minioPort && SUSPICIOUS_PATTERNS.SUSPICIOUS_PORTS.test(`:${minioPort}`)) {
      errors.push({
        var: 'MINIO_PORT',
        issue: 'Port suspect détecté (proxy/malveillant)',
        value: minioPort,
      });
    }

    // Validation du domaine (doit contenir un point pour un FQDN valide)
    if (!minioEndpoint.includes('.') && !minioEndpoint.includes('localhost')) {
      errors.push({
        var: 'MINIO_ENDPOINT',
        issue: 'Format de domaine invalide',
        value: minioEndpoint,
      });
    }
  }

  // Validation des clés Stripe
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (stripeKey) {
    const isTest = stripeKey.startsWith('sk_test_');
    const isLive = stripeKey.startsWith('sk_live_');
    
    if (!isTest && !isLive) {
      errors.push({
        var: 'STRIPE_SECRET_KEY',
        issue: 'Format de clé Stripe invalide',
      });
    }

    if (isTest && process.env.NODE_ENV === 'production') {
      console.warn('⚠️  AVERTISSEMENT: Clé Stripe de test utilisée en production');
    }
  }

  // Vérification de la longueur minimale des secrets
  const secretKeys = ['MINIO_ACCESS_KEY', 'MINIO_SECRET_KEY'];
  for (const key of secretKeys) {
    const value = process.env[key];
    if (value && value.length < 8) {
      errors.push({
        var: key,
        issue: 'Secret trop court (minimum 8 caractères)',
      });
    }
  }

  return errors;
}

export function logEnvironmentValidation(): void {
  console.log('\n🔒 Validation des variables d\'environnement...\n');
  
  const errors = validateEnvironmentVariables();

  if (errors.length === 0) {
    console.log('✅ Toutes les variables d\'environnement sont valides\n');
    
    // Log info (sans révéler les secrets)
    console.log('📋 Configuration détectée:');
    console.log(`   - MINIO_ENDPOINT: ${process.env.MINIO_ENDPOINT}`);
    console.log(`   - MINIO_PORT: ${process.env.MINIO_PORT || '443'}`);
    console.log(`   - MINIO_USE_SSL: ${process.env.MINIO_USE_SSL ?? 'true'}`);
    console.log(`   - MINIO_BUCKET: ${process.env.MINIO_BUCKET || 'formations'}`);
    console.log(`   - Environment: ${process.env.NODE_ENV}\n`);
  } else {
    console.error('❌ ERREURS DE VALIDATION DÉTECTÉES:\n');
    errors.forEach((error) => {
      console.error(`   • ${error.var}: ${error.issue}`);
      if (error.value) {
        console.error(`     Valeur suspecte: ${error.value}`);
      }
    });
    console.error('\n⚠️  L\'application ne peut pas démarrer avec ces erreurs.\n');
    
    if (process.env.NODE_ENV === 'production') {
      // En production, arrêter l'application
      throw new Error('Validation des variables d\'environnement échouée');
    } else {
      console.warn('⚠️  Mode développement: continuation malgré les erreurs\n');
    }
  }
}

// Exécuter la validation au démarrage
if (process.env.NODE_ENV === 'production') {
  logEnvironmentValidation();
}
