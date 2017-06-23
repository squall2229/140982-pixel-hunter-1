import RulesView from './rules-view';
import changeTemplate from '../change-template';
import intro from '../intro/intro';
import game1 from '../game1/game1';

export default () => {
  const rules = new RulesView();

  rules.changeLevel = () => changeTemplate(game1());

  rules.back = () => changeTemplate(intro());

  return rules.element;
};

