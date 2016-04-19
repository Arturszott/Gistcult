import React, { Component } from 'react';

const renderAuthorized = (token) => {
    return (
        <section>
            <h1>Authorized</h1>
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

export class Auth extends Component {
    render() {
        const isAuthorized = Boolean(this.props.location.query.code);
        const welcomeMessage = isAuthorized ? renderAuthorized(this.props.location.query.code) : renderUnauthorized();

        return welcomeMessage
    }
}
