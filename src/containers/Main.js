import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import authActions from '../redux/authentication';
import './styles/Main.less';
import './styles/fluidable.less';

class Main extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node,
    authenticateWithToken: PropTypes.func.isRequired,
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

const mapStateToProps = () => ({ // state, ownProps
});

const mapDispatchToProps = dispatch => ({
  authenticateWithToken: () => dispatch(authActions.authenticateWithToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
