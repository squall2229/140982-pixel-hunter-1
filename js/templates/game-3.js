import getElementFromTemplates from '../get-template';
import header from './header';
import changeTemplate from '../change-template';
import intro from './intro';
import stats from './stats';
import footer from './footer';
import data from '../data/stats';

export default (state) => {
  const statsTemplate = `
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`;

  const main = `
    <div class="game">
      <p class="game__task">${state.task}</p>
      <form class="game__content  game__content--triple">
        ${state.answers.map((element, i) => {
          let count = i + 1;
          return (
            `<div class="game__option">
              <img src=${element.src} alt="Option ${count}" width="304" height="455">
            </div>`
          );
        }).join(``)}
      </form>
      ${statsTemplate}
    </div>`;

  const game3 = `
    <div id="game-3">
      ${header}
      ${main}
      ${footer}
    </div>
  `;

  const element = getElementFromTemplates(game3);

  const links = element.querySelectorAll(`.game__option`);

  Array.from(links).forEach((link) => {
    link.addEventListener(`click`, () => changeTemplate(stats(data)));
  });

  const linkBack = element.querySelector(`.header__back`);

  linkBack.addEventListener(`click`, () => changeTemplate(intro));

  return element;
};
