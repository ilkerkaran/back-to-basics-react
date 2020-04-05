// display preview of the burger we have and continnue button

import React from 'react';
import './CheckoutSummary.css';
import PropTypes from 'prop-types';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import { ingredientTypes } from '../../../propTypes/types';

const checkoutSummary = (props) => {
  const {
    ingredients,
    onCancelClick,
    onContinueClick,
    confirmed
  } = props;


  const buttons = !confirmed ? (<div className="CheckoutSummaryButtons">
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
</div>) : null;
  return (
    <>
    <div className ="CheckoutSummary">
    <h1>We hope you enjoy your meal!&#128523;</h1>
      <Burger ingredients={ingredients}/>
      {buttons}
    </div>
    </>);
};


export default checkoutSummary;

checkoutSummary.propTypes = {
  ...ingredientTypes,
  onCancelClick: PropTypes.func.isRequired,
  onContinueClick: PropTypes.func.isRequired,
  confirmed: PropTypes.bool
};
