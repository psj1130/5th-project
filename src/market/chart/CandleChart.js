import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const ChartComp = ({ data }) => {
  const [options, setOptions] = useState({
    chart: {
      type: 'candlestick',
    },
    xaxis: {
      type: 'datetime',
    },
  });

  const [series, setSeries] = useState([
    {
      data: [], // 초기에는 빈 배열로 시작
    },
  ]);

  useEffect(() => {
    // data가 변경될 때마다 series 업데이트
    if (data) {
      setSeries([
        {
          data: [
            // 기존 데이터 유지
            ...series[0].data,

            // 새로운 데이터 추가
            {
              x: new Date(data.trade_timestamp),
              y: [
                data.opening_price,
                data.high_price,
                data.low_price,
                data.trade_price,
              ],
            },
          ],
        },
      ]);
    }
  }, [data, series]);

  return (
    <div>
      <h2>Real-time Candlestick Chart</h2>
      <Chart options={options} series={series} type="candlestick" height={350} />
    </div>
  );
};

export default ChartComp;