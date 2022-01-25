import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";

// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.item.filter(
    (expenses) => expenses.date.getFullYear().toString() == filteredYear
  );


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangehandler}
        />
        {/* {expenseContent} */}
        <ExpensesList items={filteredExpenses} />

      </Card>
    </div>
  );
};

export default Expenses;
