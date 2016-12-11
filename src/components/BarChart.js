import React, { PropTypes } from 'react';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Aurelio', value: 100 },
    { name: 'Brendon', value: 90 },
    { name: 'Carlos', value: 80 },
    { name: 'Dauri', value: 70 },
    { name: 'Ernando', value: 60 },
    { name: 'Farcuat', value: 50 },
    { name: 'Gabriel', value: 40 },
];

const SimpleBarChart = (props) => {
  return (
    <BarChart
      width={600}ß
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar name="Total" dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default SimpleBarChart;
