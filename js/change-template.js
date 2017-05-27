const container = document.getElementById(`main`);

const changeTemplate = (template) => {
  container.innerHTML = ``;
  container.appendChild(template);
};

export default changeTemplate;
