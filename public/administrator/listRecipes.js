const recipes = document.querySelectorAll('.card-container');
for(let i = 0; i < recipes.length; i++) {
  const recipe = recipes[i];
  recipe.addEventListener('click', () => {
    window.location.href = `/admin/recipes/${i}`
  })
}