# 🇨🇭 CED HalalTech Infrastructure (ced-core)

> **Écosystème Financier & Technologique Conforme Sharia | Genève, Suisse**  
> *Version: 2.4.1 | Build: Production*

**Mission :** Développer une infrastructure numérique éthique, transparente et conforme aux principes de l'Islam, au service de la communauté et de l'économie réelle.

[![Deploy to Infomaniak](https://github.com/SwissYakoubiDev/ced-core/actions/workflows/deploy-infomaniak.yml/badge.svg)](https://github.com/SwissYakoubiDev/ced-core/actions/workflows/deploy-infomaniak.yml)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary_Sharia_Compliance-red.svg)](LICENSE)

---

## 🌐 Vue d'ensemble

Ce dépôt (`ced-core`) est le **cœur technique** de l'écosystème CED HalalTech. Il contient l'architecture de référence, le code source principal (Frontend/Backend/DB) et les configurations de déploiement pour nos plateformes.

| Projet | Domaine | Statut | URL |
| :--- | :--- | :---: | :--- |
| **CED HalalTech** | Finance Islamique | 🟢 Production | [ced-halaltech.ch](https://ced-halaltech.ch) |
| **EPI Platform** | Services Node.js | 🟡 Développement | [epi.swissyakoubidev.ch](https://epi.swissyakoubidev.ch) |
| **Studio** | Création & Prod | 🟠 Construction | [studio.swissyakoubidev.ch](https://studio.swissyakoubidev.ch) |

---

## 🏗️ Architecture Technique

Une stack moderne, performante et sécurisée, hébergée 100% en Suisse.

### Stack Principale
- **Frontend :** React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI
- **Backend :** Node.js (Express), TypeScript
- **Base de Données :** PostgreSQL 16, Redis 7 (via Drizzle ORM)
- **IA & Data :** Anthropic Claude, Python (Scripts)
- **Hébergement :** Infomaniak (Genève) 🇨🇭

### Sécurité & Conformité
- 🔒 **Chiffrement :** AES-256 au repos, TLS 1.3 en transit.
- 🛡️ **Auth :** 2FA obligatoire, Gestion de sessions sécurisée.
- ⚖️ **Éthique :** Zéro Riba, Zéro Gharar, Conformité RGPD/LPD.

---

## 🚀 Démarrage Rapide (Quick Start)

### 1. Prérequis
- Node.js v20+
- npm ou yarn
- PostgreSQL local ou accès à une instance distante

### 2. Installation
Exécutez les commandes suivantes dans votre terminal :
- `git clone https://github.com/SwissYakoubiDev/ced-core.git`
- `cd ced-core`
- `npm install`
- `cp .env.example .env`
- *Important :* Éditez le fichier `.env` avec vos clés API et URLs de base de données.

### 3. Base de Données
- `npm run db:push` (Pousse le schéma vers la DB)
- `npm run db:generate` (Optionnel : Génère les migrations)

### 4. Lancement
- `npm run dev` (Mode Développement)
- `npm run build` (Build Production)

---

## 📂 Structure du Projet

Architecture des dossiers principaux :
- `.github/workflows/` : CI/CD (Déploiement auto Infomaniak)
- `client/` : Frontend React/TypeScript (`src/components`, `src/pages`, `src/lib`)
- `server/` : Backend Node.js (`routes.ts`, `db.ts`, `openai.ts`)
- `shared/` : Schémas DB partagés (Drizzle)
- `docs/` : Documentation technique
- `package.json` : Configuration du projet

---

## 🔄 Déploiement Continu (CI/CD)

Ce projet utilise GitHub Actions pour déployer automatiquement toute modification sur la branche `main` vers les serveurs Infomaniak.

- **Déclencheur :** Push sur `main` ou lancement manuel.
- **Processus :** Build → Tests → Déploiement FTP/SFTP → Notification.
- **Configuration :** Voir le fichier `.github/workflows/deploy-infomaniak.yml`.
- **Note :** Les secrets (`FTP_USERNAME`, `FTP_PASSWORD`) doivent être configurés dans les paramètres du dépôt GitHub.

---

## 🤲 Conformité & Éthique

Notre code est développé avec l'intention (*Niyyah*) de servir le bien commun.

- ✅ **Zéro Riba :** Aucun algorithme de calcul d'intérêt.
- ✅ **Zéro Gharar :** Transparence totale des données et transactions.
- ✅ **Protection des données :** Hébergement suisse, respect strict de la LPD.
- ✅ **Open Source (Partiel) :** Certains modules sont propriétaires pour garantir la sécurité financière.

---

## 📄 Licence & Propriété Intellectuelle

© 2024-2026 Yakoubi Yamina. Tous droits réservés.

Ce projet est **PROPRIÉTAIRE**. La reproduction, la distribution ou l'utilisation commerciale de ce code sans autorisation écrite préalable est strictement interdite. Voir le fichier `LICENSE` pour les détails juridiques complets.

---

## 📞 Contact & Support

**Direction :** Yakoubi Yamina  
**Email Technique :** direction@ced-halaltech.ch  
**Site Web :** [ced-halaltech.ch](https://ced-halaltech.ch)  
**Localisation :** Genève, Suisse 🇨🇭

*Développé avec ❤️ et ☕ par l'équipe CED HalalTech.*
