import changeTemplate from './change-template';
import getElementFromTemplate from './get-template';
import intro from './intro/intro';

class GameScreen {
  constructor(state, view, gameData = {}) {
    this.state = state;
    this.gameData = gameData;
    this.view = view;
  }

  get template() {
    throw new Error(`You have to define template for view`);
  }

  get element() {
    if (!this._element) {
      this.getMarkup();
    }

    return this._element;
  }

  init() {
    changeTemplate(intro());
  }

  render() {
    return getElementFromTemplate(this.view);
  }

  bind() {}

  getMarkup() {
    this._element = this.render();
    this.bind();
  }
}

export default GameScreen;

