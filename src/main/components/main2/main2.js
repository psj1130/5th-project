import React from 'react';
import { Link } from 'react-router-dom'
import './main2.css'

import Stocks from './components/stocks';
import Chart from './components/chart';

export default function Main2() {

  return(
    <div id="main2-container">
      <div id="main2-box-con">
        <div className="main2-box">
          <div id="main2-title-box">
            <Link to='/' className='component-link'>더 보기</Link>
          </div>
            <div id="chart-container">
              <Chart/>
            </div>
        </div>
        <div className="main2-box">
          <div id="main2-title-box">
            <Link to='/' className='component-link'>더 보기</Link>
          </div>
            <div id="stocks-container">
              <Stocks/>
            </div>
        </div>
      </div>
    </div>
  );
}
