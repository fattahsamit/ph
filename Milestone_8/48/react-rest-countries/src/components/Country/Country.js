import React from "react";
import "./Country.css";

const Country = (props) => {
  // console.log(props.country);
  const { name, region, population, area } = props.country;

  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <p>Region: {region}</p>
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
