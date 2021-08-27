import React, { Component } from "react";
import './ExpenseItem.css';

function ExpenseItem(props) { //JSX syntax
  const expenseDate = new Date();
  const expenseTitle="Car Insurance";
  const expenseAmount = 300;
  let today = expenseDate.getFullYear()+'-'+(expenseDate.getMonth()+1)+'-'+expenseDate.getDate();
  
    return (
    <div className="expense-item">
        <h3>{props.id}</h3>
      <div>{props.datum}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2> 
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
