import axios from '../axios-orders';

// eslint-disable-next-line import/prefer-default-export
export const getIngredientsWithPrice = () => axios.get('/ingredient-prices.json');
