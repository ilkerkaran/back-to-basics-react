import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigaitonItems from '../NavigationItems/NavgitaionItems';

const sideDrawer = props => {
  console.log('hi!');
  return (
    <div className="SideDrawer">
      <Logo />
      <nav>
        <NavigaitonItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
