import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect(() => {}, []);
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>External users</h2>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "20px",
        borderRadius: "15px",
      }}
    >
      <h3>Name: {props.name}</h3>
      <p>E-mail: {props.email}</p>
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
