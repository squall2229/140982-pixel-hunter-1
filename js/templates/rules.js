import getElementFromTemplates from '../get-template';
import changeTemplate from '../change-template';
import game1 from './game-1';
import intro from './intro';
import footer from './footer';

const header = `
 <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
 </header>`;

const rules = getElementFromTemplates(`
  <div id="rules">
  ${header}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footer}
  </div>
`);

const input = rules.querySelector(`.rules__input`);
const link = rules.querySelector(`.rules__button`);
const form = rules.querySelector(`.rules__form`);

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  changeTemplate(game1);
});

input.addEventListener(`input`, (evt) => {
  if (evt.target.value !== ``) {
    link.removeAttribute(`disabled`);
  } else {
    link.setAttribute(`disabled`, `disabled`);
  }
});

const linkBack = rules.querySelector(`.header__back`);

linkBack.addEventListener(`click`, () => changeTemplate(intro));

export default rules;
