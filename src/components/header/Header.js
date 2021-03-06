import React from 'react';
import Icon from './Icon';
import LoginBar from './LoginBar';
import { header } from './header.module.scss';

const Header = () => {
  return (
    <header className={header}>
      <Icon />
      <LoginBar />
    </header>
  )
}


export default Header;
