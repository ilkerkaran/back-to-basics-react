import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import NavItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigaitonItems = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);

  const securedNavItems = (
    <>
    <NavItem link="/burgerbuilder">
      Burger Builder
    </NavItem>
    <NavItem link="/orders">Orders</NavItem>
    <NavItem link="/logout">Logout</NavItem></>);

  const anonymousNavItems = (
    <>
      <NavItem link="/burgerbuilder">
        Burger Builder
      </NavItem>
      <NavItem link="/signin">Sign In</NavItem>
      <NavItem link="/signup">Sign Up</NavItem></>);


  return (
    <ul className="NavigationItems">
    {isAuthenticated ? securedNavItems : anonymousNavItems}
    </ul>
  );
};

export default navigaitonItems;

navigaitonItems.propTypes = {
  isAuthenticated: PropTypes.bool

};
