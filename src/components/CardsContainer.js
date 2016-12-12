import React, { PropTypes } from 'react';
import Card from './Card';


const CardsContainer = () => {
  return (
    <div className="col-6 content-cards">
      <div className="chart-title">
        <span>Gastos mensais</span>
      </div>
      <Card
        title="Janeiro"
        describe="R$ 100.000"
        size="col-4"
      />
      <Card
        title="Fevereiro"
        describe="R$ 200.000"
        size="col-4"
      />
      <Card
        title="Março"
        describe="R$ 300.000"
        size="col-4"
      />
      <Card
        title="Abril"
        describe="R$ 100.000"
        size="col-4"
      />
      <Card
        title="Maio"
        describe="R$ 200.000"
        size="col-4"
      />
      <Card
        title="Junho"
        describe="R$ 300.0000"
        size="col-4"
      />
      <Card
        title="Julho"
        describe="R$ 100.0000"
        size="col-4"
      />
      <Card
        title="Agosto"
        describe="R$ 200.000"
        size="col-4"
      />
      <Card
        title="Setembro"
        describe="R$ 300.000"
        size="col-4"
      />
      <Card
        title="Outubro"
        describe="R$ 100.000"
        size="col-4"
      />
      <Card
        title="Novembro"
        describe="R$ 200.000"
        size="col-4"
      />
      <Card
        title="Dezembro"
        describe="R$ 300.000"
        size="col-4"
      />
    </div>
  );
};


export default CardsContainer;
