import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { API_URL } from '../../../../config/config';

export default function Service() {
  
  axios.get(`${API_URL}/추후 요청`)
  .then((res) => {
    const serviceedata = res.data;
    console.log("전달 받은 notice data: ", serviceedata);
  })
  .catch((err) => {
    console.error("에러발생:", err);
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