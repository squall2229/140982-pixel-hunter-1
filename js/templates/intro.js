import getElementFromTemplates from '../get-template';
import changeTemplate from '../change-template';
import greeting from './greeting';

export default () => {
  const intro = `
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>
        Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.
      </p>
    </div>
  `;

  const element = getElementFromTemplates(intro);

  const link = element.querySelector(`.intro__asterisk`);
  link.addEventListener(`click`, () => changeTemplate(greeting()));

  return element;
};
