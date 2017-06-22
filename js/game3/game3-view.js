import AbstractView from '../view';
import header from '../templates/header';
import resize from '../resize';
import timer from '../timer';

class Game3 extends AbstractView {
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
      <form class="game__content  game__content--triple">
        ${this.state.images.map((element, i) => {
          let count = i + 1;
          return (
            `<div class="game__option">
              <img src=${element.src} alt="Option ${count}" width="304" height="455">
            </div>`
          );
        }).join(``)}
      </form>
      ${stats}
    </div>`;

    return `<div id="game-3">
              ${header}
              ${main}
            </div>`;
  }

  changeLevel() {}

  back() {}

  bind() {
    const links = this.element.querySelectorAll(`.game__option`);
    const gameTimer = this.element.querySelector(`.game__timer`);

    timer(this.game.timer, gameTimer);

    Array.from(links).forEach((link) => {
      // const answerData = {answer: `photo`, timer: 20};
      // changeState(mainData, dataGame3, answerData);
      link.addEventListener(`click`, this.changeLevel);
    });

    const linkBack = this.element.querySelector(`.header__back`);

    linkBack.addEventListener(`click`, this.back);

    resize(this.element, 304, 455, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`);
  }
}

export default Game3;
