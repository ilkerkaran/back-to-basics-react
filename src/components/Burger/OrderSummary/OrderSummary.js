import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        {igKey} : {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <strong>Price: {props.totalPrice}</strong>
      <p>Continue to checkout?</p>
      <Button buttonType="Danger">CANCEL</Button>
      <Button buttonType="Success">CONTINUE</Button>
    </>
  );
};

export default orderSummary;

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired
};
