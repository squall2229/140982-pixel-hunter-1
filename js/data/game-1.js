import getAnswerStats from './get-answer-stats';

const data = {
  task: `Угадайте для каждого изображения фото или рисунок?`,
  type: `game1`,
  images: [
    {
      src: `http://i.imgur.com/1KegWPz.jpg`,
      type: `photo`
    },
    {
      src: `https://k42.kn3.net/CF42609C8.jpg`,
      type: `photo`
    }
  ]
};

export const checkAnswer = (mainState, state, answers) => {

  const {answer1, answer2, timer} = answers;
  const [{type: type1}, {type: type2}] = state.images;

  if (answer1 === type1 && answer2 === type2) {
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
