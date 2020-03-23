import React from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css';
import NavigaitonItems from '../NavigationItems/NavgitaionItems';

const toolbar = () => (
  <header className="Toolbar">
    <div>MENU!</div>
    <Logo />
    <nav>
      <NavigaitonItems />
    </nav>
  </header>
);

export default toolbar;
