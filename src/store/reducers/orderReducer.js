const INITIAL_INGREDIENTDS = {
  bacon: 0,
  salad: 0,
  cheese: 0,
  meat: 1
};

const initialState = {
  ingredients: INITIAL_INGREDIENTDS,
  totalPrice: 0,
  loading: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default orderReducer;
