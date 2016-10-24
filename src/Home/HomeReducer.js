import {
  SET_TEXT,
  SET_SPENDING
} from './HomeActionTypes';

const initialState = {
  text: '',
  github: {
    username: 'jeanbauer'
  },
  spending: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SET_TEXT:
      return Object.assign({}, state, { text: action.text });

    case SET_SPENDING:
      return Object.assign({}, state, { spending: action.spending });

    default:
      return state;
  }
}
