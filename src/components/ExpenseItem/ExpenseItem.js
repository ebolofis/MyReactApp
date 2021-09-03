import React from "react";
import './ExpenseItem.css';


function ExpenseItem(props) { //JSX syntax
   const expenseDate = new Date();
  // const expenseTitle="Car Insurance";
  // const expenseAmount = 300;
  let today = expenseDate.getFullYear()+'-'+(expenseDate.getMonth()+1)+'-'+expenseDate.getDate();
  console.log(props);
 
  return props.data.map((post ) =>

  <div >
    <div class="d-flex">
  <div class="p-2"><h3>{post.amount}</h3></div>
  <div class="p-2"><p>{today}</p></div>
  <div class="p-2"><p>{post.title}</p></div>
</div>
    
    
    
  </div>
);
  
}

export default ExpenseItem;
