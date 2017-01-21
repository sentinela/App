import React, { Component, PropTypes } from 'react';

import Fetch from '../components/Fetch';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';
import Header from '../components/Header';

import './styles/App.less';
import './styles/fluidable.less';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props);
    this.state = {
      shouldFetch: true,
    };
  }

  render() {
    const st = this.state;
    return (
      <div>
        <Fetch
          shouldFetch={st.shouldFetch}
          onResponse={() => this.setState({ shouldFetch: false })}
          urls={['/dailyValues']}
        >
          {({ data, fetching }) => {
            if (fetching || !data) {
              return (
                <div style={{ marginTop: '40px' }}>
                  <Spinner />
                </div>
              );
            }

            return (
              <div>
                <Header />
                <div className="container">
                  Aqui viria os cards inicializadores
                </div>
                <Footer />
              </div>
            );
          }}
        </Fetch>
      </div>
    );
  }
}

export default App;
