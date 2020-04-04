// display preview of the burger we have and continnue button

import React from 'react';
import './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import { ingredientTypes } from '../../../propTypes/types';

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
    <h1>We hope you enjoy your meal!&#128523;</h1>
      <Burger ingredients={ingredients}/>
      <div className="CheckoutSummaryButtons">
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
  ...ingredientTypes
};
