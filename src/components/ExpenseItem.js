import React, { Component } from "react";
import './ExpenseItem.css';

function ExpenseItem() { //JSX syntax
  return (
    <div className="expense-item">
      {" "}
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2> 
        <div className="expense-item__price">300e</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
