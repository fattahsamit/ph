import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Laptop", price: "70000" },
    { name: "Phone", price: "22000" },
    { name: "Watch", price: "1200" },
    { name: "Tablet", price: "33000" },
  ];
  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
      {/* <Product name="Laptop" price="70000"></Product>
      <Product name="Phone" price="22000"></Product>
      <Product name="Watch" price="1200"></Product> */}
    </div>
  );
}

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
