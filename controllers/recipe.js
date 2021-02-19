const { request, response } = require('express');
const database = require('../data');

exports.redirect = (request, response) => {
    return response.redirect('/home');
}

exports.index = (request, response) => {
    return response.render('indexPage/home', { items: database });
};

exports.listRecipes = (request, response) => {
    return response.render('indexPage/recipes', { items: database });
}

exports.showRecipe = (request, response) => {
    const recipeIndex = request.params.index;
    const recipe = database;

    if (!recipe[recipeIndex]) {
        return response.send('Pagina não encontrada')
    }
    return response.render('indexPage/recipe', { item: recipe[recipeIndex] })
};

exports.about = (request, response) => {
    return response.render('indexPage/about');
};

