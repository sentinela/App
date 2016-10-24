import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App/App';
import Home from './Home/Home';
import Perfil from './Perfil/Perfil';
import configureStore from './store';
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/perfil" component={Perfil} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
