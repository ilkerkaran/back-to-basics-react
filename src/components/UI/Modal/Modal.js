import React, { PureComponent } from 'react';

import './Modal.css';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Backdrop
          show={this.props.show}
          onClick={this.props.onClose}
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
  onClose: PropTypes.func.isRequired
};
