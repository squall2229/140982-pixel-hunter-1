const onTimer = (timer, element) => {
  function timerOn() {
    if (timer > 0) {
      timer = timer - 1;
      element.textContent = timer;
      setTimeout(timerOn, 1000);
    }
  }

  setTimeout(timerOn, 1000);
};

export default onTimer;
