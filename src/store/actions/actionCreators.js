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

export const signInSuccess = (username, token, expiresAt) => ({
  type: actionTypes.SIGNIN_SUCCESS,
  payload: { username, token, expiresAt }
});
export const signInFail = (error) => ({
  type: actionTypes.SIGNIN_FAIL,
  payload: { error }
});

export const signIn = (username, password) => (dispatch) => {
  dispatch(signInStart());
  return signInRequest(username, password).then((response) => {
    dispatch(signInSuccess(username, response.data.idToken, new Date(new Date().getTime() + response.data.expiresIn * 1000)));
  }).catch((err) => {
    dispatch(signInFail(err));
  });
};

export const signUpStart = () => ({
  type: actionTypes.SIGNUP_START
});

export const signUpSuccess = (username, token, expiresAt) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: { username, token, expiresAt }
});
export const signUpFail = (error) => ({
  type: actionTypes.SIGNUP_FAIL,
  payload: { error }
});

export const signUp = (username, password) => (dispatch) => {
  dispatch(signUpStart());
  return signUpRequest(username, password).then((response) => {
    dispatch(signUpSuccess(username, response.data.idToken, new Date(new Date().getTime() + response.data.expiresIn * 1000)));
  }).catch((err) => dispatch(signUpFail(err.response.data.error.message)));
};


export const logout = () => ({
  type: actionTypes.LOGOUT
});

export const checkIsAuthenticated = (currentRoute) => (dispatch) => {
  const expiresAt = localStorage.getItem('expiresAt');
  const now = new Date();
  if (expiresAt && (new Date(expiresAt) > new Date(now))) {
    dispatch(validateUser());
  } else {
    dispatch(invalidateUser(currentRoute || '/'));
  }
};

export const validateUser = () => ({
  type: actionTypes.VALIDATE_USER
});

export const invalidateUser = (currentRoute) => ({
  type: actionTypes.INVALIDATE_USER,
  payload: { redirectAfterSignin: currentRoute }
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
      dispatch(getIngredientsPricesSuccess(response.data));
    })
    .catch((err) => { dispatch(getIngredientsPricesFail(err)); });
};
