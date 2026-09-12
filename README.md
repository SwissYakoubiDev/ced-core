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


```mermaid
flowchart TD
    %% Nœuds Principaux
    User((👤 Utilisateur))
    
    subgraph Infra["🟦 Infra HalalTech (Suisse)"]
        direction TB
        Gateway[🟦 Gateway / Nginx]
        Runner[🟦 GitHub Runner Souverain]
    end

    subgraph Core["🏛️ Cœur CED-Core"]
        direction LR
        Frontend[🔷 Frontend React<br/>Community & Education]
        Backend[🟩 Backend Finance<br/>Logique Métier]
        Compliance[🟥 Compliance Layer<br/>Filtre Anti-Riba/Gharar]
        AI[🟪 Moteur IA Éthique<br/>Ollama Local]
    end

    subgraph Data["🗄️ Données Souveraines"]
        DB[(🟥 PostgreSQL<br/>Genève)]
        Vector[(🟪 Vector DB<br/>Mémoire IA)]
    end

    subgraph Host["🟢 Infomaniak Cloud"]
        Geneva[🇨🇭 Datacenter Genève]
    end

    %% Flux de Données
    User --> Gateway
    Gateway --> Frontend
    Frontend --> Backend
    
    %% Règle Critique : Validation Rouge avant IA
    Backend --> Compliance
    Compliance -- ✅ Validé Charia --> AI
    Compliance -- ❌ Rejeté --> Frontend
    
    AI --> Vector
    Backend --> DB
    
    %% Hébergement
    Infra -.-> Host
    Core -.-> Host
    Data -.-> Host





