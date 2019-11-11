/*  'combineReducers' let's us manage the state of our app with more flexibility.
    The idea is to create a reducer for each feature of the app state that we are managing.
    In our case 'expenses' contains one set of state features and 'filters' are another so
    we should have a reducer for each of those features.
*/
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// State
const demoState = {
    expenses: [{
        id: 'randomstring',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date',   // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// Action generators

// ADD_EXPENSE
const addExpense = ({description = '', notes = '', amount = 0, createdAt = 0} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: notes,
            amount: amount,
            createdAt: createdAt
        }   
    }
};

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
};

// EDIT_EXPENSE
const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
};

// SET_TEXT_FILTER
const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    }
};

// SORT_BY_DATE
const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    };
};
// SORT_BY_AMOUNT
const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    };
};

// SET_START_DATE
const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    };
};
// SET_END_DATE
const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate: endDate
    };
};

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            // ES6 Spread - (...<array_name>) allows us to create a new array without modifying the old
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }; 
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // if returns true, that expense will be inside the array
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 700 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-12500));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1999));