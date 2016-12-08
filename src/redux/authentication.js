import { createReducer, createTypes } from 'reduxsauce';
import { browserHistory } from 'react-router';
import jsCookie from 'js-cookie';
import api from '../services/api';

/* ------------- Types ------------- */
export const authTypes = createTypes(`
  LOGIN_REQUEST
  LOGIN_SUCCESS
  LOGIN_FAILURE
  LOGOUT
`);

/* ------------- Action Creators ------------- */
const loginSuccess = (user, token) => ({ type: authTypes.LOGIN_SUCCESS, user, token });
const loginError = error => ({ type: authTypes.LOGIN_FAILURE, error });

const attemptLogin = (login, password) => (dispatch) => {
  api.post('auth/local', { login, password })
    .then((response) => {
      if (response.ok) {
        const { token } = response.data;

        jsCookie.set('token', token);
        jsCookie.set('user_id', response.data.id);

        dispatch(loginSuccess(response.data, token));
        browserHistory.replace('/app');
      } else {
        dispatch(loginError(response.data));
      }
    });
};

export default {
  attemptLogin,
};


/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  user: null,
  error: null,
  fetching: false,
};

/* ------------- Reducers ------------- */
const request = state => ({ ...state, fetching: true });
const success = (state, action) => ({ ...state, fetching: false, error: null, user: action.user });
const failure = (state, action) => ({ ...state, fetching: false, error: action.action });
const logout = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [authTypes.LOGIN_REQUEST]: request,
  [authTypes.LOGIN_SUCCESS]: success,
  [authTypes.LOGIN_FAILURE]: failure,
  [authTypes.LOGOUT]: logout,
});
