import React from 'react';
import { Route, IndexRoute } from 'react-router';
import actions from './actions/auth';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import Auth from 'containers/Auth/index';

const storage = window.localStorage;

export default (store) => {
    const loadGists = (nextState, replace, next) => {
        const { token } = nextState.location.query;

        console.log(nextState);

        if (token) {
            storage.setItem('access_token', token);
            store.dispatch(actions.updateToken(token));
            store.dispatch(actions.fetchGists(token, next));
        }
    };

    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="dashboard" component={Auth} onEnter={loadGists}/>
        </Route>
    );
}
