import ExpenseItem from './ExpenseItem';
import Card from './UI/Card';
import './Expenses.css';
import React from 'react'
import ExpensesFilter from './NewExpense/ExpenseFilter';

function Expenses(props)
{
  function selectedFilterHandler(selectedFilter)
  {
      const selected={selectedFilter}
  }

    return (
      <div>
      <Card className="expenses">
        <ExpensesFilter sendselectedFilterValue={selectedFilterHandler}/>
        {props.items.map((expense)=>(
           <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
           />
        ))}
      </Card>
      </div>
    );

}
export default Expenses