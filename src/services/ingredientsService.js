import axios from '../axios-orders';

// eslint-disable-next-line import/prefer-default-export
export const getIngredientsWithPrice = async () => {
  try {
    const { data: priceData } = await axios.get('/ingredient-prices.json');
    return priceData;
  } catch (err) {
    console.log('error while executing getIngredientsWithPrice; ', err);
  }
  return {};
};
