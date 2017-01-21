import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage';
import Main from './containers/Main';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={App} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
