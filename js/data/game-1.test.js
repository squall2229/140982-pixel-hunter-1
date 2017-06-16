import assert from 'assert';
import game from './game';
import game1, {checkAnswer} from './game-1';

describe(`game`, () => {
  it(`check answer time`, () => {
    assert.equal(checkAnswer(game, {time: 31}).lives, 2);
    assert.equal(checkAnswer(game, {time: 20}).lives, 3);
  });

  it(`add achivements`, () => {
    assert.equal(checkAnswer(game, {time: 9}).achivement, `fast`);
    assert.equal(checkAnswer(game, {time: 22}).achivement, `slow`);
  });

  it(`check true-false answer`, () => {
    assert.equal(checkAnswer(game, {answer1: `photo`, answer2: `paint`}).answer, {answer1: game1.answers.answer1, answer2: game1.answers.answer2});
  });

  it(`to next level`, () => {
    assert.equal(checkAnswer(game, {level: 1}).level, 2);
    assert.equal(checkAnswer(game, {level: 10}).level, 1);
  });

  it(`check add points after answer`, () => {
    assert.equal(checkAnswer(game, {point: 0}).point, 100);
  });

  it(`check add points after true fast answer`, () => {
    assert.equal(checkAnswer(game, {point: 0}).point, 150);
  });

  it(`check add points after true slow answer`, () => {
    assert.equal(checkAnswer(game, {point: 100}).point, 100);
  });

  it(`check lives points`, () => {
    assert.equal(checkAnswer(game, {lives: 2, point: 0}).point, 100);
  });
});
