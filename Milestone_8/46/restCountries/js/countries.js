const loadCountries = async () => {
  const URL = "https://restcountries.com/v3.1/all";
  const res = await fetch(URL);
  const data = await res.json();
  displayCountries(data);
};

const displayCountries = (countries) => {
  console.log(countries[0]);
};

loadCountries();
