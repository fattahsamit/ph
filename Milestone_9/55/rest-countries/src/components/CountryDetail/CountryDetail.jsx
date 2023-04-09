import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const CountryDetail = () => {
  const country = useLoaderData();
  console.log(country[0]);
  const { name, population, region, flags } = country[0];

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <img src={flags.png} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name.common}</h1>
          <p className="py-2">Population: {population}</p>
          <p className="py-2">Region: {region}</p>
          <button onClick={handleGoBack} className="btn btn-primary">
            Get Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
