const data = {
  life: 3,
  points: 0,
  timer: 30,
  levels: [
    {
      task: `Угадайте для каждого изображения фото или рисунок?`,
      type: `game1`,
      images: [
        {
          src: `http://i.imgur.com/1KegWPz.jpg`,
          type: `photo`
        },
        {
          src: `https://k42.kn3.net/CF42609C8.jpg`,
          type: `paint`
        }
      ],
      answers: {
        answer1: `photo`,
        answer2: `paint`
      }
    },
    {
      task: `Угадай, фото или рисунок?`,
      type: `game2`,
      images: [
        {
          src: `https://i.imgur.com/DiHM5Zb.jpg`,
          type: `photo`
        }
      ],
      answer: `paint`,
    },
    {
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
      answer: `photo`
    }
  ],
  achivements: {
    bonus: {
      speed: 0,
      lifeBonus: 0
    },
    punish: {
      slow: ``
    }
  }
};

export default data;
