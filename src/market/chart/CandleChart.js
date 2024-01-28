import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const CandleChart = ({code}) => {
  const [candleData, setCandleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1월 12일부터의 데이터 가져오기
        const response = await axios.get(
          'https://api.upbit.com/v1/candles/days',
          {
            params: {
              market: code,
              to: '2024-01-25T00:00:00Z', // 현재 날짜 기준
              count: 10,
            },
          }
        );
        const data = response.data;

        // 캔들 차트 데이터 형식으로 가공
        const chartData = data.map((candle) => ({
          x: new Date(candle.timestamp),
          y: [candle.opening_price, candle.high_price, candle.low_price, candle.trade_price],
        }));

        setCandleData(chartData);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [code]);

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'BTC Candlestick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={[{ data: candleData }]} type="candlestick" height={350} />
    </div>
  );
};

export default CandleChart;