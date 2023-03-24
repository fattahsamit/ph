import logo from "./logo.svg";
import "./App.css";

const singers = [
  { name: "Chester Bennington", band: "Linkin Park" },
  { name: "Matthew Healy", band: "1975" },
  { name: "Adam Levine", band: "Maroon V" },
  { name: "Michael Jackson", band: "Solo" },
];

function App() {
  const names = [
    "Fattah Samit",
    "Sakib Al Hasan",
    "Chris Evans",
    "Saul Goodman",
  ];
  return (
    <div className="App">
      {names.map((name) => (
        <Person name={name}></Person>
      ))}

      {singers.map((singer) => (
        <Person name={singer.name}></Person>
      ))}

      {/* <Person name={names[0]} job="Software Engineer"></Person>
      <Person name={names[1]} job="Businessman"></Person>
      <Person name={names[2]} job="Actor"></Person> */}
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
