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
    props.onOrderClick({
      name: 'ilker',
      address: 'Newbury',
      email: 'ilker@gmail.com',
      postal: 'RG14 1BF'
    });
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
    inputType: 'select',
    inputName: 'paymentType',
    label: 'Payment Type',
    value: 'cash',
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
    <h4>Please fill your details!</h4>
    <Form inputConfigs={formInputConfig} onSubmit={onOrderClick}/>
     {/*   <form>
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="address"/>
        <input type="text" placeholder="postal"/>
        <Button buttonType="Success" onClick={onOrderClick}>ORDER!</Button>
     </form> */}
    </div>)
  );
};


export default contactData;

contactData.propTypes = {
  onOrderClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
