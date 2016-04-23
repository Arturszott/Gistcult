import React from 'react';
import { Route, IndexRoute } from 'react-router';
import actions from './actions/auth';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Auth } from 'containers/Auth';

const storage = window.localStorage;
const callbacks = [
    actions.updateToken,
    actions.fetchGists
];

const retrieveToken = (store, nextState, replace, next) => {
    const { code } = nextState.location.query;

    if (code) {
        store.dispatch(actions.fetchToken(code, storage, callbacks, next));
    }
};

export default (store) => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="auth" component={Auth} onEnter={retrieveToken.bind(null, store)}/>
        </Route>
    );
}
