import React from 'react'
import { Link } from 'react-router-dom'
//css
import './header.css';
import '../font.css';
//컴포넌트
import Topmenu from './header/topmenu';
import Login from './header/login';

function Header() {
    
  return(
    <div id='header-wrapper'>
      <div id="header-container">
        <div id="header-topmenu-container">
          
        </div>
        <div id="header-login-container">
          
        </div>
      </div>
    </div>
  );
}

export default Header;