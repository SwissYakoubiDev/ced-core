# 🟦 CED-Core | Infra HalalTech

![GitHub Release](https://img.shields.io/github/v/release/SwissYakoubiDev/ced-core?label=Dernière%20Version&color=27ae60)
![GitHub Commit Activity](https://img.shields.io/github/commit-activity/m/SwissYakoubiDev/ced-core?label=Activité&color=2980b9)
![GitHub License](https://img.shields.io/github/license/SwissYakoubiDev/ced-core?label=Licence&color=orange)
![GitHub Repo stars](https://img.shields.io/github/stars/SwissYakoubiDev/ced-core?style=social)

# 🟦 CED-Core | Infra HalalTech

> **🇨🇭 Écosystème Financier & Technologique Conforme Sharia**  
> 📍 **Localisation :** Genève, Suisse (Hébergé 100% chez Infomaniak)  
> 🔒 **Conformité :** LPD / RGPD / AAOIFI (Zéro Riba, Zéro Gharar)  
> 🚀 **Statut :** Production | Version: `2.4.1-AUDITED`

---

## 🌟 Fondation Spirituelle & Éthique (Niyyah)

> *"Je ne cherche par ce projet que la Face d'Allah, et non la renommée, ni le gain mondain."*

Ce projet est guidé par une **Déclaration d'Intention (Niyyah)** stricte : servir uniquement la Face d'Allah, dans la sincérité (*Ikhlas*) et le bénéfice pour la communauté (*Nafa'*).

*   ✅ **Tawhîd :** Unicité de la vision technique et spirituelle.
*   ✅ **'Adl :** Justice et équité intégrées dans les algorithmes.
*   ✅ **Amanah :** Gestion responsable et sécurisée des données utilisateurs.

---

## 🎨 Charte Visuelle & Architecture (Infra HalalTech)

Pour une maintenance claire et une cohérence spirituelle, chaque module de ce dépôt respecte le **Code Couleur Souverain**. Cette charte s'applique à la fois à la documentation et à la structure des dossiers dans le code.

| Couleur | Pôle | Entité | Usage dans le code |
| :--- | :--- | :--- | :--- |
| 🟦 **Bleu Marine** | Infra | Infra HalalTech | Config racine, Docker, CI/CD, DevOps (`.github`, `docker-compose`). |
| 🟩 **Vert** | Finance | CED HalalTech | Modules financiers, Zakat, Fiqh, Takaful (`server/finance`, `shared/schema`). |
| 🟧 **Orange** | Formation | Institut Yamina | LMS, Cours, Recherche (`client/src/components/education`). |
| 🟪 **Violet** | IA | EuriaHub CED | Algorithmes éthiques, IA, Filtres RAG (`server/ai`, `scripts/python`). |
| 🔷 **Turquoise** | Communauté | Club Empreinte | Forum, Utilisateurs, Événements (`client/src/components/community`). |
| 🟥 **Rouge** | Suisse | Genève / Légal | Conformité LPD, Lois locales, Logs d'audit (`docs/legal`, `server/compliance`). |
| 🟢 **Vert Pistache** | Hébergeur | Infomaniak | Scripts de déploiement, Variables d'env, SSH (`.env`, `deploy.sh`). |
| ⚪ **Beige** | Éthique | Transverse | Documentation, Manifestes, Licences (`LICENSE`, `MANIFESTE_ETHIQUE.md`). |
| 📺 **Média** | PRETTYHOWQ | Web TV & Streaming | Composants vidéo (`client/src/media`). |
| 📞 **Com** | Téléphonie | Standard & Appels | Intégration VoIP (`server/telephony`). |

---

## 🏗️ Architecture Technique

Une stack moderne, performante et 100% souveraine, conçue pour l'excellence (*Ihsan*).

| Couche | Technologies | Couleur Associée |
| :--- | :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI | 🔷 Turquoise / 🟧 Orange |
| **Backend** | Node.js 20 (Express), TypeScript, API RESTful | 🟩 Vert / 🟪 Violet |
| **Database** | PostgreSQL 16, Redis 7 (via Drizzle ORM) | 🟥 Rouge (Données sensibles) |
| **IA & Data** | Python, Vector DB, Filtres Éthiques Locaux | 🟪 Violet |
| **Infra** | Infomaniak Cloud (Genève), Docker, Nginx, PM2 | 🟦 Bleu Marine / 🟢 Vert Pistache |

### 📂 Structure du Projet

```bash
ced-core/
├── .github/                 # 🟦 Infra (CI/CD, Workflow 'deploy-swiss-audited.yml')
├── 00_Uniquement_pour_Allah/# 🏳️ Éthique (Niyyah & Engagements)
├── client/                  # Frontend React
│   ├── src/finance/         # 🟩 Modules Financiers
│   ├── src/education/       # 🟧 Modules Formation (LMS)
│   ├── src/media/           # 📺 NOUVEAU : Lecteur Web TV & VOD
│   ├── src/ai-ethics/       # 🟪 Filtres IA
│   └── src/community/       # 🔷 Communauté
├── server/                  # Backend Node.js
│   ├── compliance/          # 🟥 Conformité Suisse (LPD)
│   ├── ai-engine/           # 🟪 Moteur Éthique
│   └── telephony/           # 📞 NOUVEAU : Intégration API Téléphonie
├── config/
│   ├── infomaniak-deploy.sh # 🟢 Script Déploiement
│   ├── swiss-rules.js       # 🟥 Règles Locales
│   └── runner-setup.sh      # 🆕 Script Installation GitHub Runner (Souverain)
└── docs/                    # 🏳️ Documentation & Légal                                   🌐 Écosystème Étendu & Services Associés
Ce dépôt ced-core est le cœur technique, articulé avec plusieurs briques fonctionnelles hébergées sur la même infrastructure souveraine (Org: TechForAll) :

Service	Usage	Intégration Technique	Couleur
🎓 CED Academy	Formation & Certification	Hébergé sur Serveur Cloud Managé. DB liée à ced-core.	🟧 Orange
📺 PRETTYHOWQ	Média & Information	Stockage vidéo sur Objet Storage / VOD. Lecteur dans client/src/media.	📺 Média
📞 Téléphonie	Communication Pro	Numéro 022 (Genève) via Infomaniak. Webhooks dans server/telephony.	📞 Com
💬 Collaboration	Équipe & Support	kChat (interne) et kMeet (visio). Liens via API calendrier.	🟦 Bleu Marine
🗄️ Stockage	Documents & Backups	kDrive pour docs sensibles. Sync auto via scripts.	🟢 Vert Pistache
🚀 Déploiement Souverain (Infomaniak)
Ce projet est conçu pour être déployé exclusivement sur l'infrastructure Infomaniak à Genève, via un Runner Auto-Hébergé.

1. Prérequis Infrastructure
Serveur Cloud Managé (Org: TechForAll) provisionné.
GitHub Runner installé sur le serveur (labels: ced-core-runner, swiss-infra).
Accès SSH configuré et variables d'environnement (.env) sécurisées.
Services complémentaires actifs : Stockage Objet (VOD), Téléphonie 022, kSuite.
2. Installation & Lancement (Via Runner)
Le déploiement est automatisé par le workflow .github/workflows/deploy-swiss-audited.yml.

bash
Copier
# 🟦 Clonage depuis l'Infra HalalTech (sur le serveur suisse)
git clone git@github.com:SwissYakoubiDev/ced-core.git
cd ced-core
npm install

# 🟢 Déploiement manuel (si nécessaire)
chmod +x config/infomaniak-deploy.sh
./config/infomaniak-deploy.sh
3. Règle de Production (Gouvernance)
⚠️ Seul le code tagué vX.X-AUDITED est déployé en production. Le workflow rejette tout autre tag.

bash
Copier
# Exemple de tag pour release
git tag -a v2.4.1-AUDITED -m "Audit éthique et technique validé"
git push origin v2.4.1-AUDITED
🔒 Sécurité & Conformité
Chiffrement : AES-256 au repos, TLS 1.3 en transit.
Données : Hébergées exclusivement à Genève (Suisse), soumises à la LPD.
Éthique : Zéro Riba (intérêt), Zéro Gharar (incertitude), Zéro exploitation de données.
Souveraineté CI/CD : Le code n'est jamais compilé sur les serveurs de GitHub (USA), uniquement sur le runner suisse.
📊 Métriques du Cœur Technique (Juillet 2025)
Métrique	Valeur	Impact
Pages Générées	465+	Modules Bank, Takaful, Academy, IA, Média
Lignes de Code	156 000+	TypeScript, React, Node.js, SQL
Règles Fiqh	27 446+	Moteur de conformité "Zéro Riba" intégré
Langues	91	Support i18n complet (RTL/LTR)
📄 Licence & Propriété Intellectuelle
© 2024-2026 Yakoubi Yamina / CED HalalTech™. Tous droits réservés.

Ce projet est PROPRIÉTAIRE. La reproduction ou l'utilisation commerciale sans autorisation est interdite. Le code est écrit avec l'intention de servir le bien commun, sous la protection d'Allah.

"Qu'Allah mette la Barakah dans chaque ligne de code et dans chaque projet partagé ici."

📞 Contact : direction@ced-halaltech.ch
🌐 Web : ced-halaltech.ch     
