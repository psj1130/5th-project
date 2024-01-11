import React from 'react'
import { Link } from 'react-router-dom'
//css
import './header.css';
import '../font.css';
//컴포넌트
import Topmenu from './menu/topmenu';
import Login from './menu/login';

function Header() {
    
  return(
    <div id='header-wrapper'>
      <div id="header-container">
        <div id="header-topmenu-container">
          <Topmenu/>
        </div>
        <div id="header-login-container">
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default Header;