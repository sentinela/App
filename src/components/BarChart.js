import React, { PropTypes } from 'react';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HorizontalBarChart = (props) => {
  return (
    <ResponsiveContainer>
      <BarChart
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar name="Total" dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

HorizontalBarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HorizontalBarChart;
