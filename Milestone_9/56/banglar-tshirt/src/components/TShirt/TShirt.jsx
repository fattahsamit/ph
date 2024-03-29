import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { price, picture, name } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
