import React from 'react';
import './guide.css';

export default function Guide() {

  const giude = [
    {id: 1, number: 1, body: '쩐의 전쟁 회원가입을 해주세요!'},
    {id: 2, number: 2, body: '쩐의 전쟁 로그인을 해주세요!'},
    {id: 3, number: 3, body: '차트 페이지로 이동하셔서 즐겨주시면 됩니다!'},
  ];

  return(
    <ul id='guide-box'>
      {giude.map((item, idx) => (
        <li key={idx} className='guide-list'>
          <div className="guide-number-box">
            <p>{item.number}</p>
          </div>
          <div className="giude-detail-box">
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}