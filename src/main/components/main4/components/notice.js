import React from 'react';
import './notice.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { API_URL } from '../../../../config/config';

export default function Notice() {
    axios.get(`${API_URL}/추후 요청`)
      .then((res) => {
        const noticedata = res.data;
        console.log("전달 받은 notice data: ", noticedata);
      })
      .catch((err) => {
        console.error(err);
      })
  return(
    <div id="notice-box">
      <div id="notice-title">
        <p>공지사항</p>
        <Link to='/' className='component-notice-link'>더 보기</Link>
      </div>
        <ul id='notice-list-box'>
          <li>데</li>
          <li>이</li>
          <li>터</li>
          <li>받</li>
          <li>기</li>
        </ul>
    </div>
  );
}