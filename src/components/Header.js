import React from 'react';
import { browserHistory } from 'react-router';

import Dropdown from './Dropdown';
import images from '../utils/images';

import './styles/Header.less';

const Header = () => {
  const mockOptions = [{
    id: '1',
    name: 'Cachoeirinha',
  }, {
    id: '2',
    name: 'Porto Alegre',
  }, {
    id: '31',
    name: 'Gravataí',
  }];

  return (
    <div className="wrapper">
      <div className="container">
        <div className="left-container">
          <img
            className="logo"
            src={images.city_logo}
            alt="Logotipo da cidade de Gravataí"
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
          <a href="https://github.com/sentinela" rel="noopener noreferrer" target="_blank">
            <img className="logo" src={images.logo} alt="Logotipo do projeto Sentinela" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
