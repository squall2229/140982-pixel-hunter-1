const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element.querySelector(`div`);
};

export default getElementFromTemplate;


