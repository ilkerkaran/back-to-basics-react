import React from 'react';
import PropTypes from 'prop-types';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigaitonItems from '../NavigationItems/NavgitaionItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {
  const sideDrawerClass = `SideDrawer ${props.open ? 'Open' : 'Close'}`;
  return (
    <>
      <Backdrop show={props.open} onClick={props.onBackdropClick} />
      <div className={sideDrawerClass}>
        <div className="side-drawer-logo">
          <Logo />
        </div>
        <nav>
          <NavigaitonItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;

sideDrawer.propTypes = {
  open: PropTypes.bool,
  onBackdropClick: PropTypes.func
};
