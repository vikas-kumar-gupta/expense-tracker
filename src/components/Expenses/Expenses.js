import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.item.filter(
    (expenses) => expenses.date.getFullYear().toString() == filteredYear
  );

  let expenseContent = <p>No Expenses Found</p>;
  if(filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.length > 0 &&
    filteredExpenses.map((expenses) => {
      return (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          date={expenses.date}
          amount={expenses.amount}
        />
      );
    })
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangehandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
