import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateEnvironmentVariables } from './lib/env-validator';

// Valider les variables d'env au premier import (en production seulement)
if (process.env.NODE_ENV === 'production') {
  const errors = validateEnvironmentVariables();
  if (errors.length > 0) {
    console.error('❌ ERREURS DE VALIDATION DÉTECTÉES:\n');
    errors.forEach((error) => {
      console.error(`   • ${error.var}: ${error.issue}`);
      if (error.value) {
        console.error(`     Valeur suspecte: ${error.value}`);
      }
    });
    throw new Error('Validation des variables d\'environnement échouée - Application bloquée');
  }
}

// Rate limiting simple (en production, utilisez Redis ou similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // 10 requêtes par minute

export function middleware(request: NextRequest) {
  // Rate limiting pour les routes API
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    
    const userLimit = rateLimit.get(ip);
    
    if (userLimit) {
      if (now < userLimit.resetTime) {
        if (userLimit.count >= MAX_REQUESTS) {
          console.warn(`[SECURITY] Rate limit exceeded for IP: ${ip} on ${request.nextUrl.pathname}`);
          return NextResponse.json(
            { error: 'Trop de requêtes. Veuillez réessayer plus tard.' },
            { status: 429 }
          );
        }
        userLimit.count++;
      } else {
        // Fenêtre expirée, reset
        userLimit.count = 1;
        userLimit.resetTime = now + RATE_LIMIT_WINDOW;
      }
    } else {
      // Première requête
      rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }
    
    // Nettoyage périodique
    if (rateLimit.size > 10000) {
      for (const [key, value] of rateLimit.entries()) {
        if (now > value.resetTime) {
          rateLimit.delete(key);
        }
      }
    }
  }

  // Headers de sécurité
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
