import changeTemplate from './change-template';
import IntroView from './intro/intro-view';

class GameScreen {
  // constructor(view) {
  //   this.view = view;
  // }

  init() {
    const intro = new IntroView();
    console.log(intro);
  }
}

export default GameScreen;
