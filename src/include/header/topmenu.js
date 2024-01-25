import React from 'react';
import { Link } from 'react-router-dom'
import './topmenu.css';

function TopMenu() {

  return(
    <div id="topmeun-container">
      <div className="topmenu-title-box">
        <Link to='/'><span className='logo-style'>쩐의 전쟁</span></Link>
      </div>
      <div className="topmenu-list">
        <Link to='/simulator'>메뉴</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>메뉴</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>메뉴</Link>
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