import React from 'react';
import { Route, IndexRoute } from 'react-router';
import actions from './actions/auth';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Auth } from 'containers/Auth';

const validateCode = (store, nextState, replace, next) => {
    const query = nextState.location.query;

    if (query.code) {
        store.dispatch(actions.fetchToken(query.code, next));
    }
};

export default (store) => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="auth" component={Auth} onEnter={validateCode.bind(null, store)}/>
        </Route>
    );
}
