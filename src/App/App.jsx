import React, { PropTypes } from 'react';
import './App.scss';

const App = (props) => (
  <div className="app-wrapper ws-bg-light">{props.children}</div>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
