const loadPhones = async (searchText, dataLimit) => {
  const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(URL);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
};

const displayPhones = (phones, dataLimit) => {
  console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  // Display 10 phones only
  const showAll = document.getElementById("show-all");
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }

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

const processSearch = (dataLimit) => {
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit);
};

// Search button event
document.getElementById("btn-search").addEventListener("click", () => {
  // Start loader
  processSearch(10);
  // searchField.value = "";
});

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

// Not the best way to load show all
document.getElementById("btn-show-all").addEventListener("click", function () {
  processSearch();
});
