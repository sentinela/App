import React, { PropTypes } from 'react';

import icons from '../utils/icons';
import BarChart from './BarChart';

import './styles/DailyValueTotal.less';

const DailyValueTotal = (props) => {
  const data = props.data;
  return (
    <div className="col-12 daily-value-total">
      <div className="chart-title">
        <span>Total gasto em diária em 2016</span>
        <img width="30px" src={icons.airplane_icon} alt="" />
      </div>
      <BarChart
        data={data.map((d) => { d.credor = d.credor.slice(0, 4); return d; })}
        XAxisKey="credor"
        YAxisKey="valor"
        name="Total"
        unit="R$"
      />
    </div>
  );
};

DailyValueTotal.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DailyValueTotal;
