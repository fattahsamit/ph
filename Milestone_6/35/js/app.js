const loadPhones = async (searchText) => {
  const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(URL);
  const data = await res.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  // Display 6 phones only
  phones = phones.slice(0, 6);

  // Display no phones found
  const noPhone = document.getElementById("no-found-message");
  if (phones.length === 0) {
    noPhone.classList.remove("d-none");
  } else {
    noPhone.classList.add("d-none");
  }

  // Display all phones
  phones.forEach((phone) => {
    console.log(phone);
    const { phone_name, image } = phone;
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="card p-4">
          <img src="${image}" class="card-img-top" alt="..." />
          <div class="card-body">
              <h5 class="card-title">${phone_name}</h5>
              <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
          </div>
      </div>
    `;
    phoneContainer.appendChild(div);
  });
  toggleSpinner(false);
};

// Search button event
document.getElementById("btn-search").addEventListener("click", () => {
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText);
  searchField.value = "";
});

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};
