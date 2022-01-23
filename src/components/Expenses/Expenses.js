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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangehandler}
        />
        {props.item.map((expenses) => {
          return (
            <ExpenseItem
              title={expenses.title}
              date={expenses.date}
              amount={expenses.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
