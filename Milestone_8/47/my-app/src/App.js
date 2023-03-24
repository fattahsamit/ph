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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>JSX</h2>
        <div className="container">
          <p>Create React App</p>
        </div>
        <div className="music">
          <p>Name: {6 + name}</p>
          <p style={singerStyle}>
            Name: {singer.name}, {singer.band}
          </p>
          <p
            style={{
              color: "white",
              backgroundColor: "green",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Name: {singer2.name}, {singer2.job}
          </p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
