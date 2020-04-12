import React from 'react';
import PropTypes from 'prop-types';
import './DrawerToggle.css';

const drawerToggle = ({ onClick }) => (
  <div className="DrawerToggle" onClick={onClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;

drawerToggle.propTypes = {
  onClick: PropTypes.func
};
