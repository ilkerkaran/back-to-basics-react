import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { routerTypes } from '../../propTypes/types';


const checkout = (props) => {
  const { location: { state } } = props;


  console.log('checkout.props', state);


  return (<><div>
  <CheckoutSummary ingredients={state} />
  </div></>);
};

export default checkout;

checkout.propTypes = {
  ...routerTypes
};
