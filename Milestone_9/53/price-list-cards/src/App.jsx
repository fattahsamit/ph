import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-500">Hello World</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
