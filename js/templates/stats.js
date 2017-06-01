import getElementFromTemplates from '../get-template';
import {back} from './header';
import changeTemplate from '../change-template';
import intro from './intro';
import footer from './footer';

export default (state) => {
  const stats = `
    <div id="stats">
      <header class="header">
      ${back}
      </header>
      <div class="result">
        <h1>Победа!</h1>
        ${state.games.map((element) => {
          let speed = element.achievements.speed;
          let life = element.achievements.life;
          let slow = element.achievements.slow;

          return (
            `<table class="result__table">
              <tr>
                <td class="result__number">1.</td>
                <td colspan="2">
                  <ul class="stats">
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--correct"></li>
                    <li class="stats__result stats__result--wrong"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--slow"></li>
                    <li class="stats__result stats__result--unknown"></li>
                    <li class="stats__result stats__result--fast"></li>
                    <li class="stats__result stats__result--unknown"></li>
                  </ul>
                </td>
                <td class="result__points">×&nbsp;100</td>
                <td class="result__total">900</td>
              </tr>
                ${speed ?
                  `<tr>
                    <td></td>
                    <td class="result__extra">Бонус за скорость:</td>
                    <td class="result__extra">${speed}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                    <td class="result__points">×&nbsp;50</td>
                    <td class="result__total">${speed * 50}</td>
                   </tr>`
                  :
                  ``}
                ${life ?
                  `<tr>
                  <td></td>
                   <td class="result__extra">Бонус за жизни:</td>
                   <td class="result__extra">${life}&nbsp;<span class="stats__result stats__result--heart"></span></td>
                   <td class="result__points">×&nbsp;50</td>
                   <td class="result__total">${life * 50}</td>
                   </tr>`
                  :
                  ``}
                ${slow ?
                  `<tr>
                  <td></td>
                   <td class="result__extra">Штраф за медлительность:</td>
                   <td class="result__extra">${slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                   <td class="result__points">×&nbsp;50</td>
                   <td class="result__total">-${slow * 50}</td>
                   </tr>`
                  :
                  ``}
              <tr>
                <td colspan="5" class="result__total  result__total--final">950</td>
              </tr>
            </table>`
          );
        }).join(``)}
      </div>
      ${footer}
    </div>
  `;

  const element = getElementFromTemplates(stats);

  const linkBack = element.querySelector(`.header__back`);

  linkBack.addEventListener(`click`, () => changeTemplate(intro));

  return element;
};
