import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.css';

const backdrop = ({ show, onClick }) => (show ? (
    <div className="Backdrop" onClick={onClick}>
      {' '}
    </div>
) : null);

export default backdrop;

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
