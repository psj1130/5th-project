import React from 'react';
import './service.css';
import { Link } from 'react-router-dom'
import { API_URL } from '../../../../config/serverurl';

export default function Service() {
  
  axios.get(`${API_URL}/html/`)
  .then((res) => {
    const servicedata = res.data;
    console.log("전달 받은 notice data: ", servicedata);
  })
  .catch((err) => {
    console.error(err);
  })

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