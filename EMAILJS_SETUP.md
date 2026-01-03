# Configuration EmailJS

## Étapes pour configurer EmailJS :

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (300 emails/mois)

### 2. Configurer un service email
1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre email
5. Notez le **Service ID** généré

### 3. Créer un template
1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez votre template avec ces variables :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{subject}}` - Sujet du message
   - `{{message}}` - Contenu du message
   - `{{to_email}}` - Votre email (jean-marc.naounou@epitech.eu)

**Exemple de template :**
```
Subject: {{subject}}

Nouveau message de {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. Notez le **Template ID**

### 4. Obtenir votre clé publique
1. Allez dans **Account** → **General**
2. Copiez votre **Public Key**

### 5. Configurer les variables d'environnement
1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez les valeurs par vos identifiants :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

### 6. Redémarrer le serveur de développement
```bash
npm run dev
```

## Test
Allez sur votre page de contact et testez l'envoi d'un message !

## Sécurité
- Le fichier `.env.local` est ignoré par Git (vérifiez votre `.gitignore`)
- Pour le déploiement sur GitHub Pages, vous devrez configurer les variables d'environnement dans les secrets GitHub ou directement dans le code (moins sécurisé mais acceptable pour les clés publiques EmailJS)
