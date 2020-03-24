import React from 'react';

import './Button.css';
import PropTypes from 'prop-types';

const button = props => {
  return (
    <button
      className={['Button', props.buttonType].join(' ')}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default button;

button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
