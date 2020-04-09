
import actionTypes from '../actions/actionTypes';

const INITIAL_INGREDIENTDS = {
  bacon: 0,
  salad: 0,
  cheese: 0,
  meat: 1
};

const initialState = {
  ingredientPrices: null,
  ingredients: {
    bacon: 0,
    salad: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 0,
  orders: [],
  loading: false,
  isPurchasing: false
};

const reducer = (state = initialState, action) => {
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
        totalPrice: state.totalPrice + state.ingredientPrices[action.payload.ingredientType]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientType]: state.ingredients[action.payload.ingredientType] - 1
        },
        totalPrice: state.totalPrice - state.ingredientPrices[action.payload.ingredientType]
      };
    case actionTypes.GET_INGREDIENT_PRICES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_INGREDIENT_PRICES_SUCCESS:
      console.log('payload', action.payload);
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


export default reducer;
