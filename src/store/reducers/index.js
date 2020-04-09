import { combineReducers } from 'redux';
import ingredient from './ingredientReducer';
import order from './orderReducer';

const rootReducer = combineReducers({ ingredient, order });

export default rootReducer;
