import getElementFromTemplates from '../get-template';
import changeTemplate from '../change-template';
import header from './header';
import game2 from './game-2';
import intro from './intro';
import footer from './footer';
import data from '../data/game2';

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
        ${state.answers.map((element, i) => {
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
      ${footer}
    </div>`;

  const element = getElementFromTemplates(game1);

  const checkAnswer = {answer1: false, answer2: false};
  const form = element.querySelector(`.game__content`);

  form.addEventListener(`change`, (evt) => {
    if (evt.target.name === `question1`) {
      checkAnswer.answer1 = true;
    } else if (evt.target.name === `question2`) {
      checkAnswer.answer2 = true;
    }

    if (checkAnswer.answer1 && checkAnswer.answer2) {
      changeTemplate(game2(data));
    }
  });

  const linkBack = element.querySelector(`.header__back`);

  linkBack.addEventListener(`click`, () => changeTemplate(intro()));

  return element;
};

