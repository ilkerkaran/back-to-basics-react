import React, { Component } from 'react';

import './Modal.css';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextprops) {
    return nextprops.show !== this.props.show;
  }

  render() {
    return (
      <>
        <Backdrop
          show={this.props.show}
          onClick={this.props.cancelPurchasing}
        />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
export default Modal;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  cancelPurchasing: PropTypes.func.isRequired
};
