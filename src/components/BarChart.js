import React, { PropTypes } from 'react';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HorizontalBarChart = (props) => {
  const { color, data, XAxisKey, YAxisKey, name } = props;
  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey={XAxisKey} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar
          name={name}
          dataKey={YAxisKey}
          fill={color || '#8884d8'}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

HorizontalBarChart.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string,
  XAxisKey: PropTypes.string,
  YAxisKey: PropTypes.string,
  name: PropTypes.string,
};

export default HorizontalBarChart;
