import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap inclusion
import "./App.css";
import NavigationBar from "./components/Navbar/Navbar";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import Card from './components/Card/Card';
import Logo from './components/Logo/Logo';
import CarouselComponent from './components/Carousel/CarouselComponent';

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
  
  <NavigationBar/>
    <CarouselComponent/>
    <Logo/>
    <Card/>
    
    <ExpenseItem data={expenses.map(x=>x)} ></ExpenseItem>
      
    </header>
  </div>
);
 }


export default App;
