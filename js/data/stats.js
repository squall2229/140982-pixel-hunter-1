export const checkStats = (mainState) => {
  const newState = Object.assign({}, mainState, {
    countFast: 0,
    countSlow: 0,
    bonusFast: 0,
    bonusSlow: 0,
    bonusLives: 0,
    allpoints: 0
  });

  newState.statistic.forEach((element) => {

    if (element.result) {
      newState.points += 100;
    }

    if (element.achivement === `fast`) {
      newState.countFast += 1;
    }

    if (element.achivement === `slow`) {
      newState.countSlow += 1;
    }
  });

  newState.bonusFast = newState.countFast * 50;
  newState.bonusSlow = newState.countSlow * 50;
  newState.bonusLives = newState.lives * 50;
  newState.allpoints = newState.bonusFast + newState.bonusLives - newState.bonusSlow;

  if (newState.lives > 0) {
    newState.result = `Победа!`;
  } else {
    newState.result = `Поражение!`;
  }

  return newState;
};
