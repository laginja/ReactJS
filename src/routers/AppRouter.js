import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// we use this function to create our own history
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

// setting 'exact = 'true' makes sure that we only render components if we visit the exact path.
// otherwise it will render components on top of each other.
// Instead of using 'BrowserRouter' (that has history built in) we are using regular
// 'Router' so we can provider our own history 
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
