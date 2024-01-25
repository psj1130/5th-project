import React from 'react';
import './notice.css';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../../config/serverurl';

export default function Notice() {
  
  axios.get(`${API_URL}/notice_detail/`)
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
          {noticedata.map((item, index) => (
            <li key={index}>{item.body}</li>
          ))}
        </ul>
    </div>
  );
}