import React from 'react';

import './Button.css';
import PropTypes from 'prop-types';

const button = ({
  inputType,
  buttonType,
  onClick,
  children
}) => (
    <button type={inputType}
      className={['Button', buttonType].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
);

export default button;

button.propTypes = {
  inputType: PropTypes.oneOf(['button', 'submit']),
  buttonType: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
