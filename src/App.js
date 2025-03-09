import React from "react";
import Apod from "./Apod";
import RocketLauncher from "./RocketLauncher";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NASA Space Explorer</h1>
      <Apod />
      <RocketLauncher />
    </div>
  );
}

export default App;