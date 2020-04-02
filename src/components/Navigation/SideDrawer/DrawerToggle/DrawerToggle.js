import React from 'react';
import PropTypes from 'prop-types';
import './DrawerToggle.css';

const drawerToggle = (props) => (
  <div className="DrawerToggle" onClick={props.onClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;

drawerToggle.propTypes = {
  onClick: PropTypes.func
};
