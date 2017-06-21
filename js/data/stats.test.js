import assert from 'assert';
import game from './game';
import stats, {checkStats} from './stats';

describe(`all stats`, () => {
  const statistic = [
    {result: true, achivement: `slow`},
    {result: true, achivement: `fast`},
    {result: true, achivement: `fast`},
    {result: false},
    {result: true, achivement: null},
    {result: false},
    {result: true, achivement: `slow`},
    {result: true, achivement: `slow`},
    {result: true, achivement: `fast`},
    {result: true, achivement: null}];

  it(`all points`, () => {
    const newState = Object.assign({}, game);
    newState.statistic = statistic;

    assert.equal(checkStats(newState, stats).points, 800);
  });

  it(`lives points`, () => {
    const newState = Object.assign({}, game, {lives: 1});

    assert.equal(checkStats(newState, stats).bonusLives, 50);
  });

  it(`fast points`, () => {
    const newState = Object.assign({}, game);
    newState.statistic = statistic;

    assert.equal(checkStats(newState, stats).bonusFast, 150);
  });

  it(`slow points`, () => {
    const newState = Object.assign({}, game);
    newState.statistic = statistic;

    assert.equal(checkStats(newState, stats).bonusSlow, 150);
  });

  it(`result win`, () => {
    const newState = Object.assign({}, game);
    newState.statistic = statistic;
    newState.lives = 1;

    assert.equal(checkStats(newState, stats).result, `Победа!`);
  });

  it(`result lose`, () => {
    const newState = Object.assign({}, game);
    newState.statistic = statistic;
    newState.lives = 0;

    assert.equal(checkStats(newState, stats).result, `Поражение!`);
  });
});
