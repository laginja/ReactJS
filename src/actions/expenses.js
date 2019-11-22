import uuid from 'uuid';
import database from '../firebase/firebase';

// Action generators

// WORKFLOW: 
// component call action generator
// action generator returns object
// component dispatches object
// redux store changes

// WORKFLOW WITH ASYNC : 
// component call action generator
// action generator returns function that does some asynchronous work
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense =  (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense: expense
    }
};

// ASYNC action that is responsible for fetching data from firebase
export const startAddExpense = (expenseData = {}) => {
    // this works cause we added a middleware 'redux-trunk'
    // 'dispatch' gets passed here through the redux library
    return (dispatch) => {
        // setting default values for expenseData object
        const {
            description = '', 
            notes = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;

        const expense = { description, notes, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            //  after the data if pushed, call dispatch to add data to redux store
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
};

//ASYNC action
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() =>{
            dispatch(removeExpense({id}));
        });
    }
}; 

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
};

// ASYNC action
export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    }
};

// SET_EXPENSES
export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses: expenses
    };
};

// ASYNC action
export const startSetExpenses = () => {
    return (dispatch) => {
        // 'return' makes sure the promise actually gets returned
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};