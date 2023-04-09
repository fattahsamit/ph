import React from "react";
import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

const Countries = () => {
  const countries = useLoaderData();
  //   console.log(countries);

  return (
    <div className="my-10">
      <h3 className="text-center text-3xl font-semibold">
        Total Countries: {countries.length}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {countries.map((country) => (
          <Country key={country.cca2} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
