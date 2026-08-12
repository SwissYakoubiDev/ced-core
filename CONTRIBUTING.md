# 🛠️ Directives de Contribution (CONTRIBUTING)

> **Avertissement :** Ce dépôt contient le cœur financier et éthique de CED HalalTech™. Toute contribution doit respecter strictement la **Niyyah**, la **Charte Couleur** et les règles de **Souveraineté**.
> **Version :** 2.4.1-AUDITED

---

## 📜 1. Principes Fondamentaux (Avant de Coder)

Avant d'écrire la moindre ligne de code, assurez-vous que votre contribution respecte ces trois piliers :
1.  **Conformité Sharia :** Aucune logique introduisant du Riba (intérêt), du Gharar (incertitude) ou du Maysir (hasard) ne sera acceptée.
2.  **Souveraineté des Données :** Aucun appel API vers des services non souverains (ex: Google APIs, AWS, Azure, OpenAI US) n'est autorisé. Utilisez exclusivement les services Infomaniak ou des modèles locaux (Ollama).
3.  **Respect de la Charte Couleur :** Chaque fichier doit être placé dans le dossier correspondant à sa couleur (voir ci-dessous).

---

## 🎨 2. Charte Couleur & Structure des Fichiers

Le code est organisé par couleur pour garantir une maintenance claire et une cohérence spirituelle. Respectez scrupuleusement cette arborescence :

| Couleur | Pôle | Dossiers Cibles | Type de Code Autorisé |
| :--- | :--- | :--- | :--- |
| 🟦 **Bleu Marine** | Infra | `.github/`, `docker/`, `config/` | CI/CD, Docker, Scripts de déploiement. |
| 🟩 **Vert** | Finance | `server/finance/`, `shared/schema/` | Logique métier financière, Zakat, Fiqh. |
| 🟧 **Orange** | Formation | `client/src/education/` | Composants LMS, Cours, Quiz. |
| 🟪 **Violet** | IA | `server/ai-engine/`, `scripts/python/` | Algorithmes éthiques, RAG local, Filtres. |
| 🔷 **Turquoise** | Communauté | `client/src/community/` | Forum, Utilisateurs, Événements. |
| 🟥 **Rouge** | Légal | `server/compliance/`, `docs/legal/` | Conformité LPD, Logs d'audit, Règles Suisses. |
| 🟢 **Vert Pistache** | Hébergeur | `.env`, `deploy.sh` | Configs spécifiques Infomaniak. |

⚠️ **Règle d'Architecture :** Un fichier de couleur "Vert" (Finance) ne doit jamais importer directement un module de couleur "Violet" (IA) sans passer par une couche de validation "Rouge" (Compliance).

---

## ✍️ 3. Standards de Code & Commits

### 3.1 Conventions de Nommage
*   **Fichiers :** `kebab-case` explicite (ex: `riba-validator.ts`, `user-audit-log.ts`).
*   **Fonctions :** Noms verbeux indiquant l'intention (ex: `calculateProfitShare` et non `calc`).
*   **Commentaires :** Chaque fonction complexe doit inclure un commentaire expliquant la **Niyyah** (l'intention éthique) de la logique.

### 3.2 Messages de Commit
Utilisez le format suivant pour identifier rapidement le pôle concerné :
```text
[COULEUR] Type: Description concise
🔒 4. Procédure de Validation (Audit Interne)
Avant tout push vers la branche main, vous devez effectuer cette checklist personnelle :

Scan Dépendances : npm audit est-il propre ? Aucune nouvelle dépendance n'est-elle issue d'un fournisseur non souverain ?
Test Riba : Avez-vous ajouté ou modifié une règle financière ? Si oui, avez-vous testé un cas de rejet d'intérêt ?
Données Sensibles : Aucun secret, clé API ou donnée personnelle n'est présent dans le code (utilisez .env).
Localisation : Le code est-il bien dans le dossier de la bonne couleur ?
🚫 5. Ce qui est Strictement Interdit
❌ Utiliser Math.random() pour des décisions financières (utilisez un générateur cryptographique sécurisé).
❌ Importer des librairies liées à la crypto-spéculation ou aux jeux de hasard.
❌ Hardcoder des URLs de services cloud américains (Google, Microsoft, Amazon).
❌ Modifier les fichiers de configuration du Runner (ced-runner-geneva-01) sans validation explicite.
🤝 6. Processus de Review
Même pour des contributions mineures, une revue est obligatoire :

Créez une branche feature : feature/[couleur]/nom-fonctionnalite.
Soumettez une Pull Request (PR) avec la description détaillée de l'impact éthique.
La PR sera validée par le Conseil des Gardiens Éthiques (ou l'Architecte Lead) après test de non-régression.
"La précision dans le code est une forme d'adoration. Qu'Allah accepte notre travail et le rende bénéfique pour la Oummah."
