import React from 'react';
import './NavigationItems.css';
import NavItem from './NavigationItem/NavigationItem';

const navigaitonItems = () => (
  <ul className="NavigationItems">
    <NavItem linkname="/" active>
      Burger Builder
    </NavItem>
    <NavItem linkname="/">Checkout</NavItem>
  </ul>
);

export default navigaitonItems;
