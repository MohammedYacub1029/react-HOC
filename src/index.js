import React from "react";
import ReactDOM from "react-dom";
import Click from "./Components/Click";
import Hover from "./Components/Hover";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Click />
      <Hover />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
