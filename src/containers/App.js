import React, { Component, PropTypes } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/App.less';
import BarChart from '../components/BarChart';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  componentWillMount() {
    // if (!this.props.auth.user) {
    //   browserHistory.push('/login');
    // }
    // browserHistory.push('/home');
  }

  render() {
    // const { children } = this.props;
    return (
      <div>
        <Header />
        <div className="col-12 home-chart">
          <BarChart />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
