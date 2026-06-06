#!/bin/bash

# 🟦 CED-Core | Script de Déploiement Souverain (Infomaniak)
# 📍 Cible : Infomaniak Cloud/VPS (Genève, Suisse)
# 🔒 Conformité : LPD, Zéro Riba, Zéro Gharar
# 👤 Gardien : @PrettyhowQ
# 📦 Version Cible : v2.4.1-AUDITED

set -e # Arrêter le script en cas d'erreur

# 🎨 Couleurs pour les logs (Charte Souveraine)
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🏛️ Démarrage du déploiement CED-Core (v2.4.1-AUDITED)...${NC}"

# 1. Vérification des prérequis
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ Erreur : npm n'est pas installé sur ce serveur.${NC}"
    exit 1
fi

if ! command -v pm2 &> /dev/null; then
    echo -e "${RED}❌ Erreur : PM2 n'est pas installé. Installez-le avec 'npm install -g pm2'.${NC}"
    exit 1
fi

# 2. Configuration des variables (À adapter selon votre environnement Infomaniak)
# Idéalement, ces valeurs sensibles sont déjà dans le fichier .env sur le serveur
APP_NAME="ced-core"
APP_DIR="$HOME/ced-core" # Chemin d'installation sur le serveur
BRANCH="main" # ou 'production' si vous avez une branche dédiée

echo -e "${GREEN}✅ Prérequis validés.${NC}"

# 3. Mise à jour du code (Si déploiement via Git direct sur le serveur)
# Note: Pour une prod stricte, on préfère souvent un 'git pull' du tag spécifique
cd $APP_DIR || { echo -e "${RED}❌ Le répertoire $APP_DIR n'existe pas.${NC}"; exit 1; }

echo -e "${BLUE}🔄 Récupération de la version auditée...${NC}"
git fetch --tags
git checkout v2.4.1-AUDITED
git pull origin main # Assure la synchro si le tag est mis à jour (rare pour un tag fixe)

# 4. Installation des dépendances
echo -e "${BLUE}📦 Installation des dépendances (npm ci pour propreté)...${NC}"
npm ci --production

# 5. Gestion des migrations de base de données (Si applicable)
# Décommentez si vous utilisez Drizzle Kit ou un script de migration
# echo -e "${BLUE}🗄️ Exécution des migrations...${NC}"
# npm run db:migrate

# 6. Construction du frontend (Si nécessaire)
echo -e "${BLUE}🏗️ Build du frontend...${NC}"
npm run build

# 7. Gestion du processus avec PM2
echo -e "${BLUE}🚀 Gestion du processus PM2...${NC}"

# Vérifier si l'app tourne déjà
if pm2 list | grep -w "$APP_NAME" > /dev/null; then
    echo -e "${GREEN}♻️ Redémarrage de l'application existante...${NC}"
    pm2 restart $APP_NAME
else
    echo -e "${GREEN}✨ Démarrage d'une nouvelle instance...${NC}"
    # Ajustez 'dist/server.js' ou 'server.js' selon votre point d'entrée réel après build
    pm2 start npm --name "$APP_NAME" -- start 
fi

# Sauvegarder la liste des processus pour redémarrage auto au reboot
pm2 save

echo -e "${GREEN}✅ Déploiement terminé avec succès !${NC}"
echo -e "${BLUE}📊 État des services :${NC}"
pm2 status

# Rappel éthique en fin de script
echo -e "\n${BLUE}🤲 Qu'Allah accepte ce travail et le rende bénéfique pour la Oummah.${NC}"
