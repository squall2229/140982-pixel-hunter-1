import AbstractView from '../view';

class IntroView extends AbstractView {
  get template() {
    return `<div id="intro" class="intro">
              <h1 class="intro__asterisk">*</h1>
              <p class="intro__motto"><sup>*</sup>
                Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.
              </p>
            </div>`;
  }

  changeLevel() {}

  bind() {
    const link = this.element.querySelector(`.intro__asterisk`);
    link.addEventListener(`click`, this.changeLevel);
  }
}

export default IntroView;
