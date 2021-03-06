import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { routerTypes } from '../../propTypes/types';
import ContactData from './ContactData/ContactData';
import { postOrder } from '../../services/ordersService';
import axios from '../../axios-orders';

const checkout = () => {
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const history = useHistory();

  // global state
  const { ingredients, totalPrice } = useSelector((state) => state.ing);
  const onOrderClick = (contactData) => {
    setLoading(true);
    postOrder(axios, {
      ingredients,
      contactData,
      orderDate: new Date(),
      totalPrice
    }).then(() => {
      setLoading(false);
      setOrdered(true);
      history.push({
        pathname: '/'
      });
    }).catch(() => {
      setLoading(false);
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

export default checkout;

checkout.propTypes = {
  ...routerTypes
};
