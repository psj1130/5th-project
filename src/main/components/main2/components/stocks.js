import React from 'react';
import './stocks.css'

export default function Stocks() {

  return(
    <div id="stocks-box">
      <div className="stocks-top-box">
        <img src="/main/kopa.png" alt="img" />
      </div>
      <div className="stocks-top-box">
      <img src="/main/kodak.png" alt="img" />
      </div>
      <div className="stocks-bottom-box">
        <span className='stock-bottom-text'>KOPA</span>
        <p>코파</p>
      </div>
      <div className="stocks-bottom-box">
        <span className='stock-bottom-text'>KODAK</span>
        <p>코닥</p>
      </div>
    </div>
  );
}