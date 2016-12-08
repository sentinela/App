import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Main from './containers/Main';

export default (
  <Route path="/" component={Main}>
    <Route path="/app" component={App} />
  </Route>
);
