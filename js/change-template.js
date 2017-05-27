const changeTemplate = (template) => {
  const container = document.getElementById(`main`);
  container.innerHTML = ``;
  container.appendChild(template);
};

export default changeTemplate;
