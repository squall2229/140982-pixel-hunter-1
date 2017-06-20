import getElementFromTemplates from '../get-template';
import changeTemplate from '../change-template';
import header from './header';
import mainData from '../data/game';
import dataGame1, {checkAnswer as changeState} from '../data/game-1';
import game2 from './game-2';
import intro from './intro';
import data from '../data/game-2';
import resize from '../resize';
import timer from '../timer';

export default (state) => {
  const stats = `
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
`;

  const main = `
    <div class="game">
      <p class="game__task">${state.task}</p>
      <form class="game__content">
        ${state.images.map((element, i) => {
          let count = i + 1;
          return (
            `<div class="game__option">
              <img src=${element.src} alt="Option ${count}" width="468" height="458">
              <label class="game__answer game__answer--photo">
                <input name="question${count}" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input name="question${count}" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>`
          );
        }).join(``)}
      </form>
      ${stats}
    </div>`;

  const game1 = `
    <div id="game-1">
      ${header}
      ${main}
    </div>`;

  const element = getElementFromTemplates(game1);
  const checkAnswer = {answer1: false, answer2: false};
  const form = element.querySelector(`.game__content`);
  const gameTimer = element.querySelector(`.game__timer`);
  const answers = {};

  timer(mainData.timer, gameTimer);

  form.addEventListener(`change`, (evt) => {
    if (evt.target.name === `question1`) {
      checkAnswer.answer1 = true;
      answers.answer1 = evt.target.value;
    } else if (evt.target.name === `question2`) {
      checkAnswer.answer2 = true;
      answers.answer2 = evt.target.value;
    }

    if (checkAnswer.answer1 && checkAnswer.answer2) {
      changeState(mainData, dataGame1, answers, gameTimer.textContent);
      changeTemplate(game2(data));
    }
  });

  const linkBack = element.querySelector(`.header__back`);
  linkBack.addEventListener(`click`, () => changeTemplate(intro()));

  resize(element, 468, 458, `http://i.imgur.com/1KegWPz.jpg`, `https://k42.kn3.net/CF42609C8.jpg`);

  return element;
};

