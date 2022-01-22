import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log('Expenses.js');
    // console.log(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangehandler} />
        <ExpenseItem
          title={props.item[0].title}
          date={props.item[0].date}
          amount={props.item[0].amount}
        />
        <ExpenseItem
          title={props.item[1].title}
          date={props.item[1].date}
          amount={props.item[1].amount}
        />
        <ExpenseItem
          title={props.item[2].title}
          date={props.item[2].date}
          amount={props.item[2].amount}
        />
        <ExpenseItem
          title={props.item[3].title}
          date={props.item[3].date}
          amount={props.item[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
