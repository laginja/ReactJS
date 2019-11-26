import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={props.expense}
                    onSubmit={(expense) => {
                        // Dispatch the action to edit the expense
                        props.dispatch(startEditExpense(props.match.params.id, expense));
                        // Redirect to the dashboard
                        props.history.push('/');
                    }}
                />
                <button className="button button--secondary" onClick={() => {
                    props.dispatch(startRemoveExpense({ id: props.match.params.id }));
                    // Redirect to the dashboard
                    props.history.push('/');
                }}>Remove Expense</button>
            </div>
            
        </div>
    );
};

// give the component the current expense object
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
};

export default connect(mapStateToProps)(EditExpensePage);