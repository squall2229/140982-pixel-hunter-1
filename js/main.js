const templates = document.querySelectorAll(`
  #main,
  #greeting,
  #rules,
  #game-1,
  #game-2,
  #game-3,
  #stats`
);

const mainContainer = document.querySelector(`.central`);
let count = 0;

const changeTemplate = (i) => {
  mainContainer.innerHTML = templates[i].innerHTML;
};

const nextTemplate = () => {
  if (count < templates.length - 1) {
    count += 1;
    changeTemplate(count);
  }
};

const prevTemplate = () => {
  if (count > 0) {
    count -= 1;
    changeTemplate(count);
  }
};

document.addEventListener(`keydown`, (evt) => {
  if (evt.altKey && evt.keyCode === 39) {
    nextTemplate();
  } else if (evt.altKey && evt.keyCode === 37) {
    prevTemplate();
  }
});
