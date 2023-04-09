import React from "react";
import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

const Countries = () => {
  const countries = useLoaderData();
  //   console.log(countries);

  return (
    <div>
      <h3>Total Countries: {countries.length}</h3>
      <div className="grid grid-cols-4 gap-5">
        {countries.map((country) => (
          <Country key={country.cca2} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
