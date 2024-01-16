import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';

function Login() {

  return(
    //모바일 픽셀 이상일때
    <div id="login-container">
      <div id="login-desktop-container">
        <img className="login-img-style" src="/main/login_icon.png" alt="icon" />
          <Link
          className='login-main-text-style'
          to='#'>
            로그인
          </Link>
        </div>
      <div id="login-mobile-container">
        <input type="checkbox" id="check_box" />
          <label for="check_box">
            <span></span>
            <span></span>
            <span></span>
          </label>
            <div id="side-menu">
              <ul id='side-menu-container'>
                <li><Link to='#'>메뉴1</Link></li>
                <li><Link to='#'>메뉴2</Link></li>
                <li><Link to='#'>메뉴3</Link></li>
                <li><Link to='#'>메뉴4</Link></li>
                <li><Link to='#'>메뉴5</Link></li>
                <li><Link to='#'>메뉴6</Link></li>
                <li><Link to='/'>로그인</Link></li>
              </ul>
            </div>
      </div>
    </div>
  );
}

export default Login;