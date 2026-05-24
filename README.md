# 🇨🇭 CED HalalTech Infrastructure (ced-core)

**Écosystème Financier & Technologique Conforme Sharia | Genève, Suisse**  
*Version: 2.4.1 | Build: Production | Hébergé sur Infomaniak (Genève)*

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)
[![Compliance: LPD/RGPD](https://img.shields.io/badge/Compliance-LPD%2FRGPD-green.svg)](docs/COMPLIANCE.md)
[![Stack: React/Node/TS](https://img.shields.io/badge/Stack-React%2018%20%7C%20Node%2020%20%7C%20TypeScript-blue)](https://react.dev)

---

## 🌟 Fondation Spirituelle & Éthique (Niyyah)

> *"Je ne cherche par ce projet que la Face d'Allah, et non la renommée, ni le gain mondain."*

Ce projet est guidé par une **Déclaration d'Intention (Niyyah)** stricte : servir uniquement la Face d'Allah, dans la sincérité et le bénéfice pour la communauté.

**Principes Fondamentaux :**
*   ✅ **Tawhîd** : Unicité de la vision.
*   ✅ **Ikhlas** : Sincérité absolue dans le code.
*   ✅ **Nafa'** : Utilité réelle pour l'Oumma et l'humanité.
*   ✅ **'Adl** : Justice et équité dans les algorithmes.

⚠️ **Règle de Déploiement :** Seul le code audité et validé (tagué `vX.X-AUDITED`) est déployé en production. Voir le dossier [`00_Uniquement_pour_Allah`](00_Uniquement_pour_Allah) pour l'engagement complet.

---

## 🏗️ Architecture Technique

Une stack moderne, performante et souveraine, conçue pour l'excellence et la maintenabilité.

| Couche | Technologies |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI |
| **Backend** | Node.js 20 (Express), TypeScript, API RESTful |
| **Database** | PostgreSQL 16, Redis 7 (via Drizzle ORM) |
| **IA & Data** | Scripts Python (Analyse), Anthropic Claude (API) |
| **Infra** | **Infomaniak Cloud (Genève)** 🇨🇭, Docker, Nginx, PM2 |

### 🔒 Sécurité & Conformité
*   **Chiffrement** : AES-256 au repos, TLS 1.3 en transit.
*   **Auth** : 2FA obligatoire, Gestion de sessions sécurisée (HttpOnly).
*   **Éthique** : Zéro Riba (Intérêt), Zéro Gharar (Incertitude), Conformité LPD/RGPD stricte.

---

## 🚀 Démarrage Rapide (Quick Start)

### 1. Prérequis
Assurez-vous d'avoir installé :
*   Node.js v20+ (`nvm use 20`)
*   PostgreSQL 16 (Local ou accès distant)
*   Git

### 2. Installation
```bash
git clone https://github.com/SwissYakoubiDev/ced-core.git
cd ced-core
npm install
cp .env.example .env
```
⚠️ **Important** : Éditez le fichier `.env` avec vos clés API et URLs de base de données. **Ne commitez jamais ce fichier.**

### 3. Base de Données
```bash
# Pousse le schéma vers la DB (Développement)
npm run db:push

# (Production) Génère les migrations SQL
npm run db:generate
```

### 4. Lancement
```bash
# Mode Développement
npm run dev

# Build Production
npm run build
```

---

## 📂 Structure du Projet

```text
ced-core/
├── .github/workflows/      # CI/CD (Déploiement auto Infomaniak)
├── 00_Uniquement_pour_Allah/ # Niyyah & Engagements spirituels
├── client/                 # Frontend React/TypeScript
├── server/                 # Backend Node.js (API, Auth, Routes)
├── shared/                 # Schémas DB partagés (Drizzle)
├── docs/                   # Documentation technique & légale
└── package.json            # Configuration du projet
```

---

## 🔄 Déploiement Continu (CI/CD)

Ce projet utilise **GitHub Actions** pour déployer automatiquement toute modification taguée vers le VPS Infomaniak.

*   **Déclencheur** : Push d'un tag de version (ex: `v2.4.1-AUDITED`) sur la branche `main`.
*   **Processus** : Build → Tests → Déploiement SSH → Restart PM2.
*   **Configuration** : Voir le fichier [`.github/workflows/deploy-infomaniak.yml`](.github/workflows/deploy-infomaniak.yml).

> **Note de Sécurité** : Les secrets (`VPS_HOST`, `VPS_SSH_KEY`, etc.) doivent être configurés dans `Settings > Secrets and variables > Actions` du dépôt.

---

## 🤲 Conformité & Éthique

Notre code est développé avec l'intention de servir le bien commun.

*   ✅ **Zéro Riba** : Aucun algorithme de calcul d'intérêt n'est présent.
*   ✅ **Zéro Gharar** : Transparence totale des données et transactions.
*   ✅ **Souveraineté** : Hébergement 100% Suisse (Genève), respect strict de la LPD.
*   ✅ **Propriété Intellectuelle** : Code propriétaire pour garantir la sécurité financière.

---

## 📄 Licence & Propriété Intellectuelle

© 2024-2026 Yakoubi Yamina. Tous droits réservés.

Ce projet est **PROPRIÉTAIRE**. La reproduction, la distribution ou l'utilisation commerciale de ce code sans autorisation écrite préalable est strictement interdite.

---

## 📞 Contact & Support

*   **Direction** : Yakoubi Yamina
*   **Email Technique** : direction@ced-halaltech.ch
*   **Site Web** : [ced-halaltech.ch](https://ced-halaltech.ch)
*   **Localisation** : Genève, Suisse 🇨🇭

*"Qu'Allah mette la Barakah dans chaque ligne de code et dans chaque projet partagé ici."*
```
