import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  expiresIn: null,
  username: null,
  loading: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START:
    case actionTypes.SIGNIN_START:
      return { ...state, loading: true };
    case actionTypes.SIGNUP_SUCCESS:
    case actionTypes.SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('expiresIn', action.payload.expiresIn);
      localStorage.setItem('username', action.payload.username);
      return {
        ...state,
        token: action.payload.token,
        expiresIn: action.payload.expiresIn,
        username: action.payload.username,
        loading: false
      };
    case actionTypes.SIGNUP_FAIL:
    case actionTypes.SIGNIN_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    case actionTypes.LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
      localStorage.removeItem('username');
      return initialState;
    default:
      return state;
  }
};


export default authReducer;
