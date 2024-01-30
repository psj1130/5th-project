import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Simulator from '../components/simulator';
import { getCookie } from '../../player/cookies';

const Exchange = () => {
  const cookie = getCookie('user-cookie')
  const navigate = useNavigate();

  if(cookie) {
    return (
      <div id='simulator-wrapper'>
        <Simulator/>
      </div>
    )
  } else if(!cookie){
    return window.location.replace('/login');
  }
}

export default Exchange;