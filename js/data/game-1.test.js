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

  // it(`to next level`, () => {
  //   assert.equal(checkAnswer(game, {level: 1}).level, 2);
  //   assert.equal(checkAnswer(game, {level: 10}).level, `stats`);
  // });

  // it(`check add points after answer`, () => {
  //   assert.equal(checkAnswer(game, {aswer1: `photo`, answer2: `paint`}).point, 100);
  // });

  // it(`check add points after true fast answer`, () => {
  //   assert.equal(checkAnswer(game, {aswer1: `photo`, answer2: `paint`, time: 9, point: 100}).point, 150);
  //   assert.equal(checkAnswer(game, {aswer1: `photo`, answer2: `paint`, time: 22, point: 100}).point, 50);
  // });

  // it(`check lives points`, () => {
  //   assert.equal(checkAnswer(game, {lives: 2, point: 0}).point, 100);
  // });

  // it(`check answer time`, () => {
  //   const timeOn = {answer1: `photo`, answer2: `photo`, timer: 20};
  //   const timeOff = {answer1: `photo`, answer2: `photo`, timer: 0};

  //   assert.equal(checkAnswer(game, game1, timeOn).lives, 3);
  //   assert.equal(checkAnswer(game, game1, timeOff).lives, 2);
  // });
});
