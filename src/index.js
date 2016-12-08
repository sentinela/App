import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const reactRoot = document.getElementById('root');

if (process.env.NODE_ENV !== 'development') {
  render(
    <Root store={store} history={history} />,
    reactRoot
  );
} else {
  const reactHotLoader = require('react-hot-loader');

  render(
    <reactHotLoader.AppContainer>
      <Root store={store} history={history} />
    </reactHotLoader.AppContainer>,
    reactRoot
  );

  if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      const NextApp = require('./containers/Root').default;

      render(
        <reactHotLoader.AppContainer>
          <NextApp store={store} history={history} />
        </reactHotLoader.AppContainer>,
        reactRoot
      );
    });
  }
}
