
export const getIngredientsWithPrice = async (axios, currentTotalPrice) => {
  try {
    const { data: priceData } = await axios.get('/ingredient-prices.json');
    const { data: initialIngredients } = await axios.get('/ingredients.json');

    const total = Object.keys(initialIngredients)
      .reduce((init, type) => init + initialIngredients[type] * priceData[type], currentTotalPrice || 0);
    return {
      ingredientPrices: { ...priceData },
      ingredients: { ...initialIngredients },
      totalPrice: total
    };
  } catch (err) {
    console.log('error while executing getIngredientsWithPrice; ', err);
  }
  return {};
};

export const postOrder = async (axios, order) => axios.post('/orders.json', order);

export const getOrders = async (axios) => axios.get('/orders.json');
