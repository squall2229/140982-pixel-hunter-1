import getElementFromTemplates from '../get-template';
import changeTemplate from '../change-template';
import rules from './rules';
import footer from './footer';
import data from '../data/rules';

export default (state) => {
  const greeting = `
    <div id="greeting">
      <div class="greeting central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
        <p>Правила игры просты.<br>
          ${state.map((element) => element).join(`<br>`)}
        </p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>
    ${footer}
  </div>
`;

  const element = getElementFromTemplates(greeting);

  const link = element.querySelector(`.greeting__continue`);
  link.addEventListener(`click`, () => changeTemplate(rules(data)));

  return element;
};

