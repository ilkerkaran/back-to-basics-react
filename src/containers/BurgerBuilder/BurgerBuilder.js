import React, { useEffect, useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import { getIngredientsWithPrice } from '../../services/ingredientsService';
import { routerTypes } from '../../propTypes/types';


const burgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({});
  const [ingredientPrices, setIngredientPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isOrderprocessing, setIsOrderprocessing] = useState(false);

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const continuePurchaseHandler = () => {
    const { history } = props;
    history.push({
      pathname: '/checkout',
      state: ingredients
    });

    // setIsOrderprocessing(true);
    // const order = { ...this.state, name: 'John', address: { country: 'UK' } };
    // postOrder(order)
    //   .then((response) => {
    //     console.log('orders-response: ', response);
    //     setPurchasing(false);
    //   })
    //   .catch((err) => console.log('orders-err: ', err))
    //   .finally(() => {
    //     setIsOrderprocessing(false);
    //   });
  };

  const cancelPurchaseHandler = () => {
    setPurchasing(false);
  };

  const addIngredientHandler = (type) => {
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] += 1;

    setIngredients(updatedIngredients);
    setPurchasable(updatedIngredients.meat > 0);
    setTotalPrice(totalPrice + ingredientPrices[type]);
  };

  const removeIngredientHandler = (type) => {
    const updatedIngredients = { ...ingredients };
    if (updatedIngredients[type] > 0) {
      updatedIngredients[type] -= 1;

      setIngredients(updatedIngredients);
      setPurchasable(updatedIngredients.meat > 0);
      setTotalPrice(totalPrice - ingredientPrices[type]);
    }
  };


  useEffect(() => {
    (async () => {
      const {
        ingredients: newIngredients,
        ingredientPrices: newIngredientPrices,
        totalPrice: newTotalPrice
      } = await getIngredientsWithPrice(totalPrice);
      setIngredients(newIngredients);
      setIngredientPrices(newIngredientPrices);
      setTotalPrice(newTotalPrice);
      setPurchasable(ingredients.meat > 0);
    })();
  }, []);

  return (
    <>
      <Modal show={purchasing} onClose={cancelPurchaseHandler}>
        {isOrderprocessing ? <Spinner />
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


export default withErrorHandler(burgerBuilder, axios);

burgerBuilder.propTypes = {
  ...routerTypes
};
