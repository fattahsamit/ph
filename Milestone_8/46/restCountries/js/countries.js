const loadCountries = async () => {
  const URL = "https://restcountries.com/v3.1/all";
  const res = await fetch(URL);
  const data = await res.json();
  displayCountries(data);
};

const displayCountries = (countries) => {
  //   console.log(countries[0]);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

const getCountryHTML = ({ name, flags, area, region }) => {
  return `
    <div class="country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p>
        <p>Continent: ${region}</p>
        <img src="${flags.png}">
    </div>
    `;
};

loadCountries();
