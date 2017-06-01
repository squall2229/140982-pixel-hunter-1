import getElementFromTemplates from '../get-template';
import changeTemplate from '../change-template';
import game1 from './game-1';
import intro from './intro';
import footer from './footer';
import data from '../data/game1';

export default (state) => {
  const header = `
    <header class="header">
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
    </header>`;

  const rules = `
    <div id="rules">
      ${header}
      <div class="rules">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">
          ${state.map((element) => {
            const photo = `фото`;
            const paint = `рисунок`;

            if (element.indexOf(photo) !== -1) {
              const countPhoto = element.indexOf(photo);
              const countPaint = element.indexOf(paint);
              element = `${element.substring(0, countPhoto + photo.length)}
              <img src="img/photo_icon.png" width="16" height="16"> или
              ${element.substring(countPaint, countPaint + paint.length)}
              <img src="img/paint_icon.png" width="16" height="16" alt="">`;
            }
            return element;
          }).join(`<br>`)}
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
  linkBack.addEventListener(`click`, () => changeTemplate(intro));

  return element;
};
