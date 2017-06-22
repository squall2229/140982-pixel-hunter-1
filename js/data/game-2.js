import getAnswerStats from './get-answer-stats';

const data = {
  task: `Угадай, фото или рисунок?`,
  type: `game2`,
  image: {
    src: `https://i.imgur.com/DiHM5Zb.jpg`,
    type: `photo`
  }
};

export const checkAnswer = (mainState, state, answerData) => {

  const {answer, timer} = answerData;
  const {type} = state.image;

  if (answer === type) {
    const userAnswer = getAnswerStats(timer, mainState);

    mainState.statistic.push(userAnswer);

    return mainState;

  } else {

    const userAnswer = {
      result: false
    };

    mainState.statistic.push(userAnswer);
    mainState.lives -= 1;

    return mainState;
  }
};

export default data;
