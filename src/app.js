// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
// Allows us to provide the 'store' to all of our components. We don't need to manually pass the store variable around
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
/* this resets the css for all browsers */
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}> 
        <AppRouter /> 
    </Provider> 
);

ReactDOM.render(jsx, document.getElementById('app'));