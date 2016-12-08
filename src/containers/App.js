import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/App.less';
import './styles/fluidable.less';

class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node,
    auth: PropTypes.object,
  }

  componentWillMount() {
    // if (!this.props.auth.user) {
    //   browserHistory.push('/login');
    // }
    // browserHistory.push('/home');
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ // state, ownProps
  auth: state.auth,
});

export default connect(mapStateToProps, {
})(App);
