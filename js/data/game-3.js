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
  ],
  answer: 1
};

export const checkAnswer = (state, answer) => {
  const newState = Object.assign({}, state);
  return newState;
};

export default data;
