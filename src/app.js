// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
// Allows us to provide the 'store' to all of our components. We don't need to manually pass the store variable around
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
/* this resets the css for all browsers */
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase} from './firebase/firebase';
import { login, logout } from './actions/auth';

const store = configureStore();

const jsx = (
    <Provider store={store}> 
        <AppRouter /> 
    </Provider> 
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// Takes a callback function and runs it when authentication state changes.
// When a user goes from 'authenticaed' to 'un-authenticated' and vice-versa
// If there is a user, he is provided to the callback
firebase.auth().onAuthStateChanged((user) => {
    // If user is logged in
    if(user) {
        // save the userID in redux store.
        // We dispatch from here (and not from /actions/auth) because this is going to
        // run even when the user first visit the web page. This will make sure that
        // we immediatelly know if the user visiting the site is logged in or not. If 
        // we put it inside the /actions/auth (like we did in the other cases) we would
        // only set the state when the user logins or logouts.
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        // remove userID from redux store
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});