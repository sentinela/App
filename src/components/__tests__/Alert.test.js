/* eslint no-undef: ["error", { "typeof": false }] */

import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../Alert';

const wrapper = shallow(
  <Alert
    success
    text="test"
    strongText="some strong text"
    onClick={() => {}}
  />);

it('Renders a alert with a fixed text', () => {
  expect(wrapper.contains('test')).toEqual(true);
});

it('renders children <strong> element when passed in strongText prop', () => {
  expect(wrapper.contains(<strong>some strong text</strong>)).toEqual(true);
});

it('renders an `.close`', () => {
  expect(wrapper.find('.close').length).toBe(1);
});
