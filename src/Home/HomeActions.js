import HomeUtils from './HomeUtils';
import * as types from './HomeActionTypes';

export function setTitle(title) {
  return { type: types.SET_TITLE, title };
}

export function setText(text) {
  return { type: types.SET_TEXT, text };
}

export function setSpending(spending) {
  return { type: types.SET_SPENDING, spending };
}

export function getExpenses() {
  return (dispatch, getState) => {
    const utils = new HomeUtils(getState);

    return utils.getExpenses()
      .then(res => {
        dispatch(setSpending(res.data));
        // dispatch(setTitle(res.data.login));
        // dispatch(setText(`${res.data.repos_url}`));
      });
  };
}
