import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { updateAuthStatus } from './actions/auth';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Auth } from 'containers/Auth';

const extractCode = (store, nextState, replace, next) => {
    const query = nextState.location.query;

    if (query.code) {
        store.dispatch(updateAuthStatus(true));
    }

    next();
};

export default (store) => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="auth" component={Auth} onEnter={extractCode.bind(null, store)}/>
        </Route>
    );
}
