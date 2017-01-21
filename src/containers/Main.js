import React, { Component, PropTypes } from 'react';
import './styles/Main.less';
import './styles/fluidable.less';

class Main extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: {},
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Main;
