### 🟦 CED-Core | Infra HalalTech

> **🇨🇭 Écosystème Financier & Technologique Conforme Sharia**  
> **📍 Localisation :** Genève, Suisse (Hébergé 100% chez Infomaniak)  
> **🔒 Conformité :** LPD / RGPD / AAOIFI (Zéro Riba, Zéro Gharar)  
> **🚀 Statut :** Production | Version: 2.4.1-AUDITED

---

## 🌟 Fondation Spirituelle & Éthique (Niyyah)

> *"Je ne cherche par ce projet que la Face d'Allah, et non la renommée, ni le gain mondain."*

Ce projet est guidé par une **Déclaration d'Intention (Niyyah)** stricte : servir uniquement la Face d'Allah, dans la sincérité (Ikhlas) et le bénéfice pour la communauté (Nafa').

- ✅ **Tawhîd :** Unicité de la vision technique et spirituelle.
- ✅ **'Adl :** Justice et équité intégrées dans les algorithmes.
- ✅ **Amanah :** Gestion responsable et sécurisée des données utilisateurs.

---

## 🎨 Charte Visuelle & Architecture (Infra HalalTech)

Pour une maintenance claire et une cohérence spirituelle, chaque module de ce dépôt respecte le **Code Couleur Souverain** :

| Couleur | Pôle | Entité | Usage dans le code |
| :--- | :--- | :--- | :--- |
| 🟦 **Bleu Marine** | **Infra** | `Infra HalalTech` | Config racine, Docker, CI/CD, DevOps (`.github`, `docker-compose`). |
| 🟩 **Vert** | **Finance** | `CED HalalTech` | Modules financiers, Zakat, Fiqh, Takaful (`server/finance`, `shared/schema`). |
| 🟧 **Orange** | **Formation** | `Institut Yamina` | LMS, Cours, Recherche (`client/src/components/education`). |
| 🟪 **Violet** | **IA** | `EuriaHub CED` | Algorithmes éthiques, IA, Filtres RAG (`server/ai`, `scripts/python`). |
| 🟦 **Turquoise** | **Communauté** | `Club Empreinte` | Forum, Utilisateurs, Événements (`client/src/components/community`). |
| 🟥 **Rouge** | **Suisse** | `Genève / Légal` | Conformité LPD, Lois locales, Logs d'audit (`docs/legal`, `server/compliance`). |
| 🟢 **Vert Pistache**| **Hébergeur** | `Infomaniak` | Scripts de déploiement, Variables d'env, SSH (`.env`, `deploy.sh`). |
| 🏳️ **Beige** | **Éthique** | `Transverse` | Documentation, Manifestes, Licences (`LICENSE`, `MANIFESTE_ETHIQUE.md`). |

---

## 🏗️ Architecture Technique

Une stack moderne, performante et **100% souveraine**, conçue pour l'excellence (Ihsan).

| Couche | Technologies | Couleur Associée |
| :--- | :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI | 🟦 Turquoise / 🟧 Orange |
| **Backend** | Node.js 20 (Express), TypeScript, API RESTful | 🟩 Vert / 🟪 Violet |
| **Database** | PostgreSQL 16, Redis 7 (via Drizzle ORM) | 🟥 Rouge (Données sensibles) |
| **IA & Data** | Python, Vector DB, Filtres Éthiques Locaux | 🟪 Violet |
| **Infra** | Infomaniak Cloud (Genève), Docker, Nginx, PM2 | 🟦 Bleu Marine / 🟢 Vert Pistache |

---

## 📂 Structure du Projet

```text
ced-core/
├── .github/                 # 🟦 Infra (CI/CD vers Infomaniak)
├── 00_Uniquement_pour_Allah/# 🏳️ Éthique (Niyyah & Engagements)
├── client/                  # Frontend React
│   ├── src/finance/         # 🟩 Modules Financiers
│   ├── src/education/       # 🟧 Modules Formation
│   ├── src/ai-ethics/       # 🟪 Filtres IA
│   └── src/community/       # 🟦 Communauté
├── server/                  # Backend Node.js
│   ├── compliance/          # 🟥 Conformité Suisse (LPD)
│   └── ai-engine/           # 🟪 Moteur Éthique
├── config/
│   ├── infomaniak-deploy.sh # 🟢 Script Déploiement Infomaniak
│   └── swiss-rules.js       # 🟥 Règles Locales
└── docs/                    # 🏳️ Documentation & Légal
🚀 Déploiement Souverain (Infomaniak)
Ce projet est conçu pour être déployé exclusivement sur l'infrastructure Infomaniak à Genève.

1. Prérequis
Accès SSH configuré vers votre VPS/Cloud Infomaniak.
Node.js v20+ et PM2 installés sur le serveur.
Variables d'environnement sécurisées (.env).
2. Installation & Lancement
bash
Copier
# 🟦 Clonage depuis l'Infra HalalTech
git clone git@github.com:SwissYakoubiDev/ced-core.git
cd ced-core
npm install

# 🟢 Déploiement vers Infomaniak (Genève)
chmod +x config/infomaniak-deploy.sh
./config/infomaniak-deploy.sh
3. Règle de Production
⚠️ Seul le code tagué vX.X-AUDITED est déployé en production.

bash
Copier
git tag -a v2.4.1-AUDITED -m "Audit éthique et technique validé"
git push origin v2.4.1-AUDITED
🔒 Sécurité & Conformité
Chiffrement : AES-256 au repos, TLS 1.3 en transit.
Données : Hébergées exclusivement à Genève (Suisse), soumises à la LPD.
Éthique : Zéro Riba (intérêt), Zéro Gharar (incertitude), Zéro exploitation de données.
📊 Métriques du Cœur Technique (Juillet 2025)
Métrique	Valeur	Impact
Pages Générées	465+	Modules Bank, Takaful, Academy, IA
Lignes de Code	156 000+	TypeScript, React, Node.js, SQL
Règles Fiqh	27 446+	Moteur de conformité "Zéro Riba" intégré
Langues	91	Support i18n complet (RTL/LTR)
📄 Licence & Propriété Intellectuelle
© 2024-2026 Yakoubi Yamina / CED HalalTech™. Tous droits réservés.

Ce projet est PROPRIÉTAIRE. La reproduction ou l'utilisation commerciale sans autorisation est interdite. Le code est écrit avec l'intention de servir le bien commun, sous la protection d'Allah.

"Qu'Allah mette la Barakah dans chaque ligne de code et dans chaque projet partagé ici."

📞 Contact : direction@ced-halaltech.ch | 🌐 Web: ced-halaltech.ch

