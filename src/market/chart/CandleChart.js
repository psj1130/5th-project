import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const CandleChart = ({ data }) => {
  const series = [{
    data: data.map(item => ({
      x: new Date(item.timestamp),
      y: [item.opening_price, item.high_price, item.low_price, item.prev_closing_price],
    })),
  }];

  const options = {
    chart: {
      type: 'candlestick',
      // height: 400,
    },
    xaxis: {
      type: 'datetime',
    },
  };

  useEffect(() => {
    // 여기에서 소켓 이벤트 등의 추가 작업을 수행할 수 있습니다.
    // 예를 들어, 실시간으로 차트를 업데이트하거나 추가 데이터를 수신할 때 실행되는 로직을 추가할 수 있습니다.
  }, [data]);

  return (
    <ReactApexChart options={options} series={series} type="candlestick" height={400} />
  );
};

export default CandleChart;