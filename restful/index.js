const express = require('express');

let app = express();

app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Tipe', 'text/html');
    res.end('<h1>Olá</h1>');
    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

});

app.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Tipe', 'application/json');
    res.json({
        users: [{
            name: 'Hcode',
            email: 'contato@hcode.com.br',
            id: 1
        }]

    });

});

app.listen(3000, '127.0.0.1', () => {

    console.log('servidor rodando!');

});