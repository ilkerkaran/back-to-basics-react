import * as actionTypes from '../actions/actionTypes';

const initialState = {};

const ingredientPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INGREDIENT_PRICES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_INGREDIENT_PRICES_SUCCESS:
      return {
        ...state,
        ingredientPrices: action.payload.ingredientPrices,
        loading: false
      };
    case actionTypes.GET_INGREDIENT_PRICES_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
};

export default ingredientPriceReducer;
