import React from 'react';
import './guide.css';

export default function Guide() {

  const giude = [
    {id: 1, number: 1, body: '내용1'},
    {id: 2, number: 2, body: '내용2'},
    {id: 3, number: 3, body: '내용3'},
  ];

  return(
    <ul id='guide-box'>
      {giude.map((item, idx) => (
        <li key={idx} className='guide-list'>
          <div className="guide-number-box">
            <h1>{item.number}</h1>
          </div>
          <div className="giude-detail-box">
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}