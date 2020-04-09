/* eslint-disable import/prefer-default-export */
import { getIngredientsWithPrice } from '../../services/ingredientsService';
import * as actionTypes from './actionTypes';


export const initIngredients = () => ({ type: actionTypes.INIT_INGREDIENTS });

export const addIngredient = (ingredientType) => ({ type: actionTypes.ADD_INGREDIENT, payload: { ingredientType } });

export const removeIngredient = (ingredientType) => ({ type: actionTypes.REMOVE_INGREDIENT, payload: { ingredientType } });


const getIngredientsPricesStart = () => ({ type: actionTypes.GET_INGREDIENT_PRICES_START });

const getIngredientsPricesSuccess = (ingredientPrices) => ({ type: actionTypes.GET_INGREDIENT_PRICES_SUCCESS, payload: { ingredientPrices } });

const getIngredientsPricesFail = (error) => ({ type: actionTypes.GET_INGREDIENT_PRICES_FAIL, payload: { error } });

export const getIngredientsPrices = () => (dispatch) => {
  dispatch(getIngredientsPricesStart());
  return getIngredientsWithPrice()
    .then((response) => {
      console.log('response', response);
      dispatch(getIngredientsPricesSuccess(response));
    })
    .catch((err) => { dispatch(getIngredientsPricesFail(err)); });
};
