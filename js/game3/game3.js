import Game3View from './game3-view';
import changeTemplate from '../change-template';
import data from '../data/game';
import dataGame3 from '../data/game-3';
import intro from '../intro/intro';
import stats from '../stats/stats';

export default (state) => {
  const game3 = new Game3View(data, dataGame3);

  game3.changeLevel = () => changeTemplate(stats());

  game3.back = () => changeTemplate(intro());

  return game3.element;
};

