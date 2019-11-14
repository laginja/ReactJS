import React from 'react'
// Connects this component to the redux store
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

// This allows us to use the redux store object and mapp it to the props of the componnent we select
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

// Connect returns a function so this is how we need to call it
export default connect(mapStateToProps)(ExpenseList);
