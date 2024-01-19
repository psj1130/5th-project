import React from 'react';
import './mainpage.css';

// 컴포넌트
import Background from './components/background/background';
import Intro from './components/intro/intro';
import Main1 from './components/main1/main1';
import Main2 from './components/main2/main2';
import Main3 from './components/main3/main3';
import Main4 from './components/main4/main4';


function MainPage() {
  
  return(

  <div id="main-body">
    <div id='main-container'>
      <Background/>
      <Intro/>
      {/* <Main1/> */}
      <Main2/>
      {/* <Main3/> */}
      {/* <Main4/> */}
    </div>
  </div>
  );
}

export default MainPage;
