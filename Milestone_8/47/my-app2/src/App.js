import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const [count, setCount] = useState(0);
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

// const products = [
//   { name: "Laptop", price: "70000" },
//   { name: "Phone", price: "22000" },
//   { name: "Watch", price: "1200" },
//   { name: "Tablet", price: "33000" },
// ];

// {products.map((product) => (
//   <Product name={product.name} price={product.price}></Product>
// ))}

function Product(props) {
  console.log(props);
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default App;
