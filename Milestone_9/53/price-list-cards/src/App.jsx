import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-500">Hello World</h1>
      <PriceList></PriceList>
    </div>
  );
}

export default App;
