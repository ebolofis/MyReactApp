import React, { Component } from "react";
import './ExpenseItem.css';

function ExpenseItem() { //JSX syntax
  return (
    <div>
      {" "}
      <div>March 28th 2021</div>
      <div>
        <h2>Car Insurance</h2> 
        <div>300e</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
