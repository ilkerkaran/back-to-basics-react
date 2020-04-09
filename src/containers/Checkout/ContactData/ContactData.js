import React from 'react';
import PropTypes from 'prop-types';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Form from '../../../components/UI/Form/Form';

const contactData = (props) => {
  const { loading } = props;
  const onOrderClick = (formData) => {
    props.onOrderClick(formData);
  };


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
