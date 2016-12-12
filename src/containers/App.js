import React, { Component, PropTypes } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/App.less';
import './styles/fluidable.less';
import DailyValueTotal from '../components/DailyValueTotal';
import CardsContainer from '../components/CardsContainer';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <DailyValueTotal />
          <div className="col-12">
            <CardsContainer />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
