import React, { Component } from "react";

import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
//
function App() {
   const  expenses = [
    {title:'Car Insurance',amount:300,date:new Date(2021,6,28)},
    {title:'Boat Insurance',amount:290,date:new Date(2021,6,27)},
    {title:'Plane Insurance',amount:280,date:new Date(2021,6,26)},
    {title:'House Insurance',amount:270,date:new Date(2021,6,25)}
    ];
return (
  <div className="App">
    <header className="App-header">
      <ExpenseItem title={expenses[1].title}></ExpenseItem>
      
    </header>
  </div>
);
 }
// class App extends Component {

//   render() {
    
  
//   }
// }

export default App;
