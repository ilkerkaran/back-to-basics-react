import React from 'react';
import PropTypes from 'prop-types';
import { inputConfigTypes } from '../../../../propTypes/types';

const text = ({ className, inputConfig }) => (<div className={className}>
  <input className="Input" type="text" placeholder={inputConfig.label} onChange={inputConfig.onChange}
    name={inputConfig.inputName}
    ref={inputConfig.isRequired ? inputConfig.register({ required: `${inputConfig.label} is required` }) : inputConfig.register} />
    <div style={{ color: 'darkred' }}>
    {inputConfig.errors[inputConfig.inputName] && inputConfig.errors[inputConfig.inputName].message}
    </div>
</div>);

export default text;

text.propTypes = {
  className: PropTypes.string,
  ...inputConfigTypes
};
