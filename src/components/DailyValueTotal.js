import React, { PropTypes } from 'react';
import BarChart from './BarChart';
import './styles/DailyValueTotal.less';
import icons from '../utils/icons';

const DailyValueTotal = (props) => {
  const data = [
      { name: 'Aurelio', value: 100 },
      { name: 'Brendon', value: 90 },
      { name: 'Carlos', value: 80 },
      { name: 'Dauri', value: 70 },
      { name: 'Ernando', value: 60 },
      { name: 'Farcuat', value: 50 },
      { name: 'Gabriel', value: 40 },
      { name: 'Aurelio', value: 100 },
      { name: 'Brendon', value: 90 },
      { name: 'Carlos', value: 80 },
      { name: 'Dauri', value: 70 },
      { name: 'Ernando', value: 60 },
      { name: 'Farcuat', value: 50 },
      { name: 'Gabriel', value: 40 },
      { name: 'Ernando', value: 60 },
      { name: 'Farcuat', value: 50 },
      { name: 'Gabriel', value: 40 },
      { name: 'Gabriel', value: 40 },
      { name: 'Ernando', value: 60 },
      { name: 'Farcuat', value: 50 },
      { name: 'Gabriel', value: 40 },
  ];
  return (
    <div className="col-12 daily-value-total">
      <div className="chart-title">
        <span>Total gasto em diária em 2016</span>
        <img width="30px" src={icons.airplane_icon} alt="" />
      </div>
      <BarChart data={data} />
    </div>
  );
};

export default DailyValueTotal;
