/* global jest, expect, describe, it, beforeEach, afterEach, jasmine */
jest.unmock('../HomeActions');

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../HomeActions';
import * as types from '../HomeActionTypes';

const mockStore = configureMockStore([thunk]);

describe('HomeActions', () => {
  it('should dispatch SET_TEXT', () => {
    const value = 'random text';
    const result = actions.setText(value);

    expect(result.type).toEqual(types.SET_TEXT);
    expect(result.text).toEqual(value);
  });

  it('should dispatch SET_SPENDING and SET_TEXT based on promise information', () => {
    const state = { home: { github: { username: 'jeanbauer' } } };
    const store = mockStore(state);
    return store.dispatch(actions.setSpending()).then(() => {
      const res = store.getActions();

      expect(res.length).toBe(2);
      expect(res[0].type).toBe(types.SET_SPENDING);
      expect(res[0].title).toEqual(jasmine.any(String));
      expect(res[1].type).toBe(types.SET_TEXT);
      expect(res[1].text).toEqual(jasmine.any(String));
    });
  });
});
