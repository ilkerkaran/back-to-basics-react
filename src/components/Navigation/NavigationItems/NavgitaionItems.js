import React from 'react';
import './NavigationItems.css';
import NavItem from './NavigationItem/NavigationItem';

const navigaitonItems = () => (
  <ul className="NavigationItems">
    <NavItem linkname="/burgerbuilder" active>
      Burger Builder
    </NavItem>
    <NavItem linkname="/checkout">Checkout</NavItem>
  </ul>
);

export default navigaitonItems;
