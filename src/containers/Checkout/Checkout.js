import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { routerTypes } from '../../propTypes/types';
import ContactData from './ContactData/ContactData';
import { postOrder } from '../../services/ordersService';
import axios from '../../axios-orders';

const checkout = ({
  ingredients,
  totalPrice,
  history
}) => {
  console.log('checkout rendered');
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const onOrderClick = (contactData) => {
    setLoading(true);
    postOrder(axios, {
      ingredients,
      contactData,
      orderDate: new Date(),
      totalPrice
    }).then((response) => {
      console.log('postOrder result:', response);
      setLoading(false);
      setOrdered(true);
      history.push({
        pathname: '/'
      });
    }).catch((err) => {
      setLoading(false);
      console.log('err:', err);
    });
  };


  useEffect(() => {
    if (ordered) {
      history.push({
        pathname: '/burgerBuilder'
      });
    }
  }, [ordered]);


  const onCancelClick = () => {
    history.goBack();
  };
  const onContinueClick = () => {
    setConfirmed(true);
    history.push({
      pathname: '/checkout/contactData'
    });
  };

  const contactData = <ContactData
    loading={loading}
    onOrderClick={onOrderClick} />;
  const checkoutSummary = <CheckoutSummary
    confirmed={confirmed}
    onContinueClick={onContinueClick}
    onCancelClick={onCancelClick}
    ingredients={ingredients} />;

  return (
    <>
      {checkoutSummary}
      <Route path="/checkout/contactData" render={() => (contactData)} />
    </>
  );
};

const mapStateToProps = (state) => ({
  ingredients: state.ing.ingredients,
  totalPrice: state.ing.totalPrice,
  isPurchasing: state.isPurchasing
});

export default connect(mapStateToProps)(checkout);

checkout.propTypes = {
  ...routerTypes
};
