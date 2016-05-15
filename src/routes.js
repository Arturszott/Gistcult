import React from 'react';
import { Route, IndexRoute } from 'react-router';
import actions from './actions/auth';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import Auth from 'containers/Auth/index';

export default (store) => {
    const storage = window.localStorage;

    const loadGists = ({ location }, replace, next) => {
        const token = storage.getItem('access_token') ||  location.query.token;

        if (token) {
            storage.setItem('access_token', token);
        }

        if (token) {
            store.dispatch(actions.updateToken(token));
            store.dispatch(actions.fetchGists(token, next));
        } else {
            replace('/');
            next();
        }
    };

    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="dashboard" component={Auth} onEnter={loadGists}/>
        </Route>
    );
}
