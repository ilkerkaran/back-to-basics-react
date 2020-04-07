import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { inputConfigsTypes } from '../../../propTypes/types';
import Select from './FormInputs/FormSelectInput';
import Text from './FormInputs/FormTextInput';
import Email from './FormInputs/FormEmailInput';
import Number from './FormInputs/FormNumberInput';
import TextArea from './FormInputs/FormTextAreaInput';
import Button from '../Button/Button';
import './Form.css';

const form = ({ title, onSubmit, inputConfigs }) => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur' });


  const onSubmitHandler = (data) => {
    console.log(data);
    onSubmit(data);
  };
  const formInputs = inputConfigs.map((conf) => {
    switch (conf.inputType) {
      case 'text':
        return (<Text className="Input Text" key={conf.inputName} inputConfig={{ ...conf, register, errors }}/>);
      case 'email':
        return (<Email className="Input Email" key={conf.inputName} inputConfig={{ ...conf, register, errors }}/>);
      case 'number':
        return (<Number className="Input Number" key={conf.inputName} inputConfig={{ ...conf, register, errors }}/>);
      case 'select':
        return (<Select className="Input Select" key={conf.inputName} inputConfig={{ ...conf, register, errors }}/>);
      case 'textArea':
        return (<TextArea className="Input TextArea" key={conf.inputName} inputConfig={{ ...conf, register, errors }}/>);
      default:
        return (<Text className="Input Text" key={conf.inputName} inputConfig={{ ...conf, register }}/>);
    }
  });

  return (
    <div className="Form">
    <h4>{title}</h4>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
    {formInputs}
      <Button inputType="submit" buttonType="Success">Order!</Button>
    </form>
    </div>
  );
};

export default form;

form.propTypes = {
  title: PropTypes.string,
  ...inputConfigsTypes,
  onSubmit: PropTypes.func.isRequired
};
