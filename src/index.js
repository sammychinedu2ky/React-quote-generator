import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./Card.js";
import "./styles.css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return <Card />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
