import React from "react";

import Login from "../Login";
import logo from "./images/logo.svg";
import "./styles/App.css";

class App extends React.Component {
  state = {
    isShown: false
  };
  toHideAndShow = () => {
    const { isShown } = this.state;
    this.setState({
      isShown: !isShown
    });
  };
  render() {
    const { isShown } = this.state;
    const username = "Mirror";
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toHideAndShow}>
            {isShown ? "Hide" : "Show"}
          </button>
          <img src={logo} className="App-logo" alt="logo" />
          {isShown && (
            <Login
              message="Hello Please Login!"
              username={username}
              sex="boy"
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
