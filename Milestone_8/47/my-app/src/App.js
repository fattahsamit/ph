import logo from "./logo.svg";
import "./App.css";

const name = 5534;
const singer = { name: "Chester Bennington", band: "Linkin Park" };
const singer2 = { name: "Michael Jackson", job: "Singer" };

const singerStyle = {
  color: "darkblue",
  backgroundColor: "#61dafb",
  padding: "10px",
  borderRadius: "10px",
};

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h2>New Component</h2>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Fattah Samit</h1>
      <p>Software Engineer</p>
    </div>
  );
}

function Friend() {
  return (
    <div className="container">
      <h1>Jason Mamoa</h1>
      <p>Aquaman</p>
    </div>
  );
}

export default App;
