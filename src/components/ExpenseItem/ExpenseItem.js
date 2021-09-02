import React from "react";
import './ExpenseItem.css';


function ExpenseItem(props) { //JSX syntax
   const expenseDate = new Date();
  // const expenseTitle="Car Insurance";
  // const expenseAmount = 300;
  let today = expenseDate.getFullYear()+'-'+(expenseDate.getMonth()+1)+'-'+expenseDate.getDate();
  console.log(props);
 return <div></div>
//   return props.map((post ) =>
//   <div >
//     <h3>{post.amount}</h3>
//     <p>{today}</p>
//     <p>{post.title}</p>
//   </div>
// );
  
}

export default ExpenseItem;
