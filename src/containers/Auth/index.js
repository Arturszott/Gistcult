import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/auth';

const renderAuthorized = () => {
    return (
        <section>
            <h1>Authorized</h1>
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
    (state) => {
        return state.auth;
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Auth extends Component {
    static propTypes = {
        isAuthorized: React.PropTypes.bool.isRequired
    };

    render() {
        const { isAuthorized } = this.props;

        return isAuthorized ? renderAuthorized() : renderUnauthorized();
    }
}
