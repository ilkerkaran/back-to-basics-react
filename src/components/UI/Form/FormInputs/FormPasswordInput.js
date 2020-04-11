import React from 'react';
import PropTypes from 'prop-types';
import { inputConfigTypes } from '../../../../propTypes/types';

const email = ({ className, inputConfig }) => (<div className={className}>
  <input type="password"
    className="Input"
    placeholder={inputConfig.label}
    onChange={inputConfig.onChange}
    name={inputConfig.inputName}
    ref={inputConfig.isRequired ? inputConfig.register({
      required: `${inputConfig.label} is required`,
      pattern: {
        value: /[0-9a-zA-Z]{6,}/,
        message: 'invalid password'
      }
    }) : inputConfig.register({
      pattern: {
        value: /[0-9a-zA-Z]{6,}/,
        message: 'invalid password'
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
