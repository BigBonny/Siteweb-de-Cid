Il s'agit d'un projet full stack de type Twitch utilisant principalement Next.js 14, Livestreaming, React, Prisma, Stripe, Tailwind, MySQL.
Caractéristiques principales:
- 📡 Streaming via les protocoles RTMP/WHIP
- 🌐 Génération d'entrée
- 🔗 Connexion de l'application Next.js à OBS / Votre logiciel de streaming préféré
- 🔐 Authentification
- 📸 Téléchargement de vignettes
- 👀 Nombre de téléspectateurs en direct
- 🚦 Statuts en direct
- 💬 Chat en temps réel à l'aide de sockets
- 🎨 Couleur unique pour chaque spectateur dans le chat
- 👥 Système de suivi
- 🚫 Système de blocage
- 👢 Expulser les participants d'un flux en temps réel
- 🎛️ Tableau de bord Streamer / Créateur
- 🐢 Mode de discussion lente
- 🔒 Mode de chat pour les abonnés uniquement
- 📴 Activer / Désactiver le chat
- 🔽 Mise en page pliable (masquer les barres latérales, chat, etc., mode cinéma, etc.)
- 📚 Onglet Suivi et recommandations de la barre latérale
- 🏠 Page d'accueil recommandant des flux, triés par live en premier
- 🔍 Page de résultats de recherche avec une mise en page différente
- 🔄 Synchronisation des informations utilisateur avec notre base de données à l'aide de Webhooks
- 📡 Synchronisation des informations de statut en direct avec notre base de données à l'aide de Webhooks
- 🤝 Onglet Communauté
- 🎨 Beau design
- ⚡ Application ultra-rapide
- 📄 SSR (rendu côté serveur)
- 🗺️ Itinéraires et tracés groupés
- 🗃️ MySQL
- 🚀 Déploiement

### Conditions préalables
**Nœud version 18.17 ou ultérieure**

### Clonage du référentiel

```shell
git clone https://github.com/AntonioErdeljac/next14-twitch-clone.git
```
### Installer les packages

```shell
npm i
```

### Configurer le fichier .env

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=

DATABASE_URL=

LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```
### Configurer Prisma
### Ajouter une base de données MySQL

```shell
npx prisma generate
npx prisma db push

```

### Démarrez l'application

```shell
npm run dev
```

## Commandes disponibles

Exécuter des commandes avec npm `npm run [command]`

| commande        | descriptif                                             |
| :---------------| :------------------------------------------------------|
| `dév`           | Démarre une instance de développement de l'application |