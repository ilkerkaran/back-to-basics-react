import React from 'react';
import PropTypes from 'prop-types';
import { inputConfigTypes } from '../../../../propTypes/types';

const email = ({ className, inputConfig }) => (<div className={className}>
  <input type="email"
    className="Input"
    placeholder={inputConfig.label}
    onChange={inputConfig.onChange}
    name={inputConfig.inputName}
    ref={inputConfig.register({
      required: `${inputConfig.label} is required`,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'invalid email address'
      }
    })}/>
    <div style={{ color: 'darkred' }}>
    {inputConfig.errors[inputConfig.inputName] && inputConfig.errors[inputConfig.inputName].message}
    </div>
</div>);

export default email;

email.propTypes = {
  className: PropTypes.string,
  ...inputConfigTypes
};
