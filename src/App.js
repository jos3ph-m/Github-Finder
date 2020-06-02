import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
