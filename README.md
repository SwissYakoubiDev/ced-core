# 🇨🇭 CED HalalTech Infrastructure (ced-core)

> **Écosystème Financier & Technologique Conforme Sharia | Genève, Suisse**  
> *Version: 2.4.1 | Build: Production*  
>
> **Mission :** Développer une infrastructure numérique éthique, transparente et conforme aux principes de l'Islam, au service de la communauté et de l'économie réelle.

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)
[![Hosted in: Switzerland 🇨🇭](https://img.shields.io/badge/Hosted%20in-Switzerland%20%F0%9F%87%A8%F0%9F%87%AD-blue)](https://www.infomaniak.com)
[![Compliance: LPD/RGPD](https://img.shields.io/badge/Compliance-LPD%2FRGPD-green)](https://www.ced-halaltech.ch)
[![Stack: React/Node](https://img.shields.io/badge/Stack-React%2018%20%7C%20Node.js%2020-purple)](https://react.dev)

---

## 🌐 Vue d'ensemble

Ce dépôt (`ced-core`) est le **cœur technique** de l'écosystème CED HalalTech. Il contient l'architecture de référence, le code source principal (Frontend/Backend/DB) et les configurations de déploiement pour nos plateformes.

### 📡 Réseau d'Infrastructures (SwissYakoubiDev)

Ce socle technique dessert 5 domaines stratégiques, tous hébergés souverainement en Suisse :

| Domaine | Rôle Principal | Statut | URL |
| :--- | :--- | :---: | :--- |
| **swissyakoubidev.ch** | Identité Corporate & Racine | 🟢 Actif | [Voir](https://swissyakoubidev.ch) |
| **studio.swissyakoubidev.ch** | Vitrine Solutions & Services | 🟠 Construction | [Voir](https://studio.swissyakoubidev.ch) |
| **lab.swissyakoubidev.ch** | R&D, Tests & Prototypage IA | 🔵 Privé | *Interne* |
| **fullstack.swissyakoubidev.ch** | Démos Techniques & Portfolio | 🔵 Privé | *Interne* |
| **dev.swissyakoubidev.ch** | Documentation API & DevTools | 🔵 Privé | *Interne* |

> **Souveraineté Numérique :** L'ensemble de ces infrastructures est déployé sur **Infomaniak (Genève)**, garantissant une conformité totale à la LPD et une indépendance vis-à-vis des GAFAM.

---

## 🏗️ Architecture Technique

Une stack moderne, performante et sécurisée, conçue pour l'excellence et la maintenabilité.

### Stack Principale
*   **Frontend :** React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI
*   **Backend :** Node.js (Express), TypeScript
*   **Base de Données :** PostgreSQL 16, Redis 7 (via Drizzle ORM)
*   **IA & Data :** Anthropic Claude, Python (Scripts d'analyse)
*   **Hébergement :** Infomaniak (Genève) 🇨🇭

### Sécurité & Conformité
*   🔒 **Chiffrement :** AES-256 au repos, TLS 1.3 en transit.
*   🛡️ **Auth :** 2FA obligatoire, Gestion de sessions sécurisée.
*   ⚖️ **Éthique :** Zéro Riba, Zéro Gharar, Conformité RGPD/LPD stricte.

---

## 🚀 Démarrage Rapide (Quick Start)

### 1. Prérequis
Assurez-vous d'avoir installé :
*   Node.js v20+
*   npm ou yarn
*   PostgreSQL (local ou accès distant)

### 2. Installation
Exécutez les commandes suivantes dans votre terminal :

```bash
git clone https://github.com/SwissYakoubiDev/ced-core.git
cd ced-core
npm install
cp .env.example .env
⚠️ Important : Éditez le fichier .env avec vos clés API et URLs de base de données. Ne commitez jamais ce fichier.

3. Base de Données

bash
Copier
# Pousse le schéma vers la DB
npm run db:push

# (Optionnel) Génère les migrations
npm run db:generate
4. Lancement

bash
Copier
# Mode Développement
npm run dev

# Build Production
npm run build
📂 Structure du Projet

plain text
Copier
ced-core/
├── .github/workflows/      # CI/CD (Déploiement auto Infomaniak)
├── client/                 # Frontend React/TypeScript
│   ├── src/
│   │   ├── components/     # Composants UI réutilisables
│   │   ├── pages/          # Pages spécifiques
│   │   └── lib/            # Utilitaires (API, Auth, i18n)
├── server/                 # Backend Node.js
│   ├── routes.ts           # Points de terminaison API
│   ├── db.ts               # Configuration DB (Drizzle)
│   └── services/           # Logique métier (IA, Finance)
├── shared/                 # Schémas DB partagés (Drizzle)
├── docs/                   # Documentation technique & légale
└── package.json            # Configuration du projet
🔄 Déploiement Continu (CI/CD)

Ce projet utilise GitHub Actions pour déployer automatiquement toute modification sur la branche main vers les serveurs Infomaniak.

Déclencheur : Push sur main ou lancement manuel.
Processus : Build → Tests → Déploiement FTP/SFTP → Notification.
Configuration : Voir le fichier .github/workflows/deploy-infomaniak.yml.
Note : Les secrets (FTP_USERNAME, FTP_PASSWORD) doivent être configurés dans les paramètres du dépôt GitHub (Settings > Secrets and variables).
🤲 Conformité & Éthique

Notre code est développé avec l'intention (Niyyah) de servir le bien commun.

✅ Zéro Riba : Aucun algorithme de calcul d'intérêt.
✅ Zéro Gharar : Transparence totale des données et transactions.
✅ Protection des données : Hébergement suisse, respect strict de la LPD.
✅ Propriété Intellectuelle : Certains modules sont propriétaires pour garantir la sécurité financière.
📄 Licence & Propriété Intellectuelle

© 2024-2026 Yakoubi Yamina. Tous droits réservés.

Ce projet est PROPRIÉTAIRE. La reproduction, la distribution ou l'utilisation commerciale de ce code sans autorisation écrite préalable est strictement interdite. Voir le fichier LICENSE pour les détails juridiques complets.

📞 Contact & Support

Direction : Yakoubi Yamina
Email Technique : direction@ced-halaltech.ch
Site Web : ced-halaltech.ch
Localisation : Genève, Suisse 🇨🇭
"Qu'Allah mette la Barakah dans chaque ligne de code et dans chaque projet partagé ici."

Développé avec ❤️ et ☕ par l'équipe CED HalalTech.


