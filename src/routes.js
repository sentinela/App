import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Main from './containers/Main';
import NotFoundPage from './containers/NotFoundPage';
import DailyRate from './containers/DailyRate';
import Bids from './containers/Bids';
import Acquirements from './containers/Acquirements';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={App} />
    <Route path="/DailyRates" component={DailyRate} />
    <Route path="/Bids" component={Bids} />
    <Route path="/Acquirements" component={Acquirements} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
