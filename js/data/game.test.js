import assert from 'assert';

describe(`game rules`, () => {
  it(`time on game`, () => {
    const data = {time: 30};

    const timeGame = (state) => {
      const newState = Object.assign({}, state);

      setTimeout(() => {
        newState.time = newState.time - 30;
      }, data.time);

      return newState.time;
    };

    assert.notEqual(timeGame(data).time, data.time);
  });

  it(`false question`, () => {
    const data = {lives: 3};
    const answer = false;

    const checkAnswer = (state) => {
      if (!answer) {
        const newState = Object.assign({}, state, {lives: state.lives - 1});
        return newState;
      } else {
        return state;
      }
    };

    assert.notEqual(checkAnswer(data).lives, data.lives);
    assert.equal(checkAnswer(data).lives, data.lives - 1);
  });

  describe(`achivements`, () => {
    it(`fast question`, () => {
      const data = {time: 30, speed: false, slow: false, bonus: 0};

      const checkSpeedQuestion = (state, timeQuestion = 0) => {
        const newState = Object.assign({}, state);
        newState.time -= timeQuestion;

        if (newState.time > 20) {
          newState.speed = true;
          newState.bonus += 50;

          return newState;

        } else if (newState.time < 10) {
          newState.slow = true;
          newState.bonus -= 50;

          return newState;

        } else {
          return state;
        }
      };

      assert.notDeepEqual(checkSpeedQuestion(data), data);
      assert.notEqual(checkSpeedQuestion(data, 7).bonus, data.bonus);
      assert.equal(checkSpeedQuestion(data, 7).bonus, data.bonus + 50);
      assert.notEqual(checkSpeedQuestion(data, 22).bonus, data.bonus);
      assert.equal(checkSpeedQuestion(data, 22).bonus, data.bonus - 50);
    });
  });
});
