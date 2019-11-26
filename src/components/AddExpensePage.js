import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm 
                onSubmit={(expense) => {
                    // add data to the redux store
                    props.dispatch(startAddExpense(expense));
                    // .push() redirects you to the given path using browser routing (no full page refresh)
                    props.history.push('/');
                }}
            />
        </div>
    </div>
);
export default connect()(AddExpensePage);