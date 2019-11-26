import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className=".box-layout__title">Expensify</h1>
                <p>It's time to get your expenses under control.</p>
                <button className="button" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

// first argument is 'undefined' because it's a mapStateToProps which I don't use
export default connect(undefined, mapDispatchToProps)(LoginPage);