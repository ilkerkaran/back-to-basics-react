// display preview of the burger we have and continnue button

import React from 'react';
import './CheckoutSummary.css';
import { PropTypes } from 'prop-types';
import Burger from '../../Burger/Burger';
import BurgerIngredient from '../../Burger/BurgerIngredient/BurgerIngredient';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
  const { ingredients } = props;

  const onCancelClick = () => {
    console.log('cancel clicked');
  };
  const onContinueClick = () => {
    console.log('continue clicked');
  };


  return (
    <>
    <div className ="CheckoutSummary">
      <Burger ingredients={ingredients}/>
      <div>
      <Button
        key="danger"
        buttonType="Danger"
        onClick={onCancelClick}>
          CANCEL
        </Button>
      <Button
        key="success"
        buttonType="Success"
        onClick={onContinueClick}>
          CONTINUE
      </Button>
    </div>
    </div>
    </>);
};


export default checkoutSummary;

checkoutSummary.propTypes = {
  ingredients: PropTypes.instanceOf(BurgerIngredient).isRequired
};
