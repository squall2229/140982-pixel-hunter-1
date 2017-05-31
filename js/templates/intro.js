import getElementFromTemplates from '../get-template';
import changeTemplate from '../change-template';
import greeting from './greeting';
import data from '../data/greeting';

export default (state) => {
  const intro = `
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> ${state.intro}</p>
    </div>
  `;

  const element = getElementFromTemplates(intro);

  const link = element.querySelector(`.intro__asterisk`);
  link.addEventListener(`click`, () => changeTemplate(greeting(data)));

  return element;
};
