/* global jest, expect, describe, it, jasmine */
jest.unmock('../HomeActionTypes');

import * as types from '../HomeActionTypes';

describe('HomeActionTypes', () => {
  it('should import all action types', () => {
    expect(types.SET_SPENDING).toEqual(jasmine.any(String));
    expect(types.SET_TEXT).toEqual(jasmine.any(String));
  });
});
