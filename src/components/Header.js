import React from 'react';
import images from '../utils/images';
import './styles/Header.less';

const Header = (props) => {
  const alertSign = () => alert('Em breve você poderá visualizar outras cidades!');
  return (
    <div className="wrapper">
      <div className="container">
        <div className="left-container">
          <img className="logo" src={images.city_logo} alt="Logo da cidade de Gravataí" />
          <div className="city-info">
            <span className="title">Gravataí</span>
            <span onClick={alertSign} className="">Visualizar outra cidade</span>
          </div>
        </div>
        <div className="right-container">
          <img className="logo" src={images.logo} alt="Logo do projeto Sentinela" />
        </div>
      </div>
    </div>
  );
};

export default Header;
