/* eslint no-undef: ["error", { "typeof": false }] */

import React from 'react';
import { shallow } from 'enzyme';
import NavigationCard from '../NavigationCard';

const data = {
  id: 1,
  title: 'Diárias',
  to: '/dailyrates',
  subtitle: 'Acompanhe detalhadamente os gastos com diárias, através do nome do beneficiado e as datas',
  leftStat: {
    value: 'R$ 2.000,00',
    label: 'Média mensal',
  },
  rightStat: {
    value: 'R$ 5.000,00',
    label: 'Total anual',
  },
  icon: 'airplane',
  observacao: 'Estes dados são fictícios e não refletem ao gasto de Fictícia',
};

const wrapper = shallow(<NavigationCard data={data} to="test" />);

it('Renders a card with a fixed text', () => {
  expect(wrapper.contains('(Clique para ver mais detalhes)')).toEqual(true);
});

it('renders children when passed in', () => {
  expect(wrapper.contains(<div className="stat">{data.leftStat.value}</div>)).toEqual(true);
});

it('renders an `.navigation-card__unit-name`', () => {
  expect(wrapper.find('.navigation-card__unit-name').length).toBe(1);
});

it('renders an `.navigation-card__unit-description`', () => {
  expect(wrapper.find('.navigation-card__unit-description').length).toBe(1);
});

it('renders two `.stat`', () => {
  expect(wrapper.find('.stat').length).toBe(2);
});
