import React from 'react';

import './Modal.css';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';


const modal = ({ show, onClose, children }) => (
  <>
    <Backdrop
      show={show}
      onClick={onClose}
    />
    <div
      className="Modal"
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      {children}
    </div>
  </>
);

export default modal;

modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
