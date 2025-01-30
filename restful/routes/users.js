module.exports = (app) => {

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

    app.get('/users/admin', (re, res) => {


        res.statusCode = 200;
        res.setHeader('Content-Tipe', 'application/json');
        res.json({
            users: []

        });

    });

};