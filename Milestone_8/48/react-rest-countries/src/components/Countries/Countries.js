import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      {countries.map((country) => (
        <Country
          name={country.name.common}
          population={country.population}
          area={country.area}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
