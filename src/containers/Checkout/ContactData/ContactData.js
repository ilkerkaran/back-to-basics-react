import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

const contactData = (props) => {
  const { loading } = props;
  const onOrderClick = () => {
    // TODO: get details from form
    props.onOrderClick({
      name: 'ilker',
      address: 'Newbury',
      email: 'ilker@gmail.com',
      postal: 'RG14 1BF'
    });
  };

  return (loading ? <Spinner /> : (
    <div className="ContactData">
    <h4>Please fill your details!</h4>
      <form>
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="address"/>
        <input type="text" placeholder="postal"/>
        <Button buttonType="Success" onClick={onOrderClick}>ORDER!</Button>
      </form>
    </div>)
  );
};


export default contactData;

contactData.propTypes = {
  onOrderClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
