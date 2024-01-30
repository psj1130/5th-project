import React from 'react';
import './main3.css';
import { Link } from 'react-router-dom'

import Guide from './components/guide';
import Luck from './components/luck';

export default function Main3() {
  return(
    <div id='main3-container'>
      <div id="main3-box-con">
        <div className="main3-box">
          <div id="main3-title-guide-box">
            <p>쩐의 전쟁 가이드</p>
          </div>
            <div id="guide-container">
              <Guide/>
            </div>
        </div>
        <div className="main3-box">
          <div id="main3-title-box">
            <Link to='/lucky' className='component-link'>더 보기</Link>
          </div>
            <div id="luck-container">
              <Luck/>
            </div>
        </div>
      </div>
    </div>
  );
}