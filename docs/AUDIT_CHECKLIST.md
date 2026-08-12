# 🔍 Checklist d'Audit de Conformité (AUDIT_CHECKLIST)

> **Objectif :** Garantir que chaque version taguée `vX.X-AUDITED` est exempte de Riba, de Gharar et de toute dépendance non souveraine.
> **Lien avec la conformité :** Ce document est l'outil opérationnel dérivé de [compliance.md](compliance.md).
> **Utilisation :** À cocher intégralement avant chaque merge en production.
> **Version :** 2.4.1-AUDITED

---

## 📋 1. Audit de Code & Dépendances (Niveau : 🟦 Infra / 🟩 Finance)

- [ ] **Scan de Sécurité :** La commande `npm audit` (et `pip audit` si applicable) renvoie-t-elle 0 vulnérabilité critique ?
- [ ] **Souveraineté des Paquets :** Toutes les nouvelles dépendances ajoutées dans `package.json` sont-elles issues de sources fiables et non soumises à des restrictions géopolitiques majeures ?
  - *Vérification :* Aucune dépendance directe de fournisseurs cloud US (AWS SDK, Google Cloud, etc.) n'a été ajoutée.
- [ ] **Code Mort :** Tous les `console.log()` de débogage et les blocs de code commentés inutiles ont-ils été supprimés ?
- [ ] **Respect des Couleurs :** Chaque nouveau fichier créé est-il situé dans le dossier correspondant à sa couleur (ex: `server/finance` pour le Vert) ?

---

## ⚖️ 2. Audit Éthique & Fiqh (Niveau : 🟩 Finance / 🟥 Légal)

- [ ] **Test de Non-Régression "Riba" :**
  - [ ] Scénario A : Tentative de création d'un prêt avec intérêt (`interestRate > 0`). -> **Résultat attendu : Rejet immédiat.**
  - [ ] Scénario B : Tentative de transaction sans actif sous-jacent (`underlyingAsset === null`). -> **Résultat attendu : Rejet immédiat.**
  - [ ] Scénario C : Vérification que les frais sont fixes et transparents (pas de pourcentage variable caché).
- [ ] **Test de Non-Régression "Gharar" :**
  - [ ] Vérification que toutes les variables obligatoires d'un contrat sont présentes avant signature.
  - [ ] Absence totale de fonctions aléatoires (`Math.random()`) dans la logique financière (utilisation de `crypto` uniquement).
- [ ] **Mise à jour du Moteur de Règles :** Si une nouvelle règle Fiqh a été implémentée, le fichier `config/swiss-rules.js` a-t-il été incrémenté et commenté ?

---

## 🛡️ 3. Audit de Données & Souveraineté (Niveau : 🟥 Légal / 🟪 IA)

- [ ] **Localisation des Données :**
  - [ ] Confirmation que les variables d'environnement (`DATABASE_URL`, `STORAGE_ENDPOINT`) pointent exclusivement vers des infrastructures Infomaniak (Genève).
  - [ ] Aucune URL vers un service US (OpenAI, AWS S3, Firebase) n'est présente dans le code ou les fichiers `.env.example`.
- [ ] **Chiffrement :**
  - [ ] Les champs sensibles (PII) sont-ils chiffrés en base de données ?
  - [ ] Le protocole TLS 1.3 est-il forcé pour toutes les communications externes ?
- [ ] **IA Éthique (Si applicable) :**
  - [ ] Vérification que le modèle IA utilisé est local (ex: Ollama sur serveur dédié) et n'envoie aucune donnée vers une API externe.
  - [ ] Les filtres de contenu éthique sont-ils actifs et testés ?

---

## 📝 4. Audit Documentaire

- [ ] **Mise à jour du CHANGELOG :** Le fichier `CHANGELOG.md` (ou la section Release) reflète-t-il fidèlement les changements ?
- [ ] **Versioning :** Le tag suit-il bien le format `vX.X.X-AUDITED` ?
- [ ] **Documentation :** La documentation technique (`README`, `DEPLOYMENT`, `CONTRIBUTING`) a-t-elle été mise à jour si l'architecture a changé ?

---

## ✅ Validation Finale

**Date de l'audit :** `[JJ/MM/AAAA]`  
**Auditeur :** `[Nom de l'auditeur]`

- [ ] **Tous les points ci-dessus sont cochés.**
- [ ] **Je certifie que cette version est conforme à la Niyyah du projet et aux lois suisses en vigueur.**

> *"Allah est beau et Il aime la beauté, Il est pur et Il aime la pureté."* (Muslim)  
> La pureté du code est notre engagement.

**Signature :** ____________________
