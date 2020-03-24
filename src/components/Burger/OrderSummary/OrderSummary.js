import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

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
      <Button onClick={props.onCancel} buttonType="Danger">
        CANCEL
      </Button>
      <Button onClick={() => alert('wow you did it!')} buttonType="Success">
        CONTINUE
      </Button>
    </>
  );
};

export default orderSummary;

orderSummary.propTypes = {
  ingredients: PropTypes.instanceOf(BurgerIngredient).isRequired,
  totalPrice: PropTypes.number.isRequired,
  onCancel: PropTypes.func.isRequired
};
