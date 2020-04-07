import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { inputConfigsTypes } from '../../../propTypes/types';
import Select from './FormInputs/FormSelectInput/FormSelectInput';
import Button from '../Button/Button';

const form = ({ onSubmit, inputConfigs }) => {
  const { register, handleSubmit } = useForm();


  const onSubmitHandler = (data) => {
    console.log(data);
    onSubmit(data);
  };
  const formInputs = inputConfigs.map((conf) => {
    switch (conf.inputType) {
      case 'text':
        return null;
      case 'number':
        return null;
      case 'select':
        return (<Select key={conf.inputName} inputConfig={{ ...conf, register }}/>);
      case 'textArea':
        return null;
      default:
        return null;
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
    {formInputs}
      <Button inputType="submit" buttonType="Success">Order!</Button>
    </form>
  );
};

export default form;

form.propTypes = {
  ...inputConfigsTypes,
  onSubmit: PropTypes.func.isRequired
};
