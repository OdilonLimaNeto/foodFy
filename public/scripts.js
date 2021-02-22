// HEADER ACTIVE
const paginaAtual = location.pathname;
const items = document.querySelectorAll('header .container-initial a');

for (let item of items) {
    if (paginaAtual.includes(item.getAttribute('href'))) {
        item.classList.add('active');
    }
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

