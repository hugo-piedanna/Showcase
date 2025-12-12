# 🚨 Guide de Sécurité Post-Compromission

## ⚠️ Votre VPS a été compromis

Votre serveur a été utilisé pour faire du "bridging" (proxy malveillant) et envoyer des requêtes vers des serveurs externes. Les logs montrent une connexion à `31.56.27.76:80`.

---

## 📋 Actions URGENTES à effectuer sur le VPS

### 1. **Arrêter immédiatement l'application compromise**

```bash
docker-compose down
# ou
pm2 stop all
```

### 2. **Vérifier les variables d'environnement**

```bash
cat .env
```

**Recherchez:**

- `MINIO_ENDPOINT` contenant une IP (31.56.27.76 ou autre)
- Toute variable modifiée suspecte
- Des backdoors dans les fichiers `.env.*`

### 3. **Régénérer TOUTES les clés et secrets**

- ✅ Stripe: Générez de nouvelles clés (Dashboard Stripe)
- ✅ MinIO: Changez ACCESS_KEY et SECRET_KEY
- ✅ Tous les autres secrets

### 4. **Nettoyer le système**

```bash
# Chercher les fichiers récemment modifiés
find /var/www -type f -mtime -7 -ls

# Chercher des backdoors PHP/Shell
find /var/www -name "*.php" -o -name "*.sh" -o -name "*.py" | xargs grep -l "eval\|exec\|system\|shell_exec"

# Vérifier les cron jobs
crontab -l
ls -la /etc/cron.*

# Vérifier les processus suspects
ps aux | grep -E "(wget|curl|nc|ncat)" | grep -v grep

# Vérifier les connexions réseau actives
netstat -tulpn | grep ESTABLISHED
```

### 5. **Nettoyer Docker**

```bash
# Supprimer tous les conteneurs
docker rm -f $(docker ps -aq)

# Supprimer toutes les images
docker rmi -f $(docker images -aq)

# Nettoyer les volumes et réseaux
docker volume prune -f
docker network prune -f

# Reconstruire from scratch
docker-compose build --no-cache
```

### 6. **Vérifier les logs système**

```bash
# Logs d'authentification
tail -n 100 /var/log/auth.log | grep -i "failed\|accept"

# Logs nginx/apache
tail -n 100 /var/log/nginx/access.log
tail -n 100 /var/log/nginx/error.log

# Logs Docker
docker logs [container_name] 2>&1 | grep -E "31\.56|Connecting to"
```

### 7. **Sécuriser le serveur**

```bash
# Mettre à jour le système
apt update && apt upgrade -y

# Installer fail2ban si absent
apt install fail2ban -y

# Configurer le firewall (UFW)
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable

# Désactiver SSH par mot de passe (clé uniquement)
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl restart sshd
```

### 8. **Auditer les accès SSH**

```bash
# Vérifier les clés SSH autorisées
cat ~/.ssh/authorized_keys

# Vérifier l'historique des commandes
history

# Pour tous les utilisateurs
cat /home/*/.bash_history
```

---

## 🔒 Modifications de Code Appliquées

### ✅ Nouveau fichier: `src/middleware.ts`

- **Rate limiting**: 10 requêtes/minute par IP
- **Headers de sécurité** ajoutés
- **Logs des abus**

### ✅ Nouveau fichier: `src/lib/env-validator.ts`

- Validation automatique au démarrage
- Détection d'adresses IP suspectes dans MINIO_ENDPOINT
- Détection de ports suspects (80, 8080, 3128, 8888)
- Bloque le démarrage en production si anomalie

### ✅ Routes API sécurisées

- **Validation stricte** des `session_id` Stripe (format `cs_*`)
- **Logs de sécurité** avec IP du client
- **Vérification** que l'URL générée pointe vers le bon endpoint
- **Messages d'erreur génériques** (pas de leak d'info)

---

## 🚀 Redéploiement Sécurisé

### 1. Créer un nouveau `.env` propre

```bash
cp .env.example .env
nano .env
```

### 2. Variables à configurer CORRECTEMENT:

```env
# ATTENTION: MINIO_ENDPOINT doit être un DOMAINE, PAS une IP
MINIO_ENDPOINT=s3.votredomaine.com  # ✅ BON
# MINIO_ENDPOINT=31.56.27.76         # ❌ SUSPECT!

MINIO_PORT=443  # SSL recommandé
MINIO_USE_SSL=true

# Générez de nouvelles clés
STRIPE_SECRET_KEY=sk_live_NOUVELLE_CLE
MINIO_ACCESS_KEY=NOUVELLE_ACCESS_KEY
MINIO_SECRET_KEY=NOUVELLE_SECRET_KEY
```

### 3. Rebuild et déploiement

```bash
# Build sans cache
docker-compose -f compose.prod.yml build --no-cache

# Démarrer avec les nouveaux secrets
docker-compose -f compose.prod.yml up -d

# Vérifier les logs
docker-compose -f compose.prod.yml logs -f --tail=100
```

### 4. Surveiller après redémarrage

```bash
# Logs en temps réel
docker-compose -f compose.prod.yml logs -f

# Rechercher des patterns suspects
docker-compose logs 2>&1 | grep -E "Connecting to|MEOW|bridge"
```

---

## 📊 Monitoring Post-Incident

### Logs à surveiller:

1. **Tentatives de rate limiting** → IPs suspectes
2. **Validations d'env échouées** → Tentative de modification
3. **URLs générées ne matchant pas MINIO_ENDPOINT** → Redirection malveillante
4. **Nombreuses erreurs 400 avec "Invalid session_id"** → Tentative de bruteforce

### Commande de monitoring:

```bash
# Alertes en temps réel
docker-compose logs -f | grep -E "\[SECURITY\]|\[ERROR\]" | tee security.log
```

---

## 🔐 Recommandations Futures

1. **Utiliser des secrets managers**: AWS Secrets Manager, HashiCorp Vault
2. **Activer 2FA** sur tous les services (GitHub, Stripe, VPS)
3. **Isoler MinIO** sur un sous-réseau privé
4. **CDN avec protection DDoS** (Cloudflare)
5. **Monitoring**: Sentry, DataDog, New Relic
6. **Backups automatiques** chiffrés
7. **Audits de sécurité réguliers**

---

## ⚠️ Si les attaques continuent:

1. **Changer l'IP du VPS** (chez votre hébergeur)
2. **Migrer vers un nouveau serveur** propre
3. **Analyser forensically** l'ancien serveur
4. **Contacter votre hébergeur** pour signaler l'incident

---

## 📞 Contacts Urgence

- **Stripe Support**: https://support.stripe.com
- **Votre hébergeur VPS**: [À compléter]
- **Logs d'incident**: Conservez tous les logs pour analyse

---

**Date de l'incident**: 12 décembre 2025  
**Mise à jour de sécurité**: v2.1.0
