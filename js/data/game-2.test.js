import assert from 'assert';
import game from './game';
import game2, {checkAnswer} from './game-2';

describe(`game`, () => {
  describe(`true false answer`, () => {
    const trueAnswer = {answer: `photo`, timer: 10};
    const failAnswer = {answer: `paint`, timer: 10};

    it(`true`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game2, trueAnswer).lives, 3);
    });

    it(`false`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game2, failAnswer).lives, 2);
    });
  });

  describe(`achivement`, () => {
    const fastAnswer = {answer: `photo`, timer: 22};
    const slowAnswer = {answer: `photo`, timer: 8};
    const normalAnswer = {answer: `photo`, timer: 12};

    it(`add fast`, () => {
      const newState = Object.assign({}, game, {statistic: []});
      assert.equal(checkAnswer(newState, game2, fastAnswer).statistic[0].achivement, `fast`);
    });

    it(`add slow`, () => {
      const newState = Object.assign({}, game, {statistic: []});
      assert.equal(checkAnswer(newState, game2, slowAnswer).statistic[0].achivement, `slow`);
    });

    it(`no achivement`, () => {
      const newState = Object.assign({}, game, {statistic: []});
      assert.equal(checkAnswer(newState, game2, normalAnswer).statistic[0].achivement, null);
    });
  });

  describe(`points`, () => {
    const fastAnswer = {answer: `photo`, timer: 22};
    const slowAnswer = {answer: `photo`, timer: 8};
    const normalAnswer = {answer: `photo`, timer: 12};

    it(`add points for true answer`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game2, normalAnswer).points, 100);
    });

    it(`add points for fast answer`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game2, fastAnswer).points, 150);
    });

    it(`delete points for slow answer`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game2, slowAnswer).points, 50);
    });
  });
});
