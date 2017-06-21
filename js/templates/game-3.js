import getElementFromTemplates from '../get-template';
import header from './header';
import changeTemplate from '../change-template';
import intro from './intro';
import stats from './stats';
import mainData from '../data/game';
import dataGame3, {checkAnswer as changeState} from '../data/game-3';
import resize from '../resize';
import timer from '../timer';

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
        ${state.images.map((element, i) => {
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
    </div>
  `;

  const element = getElementFromTemplates(game3);
  const links = element.querySelectorAll(`.game__option`);
  const gameTimer = element.querySelector(`.game__timer`);

  timer(mainData.timer, gameTimer);

  Array.from(links).forEach((link) => {
    const answerData = {answer: `photo`, timer: 20};
    changeState(mainData, dataGame3, answerData);
    link.addEventListener(`click`, () => changeTemplate(stats(mainData)));
  });

  const linkBack = element.querySelector(`.header__back`);

  linkBack.addEventListener(`click`, () => changeTemplate(intro()));

  resize(element, 304, 455, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`);

  return element;
};
