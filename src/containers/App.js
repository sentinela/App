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

    const cards = [{
      id: 1,
      title: 'Diárias',
      to: '/dailyrates',
      subtitle: 'Acompanhe detalhadamente os gastos com diárias, através do nome do beneficiado e as datas',
      leftStat: {
        value: 'R$ 2.000,00',
        label: 'Média mensal',
      },
      rightStat: {
        value: 'R$ 5.000,00',
        label: 'Total anual',
      },
      icon: 'airplane',
      observacao: 'Estes dados são fictícios e não refletem ao gasto de Fictícia',
    }, {
      id: 2,
      title: 'Licitações',
      to: '/bids',
      subtitle: `Visualize todas as modalidades, tipos de pregão, tipo do objeto.
      Filtre por entidade, situação e veja os documentos anexados.`,
      leftStat: {
        value: 'R$ 20.000,00',
        label: 'Média mensal',
      },
      rightStat: {
        value: 'R$ 2 mi',
        label: 'Total anual',
      },
      icon: 'checklist',
      observacao: 'Estes dados são fictícios e não refletem ao gasto de Fictícia',
    }, {
      id: 3,
      title: 'Compras',
      to: '/acquirements',
      subtitle: 'Veja o que a Câmara de Vereadores e a Prefeitura andam comprando e por quanto.',
      leftStat: {
        value: 'R$ 1.700,00',
        label: 'Média mensal',
      },
      rightStat: {
        value: 'R$ 14.000,00',
        label: 'Total anual',
      },
      icon: 'cart',
      observacao: 'Estes dados são fictícios e não refletem ao gasto de Fictícia',
    }];

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
                    {cards.map(c => <NavigationCard data={c} to={c.to} />)}
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
