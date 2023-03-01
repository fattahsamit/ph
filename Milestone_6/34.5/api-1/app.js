// Display how many persons
const showFoundData = (person) => {
  const foundData = person.found;
  const foundText = document.getElementById("found");
  const h3 = document.createElement("h3");
  h3.classList.add("text-3xl");
  h3.innerHTML = `
  Found ${foundData} persons
  `;
  foundText.appendChild(h3);
};

showFoundData(person);
