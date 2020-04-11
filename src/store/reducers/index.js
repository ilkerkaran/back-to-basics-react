
import ingredientReducer from './ingredientReducer';
import ingredientPriceReducer from './ingredientPriceReducer';
import authReducer from './authReducer';

const initialState = {
};

const reducer = (state = initialState, action) => ({
  ing: ingredientReducer(state.ing, {
    ...action,
    ingredientPrices: state.price && state.price.ingredientPrices
  }),
  price: ingredientPriceReducer(state.price, action),
  auth: authReducer(state.auth, action)
});


export default reducer;
