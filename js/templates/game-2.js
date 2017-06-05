import getElementFromTemplates from '../get-template';
import header from './header';
import changeTemplate from '../change-template';
import intro from './intro';
import game3 from './game-3';
// import data from '../data/game3';
import data from '../data/game';

export default (state) => {
  const stats = `
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
        <p class="game__task">${state.levels[1].task}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src=${state.levels[1].image.src} alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      ${stats}
      </div>
    </div>`;

  const game2 = `
    <div id="game-2">
      ${header}
      ${main}
    </div>`;

  const element = getElementFromTemplates(game2);

  const links = element.querySelectorAll(`.game__answer`);

  Array.from(links).forEach((link) => {
    link.addEventListener(`click`, () => changeTemplate(game3(data)));
  });

  const linkBack = element.querySelector(`.header__back`);

  linkBack.addEventListener(`click`, () => changeTemplate(intro()));

  return element;
};
