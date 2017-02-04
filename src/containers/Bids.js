import React, { Component } from 'react';

import Fetch from '../components/Fetch';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Api from '../utils/api';
import images from '../utils/images';

import './styles/Bids.less';

class Bids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldFetch: true,
    };
  }

  addComplaint = (data) => {
    new Api().post('/Example', data)
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

            // const bids = data[0];

            return (
              <div>
                <Header />
                <div className="container sticky-footer">
                  <div className="col-12 preview-content">
                    <div className="col-4">
                      <p>
                        Olá, a funcionalidade acessada está em construção, se você for uma pessoa
                        <b> desenvolvedora</b>, <b>jornalista</b>, <b>designer</b> ou queira ajudar de alguma
                        forma, entre em contato conosco e nos ajude no desenvolvimento deste projeto!
                      </p>
                      <p style={{ marginTop: '20px' }}>
                        <a href="https://github.com/sentinela/App">GitHub</a>: https://github.com/sentinela/App
                        Contato: sentinelaprojeto@gmail.com
                      </p>
                    </div>
                    <div className="col-5">
                      <p>Em Breve.</p>
                    </div>
                    <div className="col-3">
                      <a href="https://github.com/sentinela" rel="noopener noreferrer" target="_blank">
                        <img
                          style={{ cursor: 'pointer' }}
                          src={images.logo}
                          alt="Logotipo do projeto Sentinela"
                        />
                      </a>
                    </div>
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

export default Bids;
