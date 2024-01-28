import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';
import { getCookie, delCookie } from "../../player/cookies";
import { API_URL } from '../../config/serverurl';
import axios from 'axios';
function Login() {
  const cookie = getCookie('user-cookie');
  let context = null;

  const logout = async () => {
    try {
      await axios.get(`${API_URL}/auth/test`, { withCredentials: true });
    } catch (error) {
      console.error(error);
    }
    document.location.reload(true);
  }

  if(cookie) {
    context = <>
                <li className='login-style'>
                  <p onClick={logout}>로그아웃</p>
                </li>
              </>
  } else if(!cookie) {
    context = <li className='login-style'><Link to='/members/login' onClick={() => {
      window.sessionStorage.setItem('BeforePage', window.location.pathname);
    }}>로그인</Link></li>
  }

  return(
    //모바일 픽셀 이상일때
    <div id="login-container">
      <div id="login-desktop-container">
        <img className="login-img-style" src="/main/login_icon.png" alt="icon" />
          {/* <Link
          className='login-main-text-style'
          to='/members/login'>
            로그인
          </Link> */}
          {context}
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
                <li><Link to='#'>홈</Link></li>
                <li><Link to='#'>차트</Link></li>
                <li><Link to='#'>종목 상세</Link></li>
                <li><Link to='#'>운세</Link></li>
                <li><Link to='#'>커뮤니티</Link></li>
                <li><Link to='#'>고객센터</Link></li>
                <li><Link to='/members/login'>로그인</Link></li>
              </ul>
            </div>
      </div>
    </div>
  );
}

export default Login;