import React from 'react';
import {XAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  {
    name: '비트코인',
    uv: 1500,
    pv: 1800,
    amt: 1800,
  },
  {
    name: '리플',
    uv: 1500,
    pv: 1398,
    amt: 1600,
  },
  {
    name: '도지',
    uv: 1500,
    pv: 800,
    amt: 1700,
  },
  {
    name: '이더리움',
    uv: 1200,
    pv: 1300,
    amt: 1200,
  },
  {
    name: '샌드박스',
    uv: 1200,
    pv: 1500,
    amt: 1400,
  },
  {
    name: '솔라',
    uv: 1500,
    pv: 1500,
    amt: 1500,
  }
]

const Recharts = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
  width={730}
  height={250}
  data={data}
  margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name">
  </XAxis>
  <Bar dataKey="pv" fill="#D1180B">
  </Bar>
  <Bar dataKey="uv" fill="#0019f4">
  </Bar>
</BarChart>
    </ResponsiveContainer>
  );
};

export default Recharts;
