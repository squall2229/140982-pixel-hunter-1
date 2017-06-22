import getAnswerStats from './get-answer-stats';

const data = {
  task: `Найдите рисунок среди изображений`,
  type: `game3`,
  images: [
    {
      src: `http://i.imgur.com/DKR1HtB.jpg`,
      type: `photo`
    },
    {
      src: `https://k42.kn3.net/D2F0370D6.jpg`,
      type: `paint`
    },
    {
      src: `https://i.imgur.com/DiHM5Zb.jpg`,
      type: `photo`
    }
  ]
};

export const checkAnswer = (mainState, state, answerData) => {

  const {answer, timer} = answerData;
  const {type} = state.images[1];

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
