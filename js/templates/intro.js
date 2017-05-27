import getElementFromTemplates from '../get-template';
import changeTemplate from '../change-template';
import greeting from './greeting';

const intro = getElementFromTemplates(`
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
`);

const link = intro.querySelector(`.intro__asterisk`);

link.addEventListener(`click`, () => changeTemplate(greeting));

export default intro;
