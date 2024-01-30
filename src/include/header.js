import React from 'react'
import './header.css';
import '../font.css';
import Topmenu from './header/topmenu';
import Login from './header/login';

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