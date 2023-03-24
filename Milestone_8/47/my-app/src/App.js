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
      <Person name="Fattah Samit" job="Software Engineer"></Person>
      <Person name="Sakib Al Hasan" job="Businessman"></Person>
      <Person name="Chris Evans" job="Actor"></Person>
      <h2 id="justAnotherComponent">New Component</h2>
      <Friend name="Jason Mamoa" role="Aquaman"></Friend>
      <Friend name="Jhonny Depp" role="Jack Sparrow"></Friend>
      <Friend name="Hugh Jackman" role="Wolverine"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h1>Name: {props.name}</h1>
      <p>Role: {props.role}</p>
    </div>
  );
}

export default App;
