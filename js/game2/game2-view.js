import AbstractView from '../view';
import header from '../templates/header';
import resize from '../resize';
import timer from '../timer';

class Game2 extends AbstractView {
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
        <p class="game__task">${this.state.task}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src=${this.state.image.src} alt="Option 1" width="705" height="455">
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

    return `<div id="game-2">
              ${header}
              ${main}
            </div>`;
  }

  get answer() {
    return this._answer;
  }

  changeLevel() {}

  back() {}

  bind() {
    // const links = this.element.querySelectorAll(`.game__answer`);
    const gameTimer = this.element.querySelector(`.game__timer`);
    const form = this.element.querySelector(`.game__content`);

    timer(this.game.timer, gameTimer);

    form.addEventListener(`change`, (evt) => {
      evt.preventDefault();
      this._answer = {answer: evt.target.value};
      this.changeLevel();
    });

    // Array.from(links).forEach((link) => {
    //   // const answerData = {answer: `paint`, timer: 20};
    //   // changeState(mainData, dataGame2, answerData);
    //   link.addEventListener(`click`, this.changeLevel);
    // });

    const linkBack = this.element.querySelector(`.header__back`);

    linkBack.addEventListener(`click`, this.back);
    resize(this.element, 705, 455, `https://i.imgur.com/DiHM5Zb.jpg`);
  }
}

export default Game2;
