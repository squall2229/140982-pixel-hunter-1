import assert from 'assert';
import game from './game';
import game1, {checkAnswer} from './game-1';

describe(`game`, () => {
  describe(`true false answer`, () => {
    const trueAnswer = {answer1: `photo`, answer2: `photo`, timer: 10};
    const failAnswer = {answer1: `photo`, answer2: `paint`, timer: 10};

    it(`true`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game1, trueAnswer).lives, 3);
    });

    it(`false`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game1, failAnswer).lives, 2);
    });
  });

  describe(`achivement`, () => {
    const fastAnswer = {answer1: `photo`, answer2: `photo`, timer: 22};
    const slowAnswer = {answer1: `photo`, answer2: `photo`, timer: 8};
    const normalAnswer = {answer1: `photo`, answer2: `photo`, timer: 12};

    it(`add fast`, () => {
      const newState = Object.assign({}, game, {statistic: []});
      assert.equal(checkAnswer(newState, game1, fastAnswer).statistic[0].achivement, `fast`);
    });

    it(`add slow`, () => {
      const newState = Object.assign({}, game, {statistic: []});
      assert.equal(checkAnswer(newState, game1, slowAnswer).statistic[0].achivement, `slow`);
    });

    it(`no achivement`, () => {
      const newState = Object.assign({}, game, {statistic: []});
      assert.equal(checkAnswer(newState, game1, normalAnswer).statistic[0].achivement, null);
    });
  });

  describe(`points`, () => {
    const fastAnswer = {answer1: `photo`, answer2: `photo`, timer: 22};
    const slowAnswer = {answer1: `photo`, answer2: `photo`, timer: 8};
    const normalAnswer = {answer1: `photo`, answer2: `photo`, timer: 12};

    it(`add points for true answer`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game1, normalAnswer).points, 100);
    });

    it(`add points for fast answer`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game1, fastAnswer).points, 150);
    });

    it(`delete points for slow answer`, () => {
      const newState = Object.assign({}, game);
      assert.equal(checkAnswer(newState, game1, slowAnswer).points, 50);
    });
  });
});
