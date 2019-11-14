import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    // Dispatch the action to edit the expense
                    props.dispatch(editExpense(props.match.params.id, expense));
                    // Redirect to the dashboard
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.match.params.id }));
                // Redirect to the dashboard
                props.history.push('/');
            }}>Remove</button>
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