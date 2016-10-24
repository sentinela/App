/* global jest, expect, describe, it, jasmine */
jest.unmock('../HomeReducer');

import reducer from '../HomeReducer';
import * as types from '../HomeActionTypes';

describe('HomeReducer', () => {
  it('should set text property when type is SET_TEXT', () => {
    const text = 'random text';
    const action = { type: types.SET_TEXT, text };

    expect(reducer({}, action).text).toBe(text);
  });

  it('should not modify the state when the action is uknown', () => {
    const state = { key: 'value' };
    expect(reducer(state, {})).toBe(state);
  });
});
