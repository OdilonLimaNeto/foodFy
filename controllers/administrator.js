const database = require('../data');


exports.index = (request, response) => {
        return response.render('administrator/index', { items: database });
    };