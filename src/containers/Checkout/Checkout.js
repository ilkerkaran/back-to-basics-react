import React, { useState, useEffect } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { routerTypes } from '../../propTypes/types';
import { getIngredientsWithPrice } from '../../services/ingredientsService';


const checkout = (props) => {
  console.log('checkout.props', props);
  const [ingredients, setIngredients] = useState([]);

  useEffect(async () => {
    const { ingredients: ingredientsRes } = await getIngredientsWithPrice(0);
    setIngredients(ingredientsRes);
  }, []);


  return (<><div>
  <CheckoutSummary ingredients={ingredients} />
  </div></>);
};

export default checkout;

checkout.propTypes = {
  ...routerTypes
};
