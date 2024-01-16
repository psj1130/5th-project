import React from 'react';
import './intro.css'

export default function Intro() {

  return(
    <div id="intro-container">
      <div className="intro-box">
        <h1>쩐의 전쟁</h1>
          <div className="intro-sub-box">
            <p><b>당신의 투자 미래를 모의해보세요!</b><br/>
                가상정보와 가상투자를 활용하여 투자의 세계에 도전하세요.<br/>
                현실적인 상황을 모방한 실전 시뮬레이션을 통해 투자 스킬을 향상시키고, 안전하게 경험을 쌓아보세요.<br/>
                재미와 학습이 공존하는 즐거운 투자 여행을 시작해보세요. 
            </p>
          </div>
      </div>
    </div>
  );
}