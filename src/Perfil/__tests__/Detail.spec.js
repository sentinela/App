/* global jest, expect, describe it */
jest.unmock('../Detail.jsx');

import React from 'react';
import { shallow } from 'enzyme';
import Detail from '../Perfil.jsx';
import { Link } from 'react-router';

describe('Detail', () => {
  it('should render a container', () => {
    const wrapper = shallow(<Detail />);
    expect(wrapper.find('.container').length).toEqual(1);
  });

  it('should render a Link pointing to home', () => {
    const wrapper = shallow(<Detail />);
    const child = wrapper.find(Link);

    expect(child.length).toEqual(1);
    expect(child.node.props.to).toBe('/');
  });
});
