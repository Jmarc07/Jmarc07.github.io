
  # Portfolio Personnel - Jean-Marc Naounou

[![Déploiement](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)](https://jmarc07.github.io/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)

Site portfolio moderne et responsive présentant mes projets, compétences et expériences en développement logiciel.

🌐 **[Voir le site en ligne](https://jmarc07.github.io/)**

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Configuration](#configuration)
- [Déploiement](#déploiement)
- [Crédits](#crédits)

## 🎯 Aperçu

Ce portfolio est une application web monopage (SPA) construite avec React et TypeScript, offrant une expérience utilisateur fluide et moderne. Il présente :

- Une page d'accueil accueillante
- Une galerie de projets avec filtres par domaine et contexte
- Des pages de détail pour chaque projet
- Un formulaire de contact fonctionnel avec EmailJS
- Un design responsive adapté à tous les écrans

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- Présentation personnelle
- Mise en avant des projets phares
- Navigation intuitive

### 💼 Page Projets
- Affichage en grille des projets
- Filtrage par domaine (AI, Web, Backend, Frontend, Mobile, etc.)
- Filtrage par contexte (Personnel, Académique, Freelance)
- Cartes de projets avec images, tags et descriptions

### 📝 Pages de détail projet
- Description complète du projet
- Présentation du problème et de la solution
- Technologies utilisées (stack technique)
- Liens vers GitHub et démos en ligne
- Mon rôle dans le projet

### 📧 Page Contact
- Formulaire de contact intégré avec EmailJS
- Validation des champs
- Notifications de succès/erreur
- Liens vers réseaux sociaux

### 🎨 Interface utilisateur
- Design moderne avec Tailwind CSS
- Composants UI réutilisables (shadcn/ui)
- Animations fluides
- Mode sombre
- Responsive design

## 🛠 Technologies utilisées

### Frontend
- **React 18.x** - Bibliothèque UI
- **TypeScript 5.x** - Typage statique
- **Vite 6.x** - Build tool et dev server
- **React Router** - Navigation SPA
- **Tailwind CSS** - Framework CSS utility-first

### UI Components
- **shadcn/ui** - Composants UI modernes et accessibles
- **Radix UI** - Primitives UI accessibles
- **Lucide React** - Icônes
- **Material-UI** - Composants supplémentaires

### Autres
- **EmailJS** - Service d'envoi d'emails
- **Sonner** - Notifications toast
- **date-fns** - Manipulation de dates
- **Embla Carousel** - Carrousels d'images

## 🚀 Installation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes

1. **Cloner le dépôt**
```bash
git clone https://github.com/Jmarc07/Jmarc07.github.io.git
cd Jmarc07.github.io
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer EmailJS** (optionnel)
- Créer un compte sur [EmailJS](https://www.emailjs.com/)
- Suivre les instructions dans `EMAILJS_SETUP.md`
- Configurer les variables d'environnement

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 📜 Scripts disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Créer une version de production
npm run build

# Déployer sur GitHub Pages
npm run deploy

# Prévisualiser la version de production localement
npm run preview
```

## 📁 Structure du projet

```
Jmarc07.github.io/
├── src/
│   ├── app/
│   │   ├── components/        # Composants React
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── figma/         # Composants Figma
│   │   │   └── ui/            # Composants shadcn/ui
│   │   ├── data/
│   │   │   └── projects.ts    # Données des projets
│   │   ├── pages/             # Pages de l'application
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProjectsPage.tsx
│   │   │   ├── ProjectDetailPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   └── App.tsx            # Composant principal
│   ├── styles/                # Fichiers de styles
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   ├── main.tsx               # Point d'entrée
│   └── vite-env.d.ts
├── assets/
│   └── images/                # Images du site
├── contact/                   # Page contact statique
├── portfolio/                 # Page portfolio statique
├── resume/                    # Page CV statique
├── public/                    # Fichiers statiques
├── index.html                 # Page HTML principale
├── 404.html                   # Page 404 personnalisée
├── package.json
├── vite.config.ts             # Configuration Vite
├── postcss.config.mjs         # Configuration PostCSS
├── tailwind.config.js         # Configuration Tailwind
└── README.md
```

## ⚙️ Configuration

### Tailwind CSS
Le fichier `tailwind.config.js` contient la configuration du thème, des couleurs et des plugins.

### Vite
Le fichier `vite.config.ts` configure le build et le dev server.

### EmailJS
Suivre les instructions dans `EMAILJS_SETUP.md` pour configurer le service d'envoi d'emails.

## 🚢 Déploiement

Le site est automatiquement déployé sur GitHub Pages via le script :

```bash
npm run deploy
```

Ce script :
1. Crée une version de production optimisée (`npm run build`)
2. Copie la page 404 personnalisée dans le dossier `dist`
3. Déploie le contenu du dossier `dist` sur la branche `gh-pages`

### Configuration GitHub Pages
- Aller dans les paramètres du dépôt
- Section "Pages"
- Source : branche `gh-pages`
- Le site sera disponible sur `https://jmarc07.github.io/`

### ⚠️ Bonnes pratiques de sauvegarde

**Important** : Avant de déployer, il est fortement recommandé de toujours garder un backup sur une branche séparée :

```bash
# Créer une branche de sauvegarde avant déploiement
git checkout -b backup/pre-deploy-YYYY-MM-DD
git push origin backup/pre-deploy-YYYY-MM-DD

# Revenir sur gh-pages pour déployer
git checkout gh-pages
npm run deploy
```

Ou pour sauvegarder régulièrement votre travail :

```bash
# Créer une branche de développement
git checkout -b dev
# ... faire vos modifications ...
git add .
git commit -m "Description des changements"
git push origin dev

# Une fois testé, merger dans gh-pages
git checkout gh-pages
git merge dev
npm run deploy
```

### 🔄 Gestion des conflits après déploiement

**Important** : Le script `npm run deploy` utilise `gh-pages` qui réécrit complètement l'historique de la branche de déploiement. Pour éviter les conflits après chaque déploiement :

```bash
# Après avoir fait des modifications locales
git add .
git commit -m "Description des modifications"

# TOUJOURS faire un push force AVANT le déploiement
git push origin gh-pages --force

# Puis déployer
npm run deploy
```

⚠️ **Pourquoi le push force est nécessaire** :
- Le déploiement via `gh-pages` réécrit l'historique Git de la branche
- Sans `--force`, vous aurez des conflits à chaque nouveau déploiement
- Le backup sur une branche séparée protège votre code source

**Workflow recommandé complet** :
```bash
# 1. Sauvegarder sur une branche de backup
git checkout -b backup/$(date +%Y-%m-%d)
git push origin backup/$(date +%Y-%m-%d)

# 2. Retourner sur gh-pages
git checkout gh-pages

# 3. Faire vos modifications
# ... éditer les fichiers ...

# 4. Commiter les changements
git add .
git commit -m "Description des modifications"

# 5. Push force pour synchroniser
git push origin gh-pages --force

# 6. Déployer
npm run deploy
```

Cette pratique vous permet de :
- 🔄 Revenir facilement à une version précédente en cas de problème
- 🛡️ Protéger votre code source contre les pertes accidentelles
- 🔍 Maintenir un historique clair des versions
- 🚀 Tester les changements avant le déploiement en production
- ⚡ Éviter les conflits Git à chaque déploiement

## 🎨 Personnalisation

### Ajouter un projet
Modifier le fichier `src/app/data/projects.ts` et ajouter un nouvel objet projet :

```typescript
{
  id: 'unique-id',
  slug: 'url-friendly-name',
  name: 'Nom du projet',
  domains: ['Web', 'Frontend'],
  context: 'Personal',
  stack: ['React', 'TypeScript'],
  image: 'https://url-image.com/image.jpg',
  description: 'Description courte',
  problem: 'Description du problème',
  solution: 'Description de la solution',
  myRole: 'Mon rôle dans le projet',
  githubUrl: 'https://github.com/...',
  demoUrl: 'https://demo-url.com',
  featured: true
}
```

### Modifier les styles
- Thème global : `src/styles/theme.css`
- Variables Tailwind : `tailwind.config.js`
- Styles personnalisés : `src/styles/index.css`

## 📄 Licence

Ce projet est un portfolio personnel. Le code est disponible pour consultation et inspiration, mais merci de ne pas le copier intégralement pour votre propre portfolio.

## 👤 Contact

**Jean-Marc Naounou**

- Portfolio : [https://jmarc07.github.io/](https://jmarc07.github.io/)
- GitHub : [@Jmarc07](https://github.com/Jmarc07)

## 🙏 Crédits

- Design original inspiré du [Portfolio Structure Design](https://www.figma.com/design/0SvpY7QUAmR37FkEkPsubd/Portfolio-Structure-Design)
- Composants UI par [shadcn/ui](https://ui.shadcn.com/)
- Icônes par [Lucide](https://lucide.dev/)
- Images de projets par [Unsplash](https://unsplash.com/)

---

⭐️ Si ce portfolio vous a inspiré, n'hésitez pas à me contacter ou à laisser une étoile sur GitHub !
  