import React, { Component, PropTypes } from 'react';

import Fetch from '../components/Fetch';
import Spinner from '../components/Spinner';
import DailyValueTotal from '../components/DailyValueTotal';
import CardsWrapper from '../components/CardsWrapper';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Api from '../utils/api';

import './styles/DailyRate.less';

class DailyRate extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      shouldFetch: true,
    };
  }

  addComplaint = (data) => {
    new Api().post('/Complaint', data)
      .then(() => this.setState({ shouldFetch: true }))
      .catch(err => this.setState({ err }));
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

            const dailyValues = data[0];

            return (
              <div>
                <Header />
                <div className="container">
                  <DailyValueTotal data={dailyValues} />
                  <div className="col-12">
                    <CardsWrapper />
                  </div>
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

export default DailyRate;
