// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
/* this resets the css for all browsers */
import 'normalize.css/normalize.css';
import './styles/styles.scss';



ReactDOM.render(<AppRouter/>, document.getElementById('app'));