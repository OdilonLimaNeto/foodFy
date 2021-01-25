const express = require('express');
const nunjucks = require('nunjucks');

const database = require('./data');

const server = express();

//Mapeando pasta public e past assets
server.use(express.static('public'));
server.use(express.static('assets'));

//definindo tipo de arquivo a ser lido pelo nunjucks (html)
server.set('view engine', 'njk'); 

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', (request, response) => {
    return response.render('home', { items: database });
})

server.get('/recipes', (request, response) => {
    return response.render('recipes', { items: database });
    // passando dados do back para o front
});

server.get("/recipe/:index", (request, response) => {
    const recipeIndex = request.params.index;
    const recipe = database;

    if (!recipe[recipeIndex]) {
        return response.send('Pagina não encontrada')
    }
    return response.render('recipe', { item: recipe[recipeIndex] })
})

server.get('/about', (request, response) => {
    return response.render('about');
});

server.listen(3333, () => {
    console.log('Server is running: PORT 3333');
});