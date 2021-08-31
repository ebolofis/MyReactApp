import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap inclusion
import "./App.css";
import NavigationBar from "./components/Navbar";
import ExpenseItem from "./components/ExpenseItem";
import Card from './components/Card';
import Logo from './components/Logo';

function App() {
   const  expenses = [
    {id:1,title:'Car Insurance',amount:300,datum:new Date(2021,6,28)},
    {id:2,title:'Boat Insurance',amount:290,datum:new Date(2021,6,27)},
    {id:3,title:'Plane Insurance',amount:280,datum:new Date(2021,6,26)},
    {id:4,title:'House Insurance',amount:270,datum:new Date(2021,6,25)}
    ];
return (
  <div className="App">
    <header className="App-header">
  
  <NavigationBar></NavigationBar>
  
      <Logo></Logo>
    <Card>
    </Card>
    <ExpenseItem id={expenses[0].id} datum={expenses[0].date} amount={expenses[0].amount} title={expenses[0].title}></ExpenseItem>
      <ExpenseItem id={expenses[1].id} datum={expenses[1].date} amount={expenses[1].amount} title={expenses[1].title}></ExpenseItem>
      <ExpenseItem id={expenses[2].id} datum={expenses[2].date} amount={expenses[2].amount} title={expenses[2].title}></ExpenseItem>
      <ExpenseItem id={expenses[3].id} datum={expenses[3].date} amount={expenses[3].amount} title={expenses[3].title}></ExpenseItem>
    </header>
  </div>
);
 }


export default App;
