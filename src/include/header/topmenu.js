import React from 'react';
import { Link } from 'react-router-dom'
import './topmenu.css';
import { getCookie } from '../../player/cookies';

function TopMenu() {
  const cookie = getCookie('loginCookie');

  return(
    <div id="topmeun-container">
      <div className="topmenu-title-box">
        <span className='logo-style'><Link to='/main'>쩐의 전쟁</Link></span>
      </div>
      <div className="topmenu-list">
        <Link to='/simulator'>차트</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>종목 상세</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>운세</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>커뮤니티</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>고객센터</Link>
      </div>
      
    </div>
  );
}

export default TopMenu;