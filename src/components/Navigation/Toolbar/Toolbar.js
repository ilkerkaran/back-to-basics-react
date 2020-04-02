import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo/Logo';
import './Toolbar.css';
import NavigaitonItems from '../NavigationItems/NavgitaionItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className="Toolbar">
    <DrawerToggle onClick={props.onDrawerToggleClick} />
    <div className="toolbar-logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigaitonItems />
    </nav>
  </header>
);

export default toolbar;

toolbar.propTypes = {
  onDrawerToggleClick: PropTypes.func
};
