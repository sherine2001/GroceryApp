import React, { useState } from "react";
import "./ExpenseForm.css";
import ExpenseItem from "../ExpenseItem";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function TitleChangeHandler(e) {
    setEnteredTitle(e.target.value);
    <ExpenseForm data={enteredTitle}/>
  }
  function AmountChangeHandler(e) {
    setEnteredAmount(e.target.value);
  }

  function DateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }

  function sumbitHandler(e) {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData)
    setEnteredAmount("")
    setEnteredDate("")
    setEnteredTitle("")
  }

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={TitleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
  
    </form>
  );
}

export default ExpenseForm;
