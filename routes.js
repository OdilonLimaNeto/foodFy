const express = require('express');
const routes = express.Router();

const recipe = require('./controllers/recipe');
const administrator = require('./controllers/administrator');

//ROTAS RECEITAS
routes.get('/', recipe.redirect);
routes.get('/home', recipe.index);
routes.get('/recipes', recipe.listRecipes);
routes.get("/recipe/:index", recipe.showRecipe);
routes.get('/about', recipe.about);





// // ROTAS ADMINISTRADOR
routes.get("/admin/recipes", administrator.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", administrator.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:index", administrator.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", administrator.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", administrator.post); // Cadastrar nova receita
// routes.put("/admin/recipes", administrator.put); // Editar uma receita
// routes.delete("/admin/recipes", administrator.delete); // Deletar uma receita


module.exports = routes;