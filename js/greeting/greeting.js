import GreetingView from './greeting-view';
import changeTemplate from '../change-template';
import rules from '../rules/rules';

export default () => {
  const greeting = new GreetingView();

  greeting.changeLevel = () => changeTemplate(rules());

  return greeting.element;
};

