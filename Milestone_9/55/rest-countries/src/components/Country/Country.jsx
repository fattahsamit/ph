import React from "react";

const Country = ({ country }) => {
  console.log(country);
  const { name, population, flags } = country;
  return (
    <div className="flex justify-between items-center gap-5 border border-black p-5 rounded-lg">
      <div>
        <img className="w-40" src={flags.svg} alt="flag" />
      </div>
      <div>
        <h2>{name.common}</h2>
        <p>{population}</p>
      </div>
    </div>
  );
};

export default Country;
