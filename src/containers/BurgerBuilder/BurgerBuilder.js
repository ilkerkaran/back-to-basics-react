import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
  ingredients,
  totalPrice,
  history,
  initIngredients,
  onAddIngredient,
  onRemoveIngredient,
  getIngredientPrices,
  loading,
  isAuthenticated,
  invalidateUser
}) => {
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

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

const mapStateToProps = (state) => ({
  ingredients: state.ing.ingredients,
  totalPrice: state.ing.totalPrice,
  isAuthenticated: !!state.auth.token
});

const mapDispatchToprops = (dispatch) => ({
  onAddIngredient: (ingredientType) => dispatch(actions.addIngredient(ingredientType)),
  onRemoveIngredient: (ingredientType) => dispatch(actions.removeIngredient(ingredientType)),
  initIngredients: () => dispatch(actions.initIngredients()),
  getIngredientPrices: () => dispatch(actions.getIngredientsPrices()),
  invalidateUser: (route) => dispatch(actions.invalidateUser(route))
});


export default connect(mapStateToProps, mapDispatchToprops)(withErrorHandler(burgerBuilder, axios));

burgerBuilder.propTypes = {
  ...routerTypes
};
