import React from 'react';
import './NavigationItems.css';
import NavItem from './NavigationItem/NavigationItem';

const navigaitonItems = () => (
  <ul className="NavigationItems">
    <NavItem link="/burgerbuilder">
      Burger Builder
    </NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </ul>
);

export default navigaitonItems;
