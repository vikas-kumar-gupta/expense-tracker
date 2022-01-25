import React, { useState }from 'react';

import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    
  let expenseContent = <p>No Expenses Found</p>;
  if(props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>    
  }

  return (
      <ul className="expenses-list">
        {props.items.map((expenses) => {
            return (
                <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                date={expenses.date}
                amount={expenses.amount}
                />
            );
        })}
      </ul>
  )
}

export default ExpensesList;