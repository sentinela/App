import React from 'react';
import { shallow } from 'enzyme';
import CardsContainer from '../CardsContainer';

it('renders a card', () => {
  const wrapper = shallow(<CardsContainer />);
  const card = document.createElement('div');
  expect(wrapper.contains(card)).toEqual(true);
});
