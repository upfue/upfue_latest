import React from 'react';
import logo from '../assets/images/logo-dark.png';

const Logo = ({ size }) => {
  return <img src={logo} width={size} className="logo" />;
};

export default Logo;
