import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  // console.log(country);
  const { name, population, flags, region, cca2 } = country;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={flags.svg} alt="flag" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <div className="card-actions">
          <Link to={`/country/${cca2}`}>
            <button className="btn btn-primary w-full">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;
