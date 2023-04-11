import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // 1
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  } else {
    message = (
      <div>
        <h5>Thanks for wasting your money</h5>
      </div>
    );
  }

  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {message}
      {/* 2 */}
      {cart.length > 2 ? <span>Borolok</span> : <span>Fokirnni</span>}

      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}

      {/* 3 */}
      {cart.length === 2 && <p>Double buy</p>}
      {/* 4 */}
      {cart.length === 3 || <p>Not 3</p>}
    </div>
  );
};

export default Cart;

/*
    Conditional Rendering
  =========================
  1. use if or if-else to set a variable that will contain an element, components
  2. Ternary Operator = condition ? 'for true' : 'false'
  3. Logical && = (if the condition is true then the next thing will be displayed)
  4. Logical || = (if the condition is false then the next thing will be displayed)

*/
