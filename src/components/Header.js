import React, { PropTypes } from 'react';
import images from '../utils/images';
import './styles/Header.less';

const Header = (props) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="left-container">
          <img className="logo" src={images.logo} alt="Logo" />
          <span className="title">{props.title}</span>
        </div>
        <div className="right-container">
          <span className="username">{props.userName}</span>
          <img className="avatar" src={images.userAvatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Header;
