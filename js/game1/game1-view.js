import AbstractView from '../view';
import header from '../templates/header';
import resize from '../resize';
import timer from '../timer';

class Game1 extends AbstractView {
  constructor(game, state) {
    super();
    this.game = game;
    this.state = state;
  }

  get template() {
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
    </div>`;

    const main = `
      <div class="game">
        <p class="game__task">${this.state.task}</p>
        <form class="game__content">
          ${this.state.images.map((element, i) => {
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

    return `<div id="game-1">
              ${header}
              ${main}
            </div`;
  }

  get answer() {
    return this._answer;
  }

  changeLevel() {}

  back() {}

  bind() {
    const checkAnswer = {answer1: false, answer2: false};
    const form = this.element.querySelector(`.game__content`);
    const gameTimer = this.element.querySelector(`.game__timer`);
    const answers = {};

    form.addEventListener(`change`, (evt) => {
      if (evt.target.name === `question1`) {

        checkAnswer.answer1 = true;
        answers.answer1 = evt.target.value;

      } else if (evt.target.name === `question2`) {

        checkAnswer.answer2 = true;
        answers.answer2 = evt.target.value;

      }

      if (checkAnswer.answer1 && checkAnswer.answer2) {
        answers.timer = gameTimer.textContent;
        // changeState(mainData, dataGame1, answers);
        this._answer = answers;
        this.changeLevel();
      }
    });

    const linkBack = this.element.querySelector(`.header__back`);
    linkBack.addEventListener(`click`, this.back.bind(this));

    resize(this.element, 468, 458, `http://i.imgur.com/1KegWPz.jpg`, `https://k42.kn3.net/CF42609C8.jpg`);
    timer(this.game.timer, gameTimer);
  }
}

export default Game1;
