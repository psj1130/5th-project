import React from 'react';
import './stocks.css'

export default function Stocks() {

  return(
    <div id="stocks-box">
      <div className="stocks-top-box">
        
      </div>
      <div className="stocks-top-box">
        
      </div>
      <div className="stocks-bottom-box">
        <span className='stock-bottom-text'>KOSPI</span>
        <p>코스피</p>
      </div>
      <div className="stocks-bottom-box">
        <span className='stock-bottom-text'>KOSDAQ</span>
        <p>코스닥</p>
      </div>
    </div>
  );
}