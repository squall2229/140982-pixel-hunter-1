const resize = (element, w, h, ...src) => {
  const images = element.querySelectorAll(`.game__option img`);

  Array.from(images).forEach((img, i) => {
    let newImg = new Image();
    newImg.src = src[i];
    newImg.onload = () => {
      let width = newImg.width;
      let height = newImg.height;

      if (width >= height) {
        img.width = w;
        img.height = w / (width / height);
      } else {
        img.height = h;
        img.width = h * (width / height);
      }
    };
  });
};

export default resize;

