/* eslint no-undef: ["error", { "typeof": false }] */

import React from 'react';
import { shallow } from 'enzyme';
import CardsWrapper from '../CardsWrapper';

it('DEMO TEST: renders a card with a fixed text', () => {
  const wrapper = shallow(<CardsWrapper />);
  expect(wrapper.contains('Gastos mensais')).toEqual(true);
});
