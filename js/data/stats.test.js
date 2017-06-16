import assert from 'assert';
import game from './game';
import stats, {checkStats} from './stats';

describe(`stats`, () => {
  it(`check result`, () => {
    assert.equal(checkStats(game, {levels: 10}).result, stats.result);
  });
});
