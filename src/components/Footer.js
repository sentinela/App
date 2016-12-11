import React from 'react';
import './styles/Footer.less';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <p>Feito com <span className="heart">❤</span> em </p>
        <a rel="noreferrer noopener" className="us" target="_blank" href="http://www.github.com/sentinela">@Sentinela</a>
      </div>
    </footer>
  );
};

export default Footer;
