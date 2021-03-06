import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';
import { ingredientTypes } from '../../../propTypes/types';

const orderSummary = (props) => {
  const { ingredients } = props;
  if (ingredients) {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      {igKey} : {props.ingredients[igKey]}
    </li>
    ));
    return (
      <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <strong>Price: {props.totalPrice}</strong>
      <p>Continue to checkout?</p>
      <Button onClick={props.onCancel} buttonType="Danger">
        CANCEL
      </Button>
      <Button onClick={props.onContinue} buttonType="Success">
        CONTINUE
      </Button>
      </>
    );
  }
  return null;
};

export default orderSummary;

orderSummary.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  onCancel: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
  ...ingredientTypes
};
