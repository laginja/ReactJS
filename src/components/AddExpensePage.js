import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                // add data to the redux store
                props.dispatch(addExpense(expense));
                // .push() redirects you to the given path using browser routing (no full page refresh)
                props.history.push('/');
            }}
        />
    </div>
);
export default connect()(AddExpensePage);