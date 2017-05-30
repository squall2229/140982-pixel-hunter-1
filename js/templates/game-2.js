import getElementFromTemplates from '../get-template';
import header from './header';
import changeTemplate from '../change-template';
import intro from './intro';
import game3 from './game-3';
import footer from './footer';

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
    </div>
  </div>
`;

const main = `
   <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
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
`;

const game2 = getElementFromTemplates(`
  <div id="game-2">
    ${header}
    ${main}
    ${footer}
  </div>
`);

const links = game2.querySelectorAll(`.game__answer`);

Array.from(links).forEach((link) => {
  link.addEventListener(`click`, () => changeTemplate(game3));
});

const linkBack = game2.querySelector(`.header__back`);

linkBack.addEventListener(`click`, () => changeTemplate(intro));

export default game2;
