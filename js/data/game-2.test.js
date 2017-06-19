import assert from 'assert';
import game from './game';
import game2, {checkAnswer} from './game-2';

describe(`game`, () => {
  it(`check true answer`, () => {
    assert.equal(checkAnswer(game2, {answer: `photo`}).level, 3);
    assert.notEqual(checkAnswer(game2, {answer: `photo`}).lives, 1);
  });

  it(`check answer time`, () => {
    assert.equal(checkAnswer(game, {time: 31}).lives, 2);
    assert.equal(checkAnswer(game, {time: 20}).lives, 3);
  });

  it(`add achivements`, () => {
    assert.equal(checkAnswer(game, {time: 9}).achivement, `fast`);
    assert.equal(checkAnswer(game, {time: 22}).achivement, `slow`);
  });

  it(`to next level`, () => {
    assert.equal(checkAnswer(game, {level: 1}).level, 2);
    assert.equal(checkAnswer(game, {level: 10}).level, `stats`);
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
