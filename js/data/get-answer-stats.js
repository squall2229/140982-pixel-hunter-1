const getAnswerStats = (timer, state) => {
  state.points += 100;

  if (timer > 20) {

    state.points += 50;
    return {result: true, achivement: `fast`};

  } else if (timer < 10) {

    state.points -= 50;
    return {result: true, achivement: `slow`};

  } else {

    return {result: true, achivement: null};
  }
};

export default getAnswerStats;
