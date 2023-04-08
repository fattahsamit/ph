import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold text-indigo-900">
          {price.price}
        </span>
        <span className="text-2xl font-semibold text-white">/month</span>
      </h2>

      <h5 className="text-2xl my-5 font-bold text-center">{price.name}</h5>

      <p className="font-bold text-white underline">Features:</p>
      {price.features.map((feature, id) => (
        <Feature key={id} feature={feature}></Feature>
      ))}
      <button className="w-full mt-auto bg-green-500 hover:bg-green-600 py-2 rounded-md text-white font-semibold">
        Buy now
      </button>
    </div>
  );
};

export default PriceCard;
