import React from 'react';
import { Link } from 'react-router-dom'
import './topmenu.css';
import { getCookie } from '../../player/cookies';

function TopMenu() {
  const cookie = getCookie('user-cookie');

  return(
    <div id="topmeun-container">
      <div className="topmenu-title-box">
        <span className='logo-style'><Link to='/main'>쩐의 전쟁</Link></span>
      </div>
      <div className="topmenu-list">
        <Link to={cookie ? `/simulator/${cookie}` : '/login'}>차트</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/lucky'>운세</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/htmlboard'>커뮤니티</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/customer'>고객센터</Link>
      </div>
      
    </div>
  );
}

export default TopMenu;