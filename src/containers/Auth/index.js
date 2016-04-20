import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/auth';

const renderAuthorized = (token) => {
    return (
        <section>
            <h1>Authorized!</h1>
            <p>token: {token}</p>
        </section>
    );
};

const renderUnauthorized = () => {
    return (
        <section>
            <h1>Unauthorized</h1>
        </section>
    );
};

@connect(
    (state) => state.auth,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Auth extends Component {
    static propTypes = {
        token: React.PropTypes.string
    };

    render() {
        const { token } = this.props;
        const isAuthorized = Boolean(token);

        return isAuthorized ? renderAuthorized(token) : renderUnauthorized();
    }
}
