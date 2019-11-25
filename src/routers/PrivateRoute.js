import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// '...rest' contains everything in the props that isn't destructured
export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        // render the component is the user is authenticated. Redirect to '/' if he's not
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                    <Header />
                    <Component {...props}/>
                </div>        
            ) : (
                <Redirect to="/" />
            )
        )}/>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    } 
};

export default connect(mapStateToProps)(PrivateRoute);