import assert from 'assert';

describe(`game test`, () => {
  describe(`game rules`, () => {
    const сheck = (value, state = {}) => {
      const newState = Object.assign({}, state, {value});
      return newState;
    };

    it(`time on game`, () => {
      assert.equal(сheck(30).value, 30);
      assert.notEqual(сheck(30), {value: 30});
    });
  });
});
