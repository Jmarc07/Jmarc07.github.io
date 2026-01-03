import emailjs from '@emailjs/browser';

// Initialiser EmailJS
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (publicKey) {
    emailjs.init(publicKey);
}

// Test de configuration EmailJS
const testEmailJS = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('=== Test Configuration EmailJS ===');
    console.log('Service ID:', serviceId || '❌ MANQUANT');
    console.log('Template ID:', templateId || '❌ MANQUANT');
    console.log('Public Key:', publicKey || '❌ MANQUANT');

    if (!serviceId || !templateId || !publicKey) {
        console.error('❌ Configuration incomplète. Redémarrez le serveur après avoir modifié .env.local');
        return;
    }

    try {
        console.log('📧 Envoi du message de test...');
        const response = await emailjs.send(
            serviceId,
            templateId,
            {
                from_name: 'Test Portfolio',
                from_email: 'test@example.com',
                subject: 'Test EmailJS Configuration',
                message: 'Ceci est un message de test pour vérifier la configuration EmailJS.',
                to_name: 'Jean-Marc',
            }
        );

        console.log('✅ Test réussi!', response);
        console.log('📬 Vérifiez votre boîte email!');
    } catch (error: any) {
        console.error('❌ Erreur lors du test:', error);
        console.error('Message d\'erreur:', error.text || error.message);
        console.error('Status:', error.status);

        // Messages d'aide selon l'erreur
        if (error.status === 400) {
            console.error('💡 Vérifiez que votre template EmailJS contient les variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_name}}');
        } else if (error.status === 401) {
            console.error('💡 Vérifiez votre Public Key dans .env.local');
        } else if (error.status === 404) {
            console.error('💡 Vérifiez votre Service ID et Template ID');
        }
    }
};

// Exporter pour utilisation dans la console
(window as any).testEmailJS = testEmailJS;

console.log('💡 Pour tester EmailJS, tapez: testEmailJS() dans la console');

export default testEmailJS;