import React, { Component, PropTypes } from 'react';

import Fetch from '../components/Fetch';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavigationCard from '../components/NavigationCard';

import './styles/App.less';
import './styles/fluidable.less';

class App extends Component {
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

  render() {
    const st = this.state;

    const mock = {
      title: 'Diárias',
      subtitle: 'Acompanhe detalhadamente os gastos com diárias, através do nome do beneficiado e as datas',
      leftStat: {
        value: 'R$ 2000,00',
        label: 'Média mensal',
      },
      rightStat: {
        value: 'R$ 5000,00',
        label: 'Total anual',
      },
      observacao: 'Estes dados são fictícios e não refletem ao gasto de Gravataí',
    };

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
                <div className="container sticky-footer">
                  <div className="navigation-card-container ">
                    <NavigationCard data={mock} to="/dailyrate" />
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

export default App;
