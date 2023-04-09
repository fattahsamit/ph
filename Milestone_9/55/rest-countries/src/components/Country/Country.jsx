import React from "react";

const Country = ({ country }) => {
  console.log(country);
  const { name, population, flags, region } = country;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={flags.svg} alt="flag" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <div className="card-actions ">
          <button className="btn btn-primary w-full">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Country;
