import React from 'react';
import './chart.css';
import Recharts from './recharts';

export default function Chart() {

  return(
    <div id="chart-box">
      <div id="chart-top-box">
        <Recharts/>
      </div>
      <div id="chart-bottom-box">
      <p>
        <span className='chart-bottom-logo'>쩐의 전쟁 </span>
          모의투자 게임에 참여하여 차트를 분석하고<br/>
          미래를 예측하여 투자의 재미와 도전을 경험하세요
      </p>
      </div>
    </div>
  );
}