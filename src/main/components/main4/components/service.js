import React from 'react';
import './service.css';
import { Link } from 'react-router-dom'

export default function Service() {
  
  return(
    <div id="service-box">
      <div id="service-title">
        <p>고객센터</p>
        <Link to='/' className='component-service-link'>더 보기</Link>
      </div>
      <ul id='service-list-box'>
        <li>데</li>
        <li>이</li>
        <li>터</li>
        <li>받</li>
        <li>기</li>
      </ul>
    </div>
  );
}