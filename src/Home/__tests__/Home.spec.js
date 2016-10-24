/* global jest, expect, describe, it */
jest.unmock('../Home.jsx');

import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../Home.jsx';
import { Link } from 'react-router';

describe('Home', () => {
  const fakeActions = {
    getExpenses: jest.fn()
  };

  /*  it('should render the title', () => {
    const wrapper = shallow(<Home text="" actions={fakeActions} />);
    const target = wrapper.find('.display-3');

    expect(target.length).toEqual(1);
    expect(target.text()).toBe('My Title');
  });

  it('should render the text', () => {
    const wrapper = shallow(<Home text="" actions={fakeActions} />);
    const target = wrapper.find('#subtitle');

    expect(target.length).toEqual(1);
    expect(target.text()).toBe('My Text');
  });

  it('should call an action when clicking on github link', () => {
    const wrapper = shallow(<Home text="" actions={fakeActions} />);
    const target = wrapper.find('button');

    expect(target.length).toEqual(1);
    expect(fakeActions.getExpenses.mock.calls.length).toBe(0);
    target.simulate('click');
    expect(fakeActions.getExpenses.mock.calls.length).toBe(1);
  }); */

  it('should render a Link pointing to perfil', () => {
    const wrapper = shallow(<Home text="" actions={fakeActions} />);
    const child = wrapper.find(Link);

    expect(child.length).toEqual(1);
    expect(child.node.props.to).toBe('/perfil');
  });
});
