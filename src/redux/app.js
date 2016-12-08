import { createReducer, createTypes } from 'reduxsauce';
import api from '../services/api';

/* ------------- Types ------------- */
export const authTypes = createTypes(`
  LOGOUT
`);


/* ------------- Action Creators ------------- */
const saveBadgeImage = image => ({ type: authTypes.SAVE_BADGE_PREVIEW, image });

export default {
  saveBadgeImage,
};


/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  badgePreview: null,
};

/* ------------- Reducers ------------- */
const rSaveFirstImage = (state, actions) => ({ ...state, badgePreview: actions.image });
const logout = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [authTypes.SAVE_BADGE_PREVIEW]: rSaveFirstImage,
  [authTypes.LOGOUT]: logout,
});
