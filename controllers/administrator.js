const database = require('../data');


exports.index = (request, response) => {
        return response.render('administrator/index', { items: database });
    };

exports.show = (request, response) => {
    const recipeIndex = request.params.index;
    const recipe = database;

    if (!recipe[recipeIndex]) {
        return response.send('Pagina não encontrada')
    }
    return response.render('administrator/show', { item: recipe[recipeIndex] })
};

exports.edit = (request, response) => {
    return response.render('administrator/edit', { item: database });
};

exports.create = (request, response) => {
    return response.render('administrator/create')
};

exports.post = (request, response) => {
    return response.send('recebido');
};
// PAREI AQUI
