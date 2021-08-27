import React, { Component } from "react";

import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
//
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ExpenseItem></ExpenseItem>
        </header>
      </div>
    );
  }
}

export default App;
