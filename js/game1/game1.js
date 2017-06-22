import Game1View from './game1-view';
import changeTemplate from '../change-template';
import data from '../data/game';
import dataGame1 from '../data/game-1';
import intro from '../intro/intro';
import game2 from '../game2/game2';

export default (state) => {
  const game1 = new Game1View(data, dataGame1);

  game1.changeLevel = () => changeTemplate(game2());

  game1.back = () => changeTemplate(intro());

  return game1.element;
};

