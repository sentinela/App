import React from 'react';
import { browserHistory } from 'react-router';

import Dropdown from './Dropdown';
import images from '../utils/images';

import './styles/Header.less';

const Header = () => {
  const mockOptions = [{
    id: '1',
    name: 'São Paulo',
  }, {
    id: '2',
    name: 'Porto Alegre',
  }, {
    id: '3',
    name: 'Fictícia',
  }];

  return (
    <div className="wrapper">
      <div className="container">
        <div className="left-container">
          <img
            className="logo"
            src={images.city_logo}
            alt="Logotipo da cidade de Fictícia"
            onClick={() => browserHistory.push('/')}
          />
          <div className="city-info">
            <Dropdown
              data={mockOptions}
              selected={{ id: '3' }}
              onSelect={e => console.log('Selected city', e.target.textContent)}
            />
          </div>
        </div>

        <div className="right-container">
          <span className="info-container"><b>Atenção!</b> Esta página é uma demonstração. <br />Todas as informações são fictícias!</span>
          <a href="https://github.com/sentinela" rel="noopener noreferrer" target="_blank">
            <img className="logo" src={images.logo} alt="Logotipo do projeto Sentinela" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
