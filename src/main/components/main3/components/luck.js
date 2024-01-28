import React from 'react';
import './luck.css';

export default function Luck() {
  return(
    <div id='luck-box'>
      <div id="luck-img-box">
        <img src="/main/luck-select.png" alt="png" />
      </div>
      <div id="luck-detail-box">
        <p><span className='luck-logo-style'>쩐의 전쟁</span> 운세는 재미로 보는 운세입니다 !<br/>
        <span className='luck-logo-style'>쩐의 전쟁</span> 운세로 모의투자를 즐겨주세요 !<br/>
        <span className='luck-logo-style'>쩐의 전쟁</span> 운세를 확인해주세요 !
        </p>
      </div>
    </div>
  );
}