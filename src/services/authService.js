import axios from '../axios-orders';

export const signIn = (username, password) => axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY}`, {
  email: username,
  password,
  returnSecureToken: true
});

export const signUp = (username, password) => axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.API_KEY}`, {
  email: username,
  password,
  returnSecureToken: true
});
