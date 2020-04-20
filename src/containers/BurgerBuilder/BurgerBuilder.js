import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import { routerTypes } from '../../propTypes/types';
import * as actions from '../../store/actions/actionCreators';

const burgerBuilder = ({
  loading
}) => {
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  // redux state
  const { ingredients, totalPrice } = useSelector((state) => state.ing);
  const isAuthenticated = useSelector((state) => !!state.auth.token);

  // redux dispatch
  const dispatch = useDispatch();
  const onAddIngredient = (ingredientType) => dispatch(actions.addIngredient(ingredientType));
  const onRemoveIngredient = (ingredientType) => dispatch(actions.removeIngredient(ingredientType));
  const initIngredients = () => dispatch(actions.initIngredients());
  const getIngredientPrices = () => dispatch(actions.getIngredientsPrices());
  const invalidateUser = (route) => dispatch(actions.invalidateUser(route));

  const history = useHistory();

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const continuePurchaseHandler = () => {
    if (isAuthenticated) {
      history.push({
        pathname: '/checkout'
      });
    } else {
      invalidateUser('/checkout');
      history.push({
        pathname: '/signin'
      });
    }
  };

  const cancelPurchaseHandler = () => {
    setPurchasing(false);
  };

  const addIngredientHandler = (type) => {
    onAddIngredient(type);
    setPurchasable(ingredients.meat > 0);
  };

  const removeIngredientHandler = (type) => {
    onRemoveIngredient(type);
    setPurchasable(ingredients.meat > 0);
  };


  useEffect(() => {
    initIngredients();
    getIngredientPrices();
    setPurchasable(ingredients.meat > 0);
  }, []);

  return (
    <>
      <Modal show={purchasing} onClose={cancelPurchaseHandler}>
        {loading ? <Spinner />
          : <OrderSummary
            onCancel={cancelPurchaseHandler}
            onContinue={continuePurchaseHandler}
            ingredients={ingredients}
            totalPrice={totalPrice}
          />}
      </Modal>
      <Burger ingredients={ingredients} />

      <BuildControls
        onLessClick={removeIngredientHandler}
        onMoreClick={addIngredientHandler}
        enabled={ingredients}
        currentPrice={totalPrice}
        purchasable={purchasable}
        onPurcaseClick={purchaseHandler}
      />
    </>
  );
};

export default (withErrorHandler(burgerBuilder, axios));

burgerBuilder.propTypes = {
  ...routerTypes
};
