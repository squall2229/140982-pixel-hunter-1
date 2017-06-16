const data = {
  result: {
    win: `Победа!`,
    lose: `Поражение!`
  },
  history: []
};

export const checkStats = (state) => {
  const newState = Object.assign({}, state);
  return newState;
};

export default data;
