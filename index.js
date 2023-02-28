const app = require('express')();
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
http.createServer(app).listen(PORT);
console.log(`Listening at http://${HOST}:%s (HTTP)`, PORT);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

require('./endpoints')(app);
