import assert from 'assert';
import game from './game';
import game3, {checkAnswer} from './game-3';

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
    assert.equal(checkAnswer(game, {answer: 1}).answer, game3.answer);
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
