import React from 'react';

import './Modal.css';
import PropTypes from 'prop-types';
import Backdrop from './../Backdrop/Backdrop';

const modal = props => (
  <>
    <Backdrop show={props.show} cancelPurchasing={props.cancelPurchasing} />
    <div
      className="Modal"
      style={{
        transform: props.show ? 'translateX(0)' : 'translateX(-10000)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </>
);

export default modal;

modal.propTypes = {
  show: PropTypes.bool.isRequired,
  cancelPurchasing: PropTypes.func.isRequired
};
