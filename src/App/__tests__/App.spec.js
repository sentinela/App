/* global jest, expect, describe, it */
jest.unmock('../App.jsx');

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.jsx';

describe('App', () => {
  it('should render app layout', () => {
    const wrapper = shallow(<App children={<span id="main" />} />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('.app-wrapper .ws-bg-light').length).toEqual(1);
  });
});
