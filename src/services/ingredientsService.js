import axios from '../axios-orders';

export const getIngredientsWithPrice = async (currentTotalPrice) => {
  const { data: priceData } = await axios.get('/ingredient-prices.json');
  const { data: initialIngredients } = await axios.get('/ingredients.json');

  const total = Object.keys(initialIngredients)
    .reduce((init, type) => init + initialIngredients[type] * priceData[type], currentTotalPrice || 0);
  return {
    ingredientPrices: { ...priceData },
    ingredients: { ...initialIngredients },
    totalPrice: total
  };
};

export const postOrder = async (order) => axios.post('/orders.json', order);
