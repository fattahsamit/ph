import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>World Tour</h1>
      <h2>Available Countries: {countries.length}</h2>
      {countries.map((country) => (
        <Country
          name={country.name.common}
          population={country.population}
        ></Country>
      ))}
    </div>
  );
}

function Country({ name, population }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h4>Population: {population}</h4>
    </div>
  );
}

export default App;
