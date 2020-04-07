import React from 'react';
import { inputConfigTypes } from '../../../../../propTypes/types';

const select = ({ inputConfig }) => {
  const opt = inputConfig.options.map((o) => <option
    key={o.id}
    value={o.id}>
    {o.value}
  </option>);


  return (<>
    <label htmlFor={inputConfig.inputName}>{inputConfig.label}</label>
    <select defaultValue={inputConfig.value}
      onChange={inputConfig.onChange}
      name={inputConfig.inputName}
      ref={inputConfig.register}>
      {opt}
    </select>
  </>);
};


export default select;

select.propTypes = {
  ...inputConfigTypes
};
