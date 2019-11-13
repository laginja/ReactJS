// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
// Allows us to provide the 'store' to all of our components. We don't need to manually pass the store variable around
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
/* this resets the css for all browsers */
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 20000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 50000, createdAt: 5000}));
store.dispatch(setTextFilter("gas"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}> 
        <AppRouter /> 
    </Provider> 
);

ReactDOM.render(jsx, document.getElementById('app'));