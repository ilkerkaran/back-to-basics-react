/* eslint-disable no-case-declarations */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  expiresAt: null,
  username: null,
  loading: false,
  error: null,
  redirectAfterSignin: '/burgerBuilder'
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START:
    case actionTypes.SIGNIN_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SIGNUP_SUCCESS:
    case actionTypes.SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('expiresAt', action.payload.expiresAt);
      localStorage.setItem('username', action.payload.username);
      return {
        ...state,
        token: action.payload.token,
        expiresAt: action.payload.expiresAt.toString(),
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
      return {
        ...state,
        ...initialState
      };
    case actionTypes.INVALIDATE_USER:
      return {
        ...state,
        ...initialState,
        redirectAfterSignin: action.payload.redirectAfterSignin
      };
    case actionTypes.VALIDATE_USER:
      const u = localStorage.getItem('username');
      const t = localStorage.getItem('token');
      const e = localStorage.getItem('expiresAt');
      return {
        ...state,
        username: u,
        token: t,
        expiresAt: e
      };
    default:
      return state;
  }
};


export default authReducer;
