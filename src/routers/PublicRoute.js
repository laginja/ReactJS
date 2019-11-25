import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// '...rest' contains everything in the props that isn't destructured
export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        // render the component is the user is NOT authenticated. Redirect to '/dashboard' if he is
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect to="/dashboard" />           
            ) : (
                <Component {...props}/>
            )
        )}/>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    } 
};

export default connect(mapStateToProps)(PublicRoute);