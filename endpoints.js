module.exports = function (app) {

    app.get('/', function (req, res) {
        return res.send('visit <a href="/doc">/doc</a> for Swagger documentation');
    });

    app.get('/users/:id', (req, res) => {
        const filter = req.query.filter;
        return res.status(404).send(false);
    });

};
