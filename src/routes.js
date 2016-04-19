import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Auth } from 'containers/Auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="auth" component={Auth} />
  </Route>
);
