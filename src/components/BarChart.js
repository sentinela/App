import React, { PropTypes } from 'react';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HorizontalBarChart = (props) => {
  const { color, data, XAxisKey, YAxisKey, name, unit } = props;
  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey={XAxisKey} />
        <YAxis label={unit} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar
          name={name}
          dataKey={YAxisKey}
          fill={color}
          unit={unit}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

HorizontalBarChart.defaultProps = {
  data: [],
  color: '#8884d8',
  XAxisKey: '',
  YAxisKey: '',
  name: '',
  unit: '',
};

HorizontalBarChart.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string,
  XAxisKey: PropTypes.string,
  YAxisKey: PropTypes.string,
  name: PropTypes.string,
  unit: PropTypes.string,
};

export default HorizontalBarChart;
