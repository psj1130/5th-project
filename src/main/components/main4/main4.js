import React from 'react';
import './main4.css';
import { Link } from 'react-router-dom'


import Notice from './components/notice';
import Service from './components/service';


export default function Main4() {

  
  return(
    <div id='main4-container'>
      <div id="main4-box-con">
        <div className="main4-box">
            <div id="notice-container">
              <Notice/>
            </div>
        </div>
        <div className="main4-box">
            <div id="service-container">
              <Service/>
            </div>
        </div>
      </div>
    </div>
  );
}