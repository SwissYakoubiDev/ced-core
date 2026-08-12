# 🚀 Guide de Déploiement Souverain (CED-Core)

> **Objectif :** Déployer l'infrastructure CED-Core exclusivement sur le sol suisse (Infomaniak, Genève) en garantissant qu'aucune ligne de code ne soit compilée hors de cette juridiction.
> **Version :** 2.4.1-AUDITED
> **Responsable :** Infra HalalTech (🟦 Bleu Marine)

---

## 📜 Préambule : Souveraineté & Niyyah

Ce déploiement n'est pas une simple procédure technique, mais l'acte de poser une infrastructure **souveraine** (*Amanah*).
*   **Zéro Compromis :** Le code ne transite jamais par des serveurs américains (GitHub Actions cloud).
*   **Zéro Riba Technique :** Aucune dépendance à des services cloud non conformes ou non audités.
*   **Lieu Unique :** Toutes les opérations (build, test, deploy) ont lieu physiquement à Genève.

---

## 🛠️ Phase 1 : Préparation de l'Infrastructure (Infomaniak)

Cette phase est à réaliser une seule fois pour initialiser l'environnement d'accueil.

### 1.1 Provisionnement du Serveur
Connectez-vous à votre console Infomaniak (Org: **TechForAll**) et provisionnez les ressources suivantes :
*   **Serveur Cloud Managé :** Ubuntu 22.04 LTS (Minimum 4 vCPU, 8GB RAM recommandé).
*   **Stockage Objet :** Bucket privé pour la VOD (PRETTYHOWQ) et les backups.
*   **Base de Données :** Instance PostgreSQL 16 managée (ou conteneurisée selon choix d'architecture).
*   **Réseau :** IP publique dédiée, Firewall activé (ports 22, 80, 443 uniquement).

### 1.2 Sécurisation de l'Accès
```bash
# 🟥 Sur votre poste local, générez une clé SSH dédiée si ce n'est pas fait
ssh-keygen -t ed25519 -C "ced-core-deploy" -f ~/.ssh/ced_core_id

# 🟢 Sur le serveur Infomaniak (via console ou accès root initial)
mkdir -p /home/ceduser/.ssh
chown ceduser:ceduser /home/ceduser/.ssh
chmod 700 /home/ceduser/.ssh
# Copiez la clé publique dans /home/ceduser/.ssh/authorized_keys
chmod 600 /home/ceduser/.ssh/authorized_keys
1.3 Installation des Dépendances Système
Connectez-vous au serveur et installez les outils de base :

bash
Copier
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl nodejs npm postgresql-client redis-tools
# Installation de Docker (si architecture conteneurisée)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ceduser
🏃 Phase 2 : Installation du GitHub Runner Auto-Hébergé
C'est le cœur de la souveraineté CI/CD. Ce runner exécutera tous les workflows à la place de GitHub.

2.1 Récupération du Token
Allez sur le dépôt GitHub SwissYakoubiDev/ced-core.
Naviguez vers Settings > Actions > Runners.
Cliquez sur New self-hosted runner.
Sélectionnez l'OS (Linux) et l'architecture (x64).
Copiez le token d'enregistrement (valable 1 heure).
2.2 Installation sur le Serveur Suisse
Exécutez ces commandes directement sur le serveur Infomaniak en tant que ceduser :

bash
Copier
# 🟦 Création du dossier runner
mkdir ~/actions-runner && cd ~/actions-runner

# 🟦 Téléchargement de la dernière version (vérifier la version sur GitHub)
curl -O -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz

# 🟦 Configuration avec le token (Remplacer VOTRE_TOKEN par la valeur copiée)
./config.sh --url https://github.com/SwissYakoubiDev/ced-core --token VOTRE_TOKEN --labels ced-core-runner,swiss-infra --name ced-runner-geneva-01

# 🟦 Installation en tant que service (démarrage automatique)
sudo ./svc.sh install ceduser
sudo ./svc.sh start
2.3 Vérification
Retournez sur l'interface GitHub. Le runner ced-runner-geneva-01 doit apparaître avec le statut Online et les labels ced-core-runner, swiss-infra.

📦 Phase 3 : Configuration de l'Environnement
3.1 Variables d'Environnement (.env)
Créez le fichier .env à la racine du projet sur le serveur (ou injectez-le via les secrets GitHub).

bash
Copier
# 🟢 Vert Pistache - Configuration Infomaniak
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost:5432/ced_core
REDIS_URL=redis://localhost:6379
STORAGE_ENDPOINT=objet-storage.infomaniak.com
STORAGE_BUCKET=ced-core-vod
STORAGE_ACCESS_KEY=votre_access_key
STORAGE_SECRET_KEY=votre_secret_key

# 🟥 Rouge - Sécurité & Légal
JWT_SECRET=votre_jwt_secret_complexe
ENCRYPTION_KEY=votre_cle_aes256
LPD_COMPLIANCE=true

# 📞 Com - Téléphonie
INFOMANIAK_TELEPHONY_WEBHOOK_URL=https://votre-domaine.ch/api/telephony/webhook
3.2 Clonage du Projet
bash
Copier
cd /home/ceduser
git clone git@github.com:SwissYakoubiDev/ced-core.git
cd ced-core
npm install --production
🔄 Phase 4 : Workflow de Déploiement (CI/CD)
Le fichier .github/workflows/deploy-swiss-audited.yml est configuré pour n'utiliser que le runner suisse.

4.1 Règle de Tagging (Gouvernance)
⚠️ Règle d'Or : Seul un tag suivant le format vX.X.X-AUDITED déclenche le déploiement en production.

bash
Copier
# 🟦 Sur votre poste local, après validation de l'audit
git tag -a v2.4.1-AUDITED -m "Audit éthique et technique validé par Yamina Yakoubi"
git push origin v2.4.1-AUDITED
4.2 Exécution Automatique
Une fois le tag poussé :

GitHub détecte le tag.
Le workflow est déclenché.
Le job est envoyé au runner ced-runner-geneva-01 (et non aux runners cloud GitHub).
Le runner suisse :
Clone le code tagué.
Installe les dépendances (npm ci).
Lance les tests de conformité (Fiqh, LPD).
Compile le frontend (npm run build).
Redémarre le service backend (via PM2 ou Docker).
🔒 Phase 5 : Maintenance & Audit
5.1 Surveillance
Logs : Consultables via journalctl -u actions.runner.ceduser.ced-runner-geneva-01.service ou dans l'interface Infomaniak.
Performance : Utiliser les outils de monitoring Infomaniak pour surveiller CPU/RAM.
5.2 Mise à jour du Runner
Périodiquement, vérifiez les nouvelles versions du runner GitHub et mettez à jour le dossier ~/actions-runner en suivant la même procédure de téléchargement et d'extraction.

5.3 Audit de Conformité
Avant chaque tag AUDITED, vérifiez manuellement :

L'absence de nouvelles dépendances non auditées.
La conformité des nouvelles règles Fiqh ajoutées.
L'intégrité des logs de sécurité (Rouge).
🆘 Dépannage (Troubleshooting)
Runner Offline : Vérifiez le service sudo ./svc.sh status. Redémarrez si nécessaire.
Échec de Build : Consultez les logs du workflow GitHub, onglet "Steps". L'erreur provient du serveur suisse, vérifiez les logs système correspondants.
Problème de connexion DB : Vérifiez que le service PostgreSQL tourne et que le firewall autorise le port 5432 en local.
"La précision dans l'exécution est une forme d'adoration."
