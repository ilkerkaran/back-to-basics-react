import React from 'react';
import PropTypes from 'prop-types';
import { inputConfigTypes } from '../../../../propTypes/types';

const number = ({ className, inputConfig }) => (<div className={className}>
  <input type="number" className="Number" placeholder={inputConfig.label} onChange={inputConfig.onChange}
    name={inputConfig.inputName}
    ref={inputConfig.isReqired ? inputConfig.register({ required: `${inputConfig.label} is required` }) : inputConfig.register}
    />
    <div style={{ color: 'darkred' }}>
    {inputConfig.errors[inputConfig.inputName]
      && inputConfig.errors[inputConfig.inputName].message}
    </div>
</div>);

export default number;

number.propTypes = {
  className: PropTypes.string,
  ...inputConfigTypes
};
