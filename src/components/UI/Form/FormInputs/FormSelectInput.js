import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { inputConfigTypes } from '../../../../propTypes/types';

const select = ({ className, inputConfig }) => {
  const [addDefaultValue, setAddDefaultValue] = useState(!inputConfig.value);
  const opt = inputConfig.options.map((o) => <option
    key={o.id}
    value={o.id}>
    {o.value}
  </option>);

  const onChange = (e) => {
    if (inputConfig.onChange) { inputConfig.onChange(e); }
    if (addDefaultValue) { setAddDefaultValue(false); }
  };

  return (<div className={className}>
    <select className="Input" defaultValue={inputConfig.value}
      onChange={onChange}
      name={inputConfig.inputName}
      ref={inputConfig.register({
        validate: (value) => {
          const validationRes = !inputConfig.isRequired || value.trim() !== '' || 'You must select an option!';
          return validationRes;
        }
      })}>
      {addDefaultValue ? [
        <option
        value = ''
    key="placeHolder"
    >
    {inputConfig.label}
  </option>,
        ...opt] : opt}
    </select>
    <div style={{ color: 'darkred' }}>
    {inputConfig.errors[inputConfig.inputName] && inputConfig.errors[inputConfig.inputName].message}
    </div>
  </div>);
};


export default select;

select.propTypes = {
  className: PropTypes.string,
  ...inputConfigTypes
};
