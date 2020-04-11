import * as actionTypes from '../actions/actionTypes';

const INITIAL_INGREDIENTDS = {
  bacon: 0,
  salad: 0,
  cheese: 0,
  meat: 1
};
const initialState = {
  ingredients: {
    bacon: 0,
    salad: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 0,
  loading: false
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_INGREDIENTS:
      return {
        ...state,
        ingredients: INITIAL_INGREDIENTDS,
        totalPrice: 4,
        loading: false
      };
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientType]: state.ingredients[action.payload.ingredientType] + 1
        },
        totalPrice: state.totalPrice + action.ingredientPrices[action.payload.ingredientType]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientType]: state.ingredients[action.payload.ingredientType] - 1
        },
        totalPrice: state.totalPrice - action.ingredientPrices[action.payload.ingredientType]
      };
    default:
      return state;
  }
};

export default ingredientReducer;
