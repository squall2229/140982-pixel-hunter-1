import StatsView from './stats-view';
import changeTemplate from '../change-template';
import data from '../data/game';
import intro from '../intro/intro';

export default (state) => {
  const stats = new StatsView(data);

  stats.back = () => changeTemplate(intro());

  return stats.element;
};

