import React from 'react';
import { Link } from 'react-router-dom'
import './topmenu.css';
import { getCookie } from '../../player/cookies';

function TopMenu() {
  const cookie = getCookie('loginCookie');

  return(
    <div id="topmeun-container">
      <div className="topmenu-title-box">
        <Link to='/'><span className='logo-style'>쩐의 전쟁</span></Link>
      </div>
      <div className="topmenu-list">
        <Link to={cookie ? `/simulator/${cookie}` : `/login`}>모의 투자</Link>
      </div>
      <div className="topmenu-list">
        <Link to={`/mypage/${cookie}`}>마이페이지</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/lucky'>오늘의 운세</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/htmlboard'>커뮤니티</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/customer/customer_notice'>고객지원</Link>
      </div>
      
    </div>
  );
}

export default TopMenu;