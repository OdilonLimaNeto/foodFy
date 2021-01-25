const recipes = document.querySelectorAll('.card-container');

for(let i = 0; i < recipes.length; i++) {
  const recipe = recipes[i];
  recipe.addEventListener('click', () => {
    window.location.href = `/recipe/${i}`
  })
}


const buttons = document.querySelectorAll('h4');
const detailsIngredients = document.querySelectorAll('.details-ingredients');

for(let button of buttons) {
  button.addEventListener('click', function(){
    if(button.innerHTML === 'ESCONDER') {
      button.innerHTML = 'MOSTRAR'
    }else{
      button.innerHTML = 'ESCONDER'
    }
  });
}

for(const button in buttons) {
  buttons[button].addEventListener('click', function(){
    if(detailsIngredients[button].classList.contains('ocult')) {
      detailsIngredients[button].classList.remove('ocult');
    }
    else{
      detailsIngredients[button].classList.add('ocult');
    }
  })
}

