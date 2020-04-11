/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes';
import {
  signIn as signInRequest,
  signUp as signUpRequest
} from '../../services/authService';
import { getIngredientsWithPrice } from '../../services/ingredientsService';


export const initIngredients = () => ({ type: actionTypes.INIT_INGREDIENTS });

export const addIngredient = (ingredientType) => ({
  type: actionTypes.ADD_INGREDIENT,
  payload: { ingredientType }
});

export const removeIngredient = (ingredientType) => ({
  type: actionTypes.REMOVE_INGREDIENT,
  payload: { ingredientType }
});


export const signInStart = () => ({
  type: actionTypes.SIGNIN_START
});

export const signInSuccess = (token, expiresIn) => ({
  type: actionTypes.SIGNIN_SUCCESS,
  payload: { token, expiresIn }
});
export const signInFail = (error) => ({
  type: actionTypes.SIGNIN_FAIL,
  payload: { error }
});

export const signIn = (username, password) => (dispatch) => {
  dispatch(signInStart());
  signInRequest(username, password).then((response) => {
    console.log('signIn Response: ', response);
    dispatch(signInSuccess());
  }).catch((err) => {
    console.log('err', err);

    dispatch(signInFail(err));
  });
};

export const signUpStart = () => ({
  type: actionTypes.SIGNUP_START
});

export const signUpSuccess = (token, expiresIn) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: { token, expiresIn }
});
export const signUpFail = (error) => ({
  type: actionTypes.SIGNUP_FAIL,
  payload: { error }
});

export const signUp = (username, password) => (dispatch) => {
  dispatch(signUpStart());
  signUpRequest(username, password).then((response) => {
    console.log('signIn Response: ', response);
    dispatch(signUpSuccess());
  }).catch((err) => dispatch(signUpFail(err.response.data.error.message)));
};


export const logout = () => ({
  type: actionTypes.LOGOUT
});

const getIngredientsPricesStart = () => ({
  type: actionTypes.GET_INGREDIENT_PRICES_START
});

const getIngredientsPricesSuccess = (ingredientPrices) => ({
  type: actionTypes.GET_INGREDIENT_PRICES_SUCCESS,
  payload: { ingredientPrices }
});

const getIngredientsPricesFail = (error) => ({
  type: actionTypes.GET_INGREDIENT_PRICES_FAIL,
  payload: { error }
});

export const getIngredientsPrices = () => (dispatch) => {
  dispatch(getIngredientsPricesStart());
  return getIngredientsWithPrice()
    .then((response) => {
      console.log('response', response);
      dispatch(getIngredientsPricesSuccess(response));
    })
    .catch((err) => { dispatch(getIngredientsPricesFail(err)); });
};
