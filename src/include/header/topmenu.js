import React from 'react';
import { Link } from 'react-router-dom'
import './topmenu.css';

function TopMenu() {

  return(
    <div id="topmeun-container">
      <div className="topmenu-title-box">
        <span className='logo-style'>쩐의 전쟁</span>
      </div>
      <div className="topmenu-list">
        <Link to='/'>메뉴</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>메뉴</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>메뉴</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>메뉴</Link>
      </div>
      <div className="topmenu-list">
        <Link to='/'>메뉴</Link>
      </div>
    </div>
  );
}

export default TopMenu;