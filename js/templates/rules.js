import getElementFromTemplates from '../get-template';
import changeTemplate from '../change-template';
import game1 from './game-1';
import intro from './intro';
import footer from './footer';
import data from '../data/game1';
import {back} from './header';

export default () => {
  const header = `
    <header class="header">
      ${back}
    </header>`;

  const rules = `
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
  `;

  const element = getElementFromTemplates(rules);

  const input = element.querySelector(`.rules__input`);
  const link = element.querySelector(`.rules__button`);
  const form = element.querySelector(`.rules__form`);

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    changeTemplate(game1(data));
  });

  input.addEventListener(`input`, (evt) => {
    if (evt.target.value !== ``) {
      link.removeAttribute(`disabled`);
    } else {
      link.setAttribute(`disabled`, `disabled`);
    }
  });

  const linkBack = element.querySelector(`.header__back`);
  linkBack.addEventListener(`click`, () => changeTemplate(intro()));

  return element;
};
