import React from 'react';
import './NavigationItem.css';
import PropTypes from 'prop-types';

const navigationItem = (props) => (
  <li className="NavigationItem">
    <a className={props.active ? 'active' : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;

navigationItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string
};
