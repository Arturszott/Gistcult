import React from 'react';
import { Route, IndexRoute } from 'react-router';

// actions
import updateToken from './actions/updateToken';
import fetchGists from './actions/fetchGists';
import updateGists from './actions/updateGists';

// containers
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import Auth from 'containers/Auth/index';

export default (store) => {
  const storage = window.localStorage;

  const loadGists = ({ location }, replace, next) => {
    const token = store.getState().auth.token;
    const tokenFromUrl = location.query.token;

    if (!token && tokenFromUrl) {
      store.dispatch(updateToken(token));
    }

    if (token || tokenFromUrl) {
      fetchGists(token).then((data) => {
          store.dispatch(updateGists(data));
          next();
      });
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
