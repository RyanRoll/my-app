import React from "react";

import Login from "../Login";
import logo from "./images/logo.svg";
import "./styles/App.css";

function App() {
  const username = "Mirror";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login message="Hello Please Login!" username={username} sex="boy" />
      </header>
    </div>
  );
}

export default App;
