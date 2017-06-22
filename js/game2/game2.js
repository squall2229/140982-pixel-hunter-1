import Game2View from './game2-view';
import changeTemplate from '../change-template';
import data from '../data/game';
import dataGame2 from '../data/game-2';
import intro from '../intro/intro';
import game3 from '../game3/game3';

export default (state) => {
  const game2 = new Game2View(data, dataGame2);

  game2.changeLevel = () => changeTemplate(game3());

  game2.back = () => changeTemplate(intro());

  return game2.element;
};

