// Display how many persons
const showFoundData = (person) => {
  const foundData = person.found;
  const foundText = document.getElementById("found");
  const h3 = document.createElement("h3");
  h3.classList.add("text-3xl");
  h3.innerHTML = person.message;
  foundText.appendChild(h3);
};

// Display cards
const showCard = (person) => {
  const results = person.result;
  const container = document.getElementById("cards-container");
  for (const result of results) {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "card-compact",
      "w-96",
      "bg-base-100",
      "shadow-xl",
      "border",
      "rounded-md"
    );
    const name = result.name.common;
    const age = result.age;
    const street = result.address.street;

    card.innerHTML = `
    <div class="card card-compact w-96 bg-base-100 shadow-xl border rounded-md">
        <h2 class="px-3 py-2 bg-zinc-100 border">Person Name: ${name}</h2>
        <div class="card-body">
            <p>Age: ${age}</p>
            <p>Street: ${street}</p>
        </div>
    </div>
    `;
    container.appendChild(card);
  }
};

showFoundData(person);
showCard(person);
