import React from 'react';
import PropTypes from 'prop-types';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Form from '../../../components/UI/Form/Form';

const contactData = (props) => {
  const { loading } = props;
  const onOrderClick = (formData) => {
    console.log('formData', formData);
    // TODO: get details from form
    props.onOrderClick(formData);
  };


  // inputType: PropTypes.oneOf(inputTypes),
  // inputName: PropTypes.string.isRequired,
  // isRequired: PropTypes.bool,
  // label: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  // value: PropTypes.string,
  // options: PropTypes.arrayOf(PropTypes.shape(selectOptionTypes)),
  // register: PropTypes.func

  const formInputConfig = [{
    inputType: 'text',
    inputName: 'name',
    label: 'Full Name',
    isRequired: true
  },
  {
    inputType: 'email',
    inputName: 'email',
    label: 'Email Address',
    isRequired: true
  },
  {
    inputType: 'text',
    inputName: 'address',
    label: 'Town'
  },
  {
    inputType: 'text',
    inputName: 'postCode',
    label: 'Post Code',
    isRequired: true
  }, {
    inputType: 'select',
    inputName: 'paymentType',
    label: 'Please select a Payment Type',
    // value: 'cash',
    isRequired: true,
    options: [{
      id: 'creditCard',
      value: 'Credit/Debit Card'
    }, {
      id: 'cash',
      value: 'Cash'
    }]
  }];


  return (loading ? <Spinner /> : (
    <div className="ContactData">

      <Form title="Please fill your details!" inputConfigs={formInputConfig} onSubmit={onOrderClick} />
      <br />
    </div>)
  );
};


export default contactData;

contactData.propTypes = {
  onOrderClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
