import menu from '../menu.json';
import menuCardTempl from '../templates/menu-card.hbs'

const menuCardList = document.querySelector('.js-menu');
menuCardList.innerHTML = menuCardTempl(menu);