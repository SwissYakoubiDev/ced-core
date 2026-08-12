# 🟥 Documentation de Conformité (Compliance)

> **Objectif :** Détailler l'implémentation technique des règles éthiques (Sharia) et légales (LPD/RGPD) au sein de CED-Core.
> **Version :** 2.4.1-AUDITED
> **Responsable :** Pôle Conformité (🟥 Rouge) & Pôle Finance (🟩 Vert)

---

## 📜 1. Principes Fondamentaux

Ce document atteste que l'architecture technique de `ced-core` est conçue pour garantir le respect strict des principes suivants :

### 1.1 Conformité Sharia (AAOIFI)
*   **Zéro Riba (Intérêt) :** Aucun algorithme ne calcule, ne génère ou ne promeut d'intérêts composés ou simples. Les modèles financiers sont basés sur le partage de profits et pertes (Mudarabah, Musharakah) ou la vente avec marge (Murabaha).
*   **Zéro Gharar (Incertitude/Spéculation) :** Les contrats intelligents et les règles métier éliminent toute ambiguïté majeure sur l'objet, le prix ou la livraison. Les produits dérivés spéculatifs sont interdits.
*   **Zéro Maysir (Jeu de hasard) :** Aucune mécanique de jeu, de loterie ou de spéculation pure n'est intégrée.

### 1.2 Conformité Légale (Suisse & Europe)
*   **LPD (Loi sur la Protection des Données - Suisse) :** Les données des utilisateurs sont hébergées exclusivement à Genève. Le consentement est explicite, granulaire et révocable.
*   **RGPD (Règlement Général sur la Protection des Données) :** Application des principes de minimisation des données, de limitation de la conservation et de droit à l'oubli pour les utilisateurs européens.

---

## ⚙️ 2. Implémentation Technique : Moteur "Zéro Riba"

Le cœur de la conformité réside dans le module `server/finance` et le fichier de règles `config/swiss-rules.js`.

### 2.1 Architecture du Moteur de Règles
Le système utilise un moteur de règles déterministe qui intercepte toute transaction financière avant validation.

*   **Fichier Source :** `config/swiss-rules.js` (🟥 Rouge)
*   **Nombre de règles actives :** 27 446+ (à la date de la v2.4.1)
*   **Mécanisme :** Chaque transaction passe par une chaîne de validation (`Validation Chain`). Si une seule règle échoue, la transaction est rejetée avec un code d'erreur explicite.

### 2.2 Exemple de Règle Anti-Riba
Voici un extrait simplifié de la logique implémentée (pseudo-code TypeScript) :

```typescript
// 🟩 server/finance/validators/riba-check.ts

export function validateTransaction(tx: Transaction): ValidationResult {
  // Règle 1 : Interdiction des taux d'intérêt variables
  if (tx.type === 'LOAN' && tx.interestRate !== 0) {
    return {
      valid: false,
      code: 'RIBA_DETECTED_VARIABLE_RATE',
      message: 'Tout taux d\'intérêt est strictement interdit.'
    };
  }

  // Règle 2 : Vérification du sous-jacent (Asset-Backed)
  if (tx.type === 'MURABAHA' && !tx.underlyingAsset) {
    return {
      valid: false,
      code: 'GHARAR_NO_ASSET',
      message: 'La transaction doit être adossée à un actif réel tangible.'
    };
  }

  // Règle 3 : Transparence totale des frais
  if (tx.fees && !tx.fees.transparencyAccepted) {
    return {
      valid: false,
      code: 'GHARAR_HIDDEN_FEES',
      message: 'Les frais doivent être connus et acceptés explicitement avant validation.'
    };
  }

  return { valid: true };
}
2.3 Auditabilité
Chaque décision du moteur est journalisée de manière immuable dans la table audit_logs (🟥 Rouge) avec :

L'ID de la transaction.
La liste des règles vérifiées.
Le résultat (Validé/Rejeté).
L'empreinte numérique (Hash) de la règle appliquée.
🛡️ 3. Protection des Données (LPD / RGPD)
La conformité légale est assurée par l'infrastructure et le code du module server/compliance.

3.1 Souveraineté des Données
Localisation Physique : Toutes les bases de données (PostgreSQL, Redis) et le stockage objet (VOD, Backups) sont situés dans le datacenter Infomaniak à Genève, Suisse.
Exclusion Juridique : Aucune donnée ne transite par des serveurs soumis au Cloud Act américain ou à d'autres juridictions extraterritoriales. Le Runner CI/CD est également localisé à Genève.
3.2 Chiffrement
Au Repos (At Rest) : Disques chiffrés en AES-256. Les champs sensibles (PII) dans la BDD sont chiffrés au niveau applicatif avant insertion.
En Transit : TLS 1.3 obligatoire pour toutes les communications API et web.
3.3 Droits des Utilisateurs
Le module server/compliance/user-rights.ts implémente nativement :

Droit d'accès : Export complet des données en JSON/CSV sous 48h.
Droit à l'oubli : Suppression définitive et anonymisation des logs associés sur demande.
Gestion du consentement : Stockage horodaté de chaque acceptation de cookie ou de traitement de donnée.
📊 4. Matrice de Conformité
Domaine	Exigence	Implémentation Technique	Module Associé	Couleur
Finance	Interdiction Riba	Moteur de règles bloquant interestRate > 0	server/finance	🟩 Vert
Finance	Adossement Actif	Vérification champ underlyingAsset obligatoire	server/finance	🟩 Vert
Légal	Hébergement Suisse	Contraintes infra Infomaniak Genève	config/infomaniak-deploy.sh	🟢 Vert Pistache
Légal	Chiffrement	AES-256 + TLS 1.3	server/compliance	🟥 Rouge
Éthique	Transparence	Logs d'audit immuables et accessibles	server/compliance	🟥 Rouge
IA	Biais & Éthique	Filtres RAG locaux, pas d'envoi vers API US	server/ai-engine	🟪 Violet
🔍 5. Procédure d'Audit
Pour tout audit (interne ou externe), les étapes suivantes doivent être suivies :

Revue de Code : Vérification manuelle des fichiers dans server/finance et config/swiss-rules.js.
Test de Pénétration : Tentative de soumission de transactions non conformes (avec intérêt, sans actif) pour vérifier le rejet systématique.
Vérification Infrastructure : Confirmation via les outils Infomaniak que toutes les instances sont bien localisées à Genève.
Analyse des Logs : Tirage aléatoire de 100 transactions dans audit_logs pour tracer la décision du moteur de règles.
"La justice technique est le reflet de la justice divine."


