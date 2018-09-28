// Instalação do servidor express
const express = require('express');
const http = require('http')
const path = require('path');
 
const app = express();
 
// O servidor aceita arquivos estáticos apenas do diretório "dist"
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Inicia a aplicação escutando a porta padrão do Heroku
app.listen(process.env.PORT || 8080);
