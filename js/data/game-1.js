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

export const checkAnswer = (mainState, state, answer, time) => {
  const newState = Object.assign({}, state);

  if (answer.answer1 === newState.images[0].type && answer.answer2 === newState.images[1].type) {
    const userAnswer = {
      result: true,
      time
    };

    return mainState.statistic.push(userAnswer);
  } else {
    const userAnswer = {
      result: false,
      time
    };

    return mainState.statistic.push(userAnswer);
  }
};

export default data;
