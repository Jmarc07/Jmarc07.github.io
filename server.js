const express = require('express');
const path = require('path');
const app = express();

const distPath = path.join(__dirname, 'dist/browser');
app.use(express.static(distPath));

// Routes
app.get('/*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

// Utiliser le port fourni par Render ou 3000 par défaut
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
}); 