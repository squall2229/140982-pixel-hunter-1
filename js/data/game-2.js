const data = {
  task: `Угадай, фото или рисунок?`,
  type: `game2`,
  image: {
    src: `https://i.imgur.com/DiHM5Zb.jpg`,
    type: `photo`
  }
};

export const checkAnswer = (state, answer) => {
  const newState = Object.assign({}, state);

  if (answer.time > 30) {
    newState.lives = newState.lives - 1;
  }

  return newState;
};

export default data;
