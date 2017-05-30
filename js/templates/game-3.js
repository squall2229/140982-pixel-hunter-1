import getElementFromTemplates from '../get-template';
import header from './header';
import changeTemplate from '../change-template';
import intro from './intro';
import stats from './stats';
import footer from './footer';

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
  </div>
`;

const main = `
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    ${statsTemplate}
  </div>
`;

const game3 = getElementFromTemplates(`
  <div id="game-3">
    ${header}
    ${main}
    ${footer}
  </div>
`);

const links = game3.querySelectorAll(`.game__option`);

Array.from(links).forEach((link) => {
  link.addEventListener(`click`, () => changeTemplate(stats));
});

const linkBack = game3.querySelector(`.header__back`);

linkBack.addEventListener(`click`, () => changeTemplate(intro));

export default game3;
