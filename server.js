const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes')

const server = express();

//Mapeando pasta public e past assets
server.use(express.static('public'));
server.use(express.static('assets'));
server.use(routes);

//definindo tipo de arquivo a ser lido pelo nunjucks (html)
server.set('view engine', 'njk'); 

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});


server.listen(5000, () => {
    console.log('Server is running: PORT 5000');
});