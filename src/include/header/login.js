import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './login.css';
import { delCookie, getCookie } from "../../player/cookies";
import { API_URL } from '../../config/config';
import axios from 'axios';

function Login() {
  const cookie = getCookie('user-cookie');
  const navigate = useNavigate();
  let context = null;
  let mypage = null;

  const logout = async () => {
    try {
      await axios.delete(`${API_URL}/auth/logout`, {withCredentials: true})
        .then((res) => {
          if(res.status == 200) {
          // document.location.href('/');
          delCookie('user-cookie');
          navigate('/login');
          }
        })
        .catch((err) => {
          console.log(err);
        })
    } catch (error) {
      console.error(error);
    }
    // document.location.reload(true);
  }

  if (cookie) {
    context = <>
      <li><i className='xi-profile-o'/><Link to={`/mypage/${cookie}`}>마이페이지</Link></li>
      <li><i className='xi-unlock-o'/><p onClick={logout}>로그아웃</p></li>
    </>

    mypage = <>
      <li><Link to={`/mypage/${cookie}`}>마이페이지</Link></li>
      <li><p onClick={logout}>로그아웃</p></li>
    </>

  } else if (!cookie) {
    context = <li className='login-style'><Link to='/login' onClick={() => {
      window.sessionStorage.setItem('BeforePage', window.location.pathname);
    }}><i className='xi-lock-o'/>로그인</Link></li>

    mypage = <li className='login-style'><Link to='/login' onClick={() => {
      window.sessionStorage.setItem('BeforePage', window.location.pathname);
    }}>로그인</Link></li>
    
  }

  return (
    //모바일 픽셀 이상일때
    <div id="login-container">
      <ul id="login-desktop-container">
       {context}
      </ul>
    {/* 모바일 시작부분 */}
      <div id="login-mobile-container">
        <input type="checkbox" id="check_box" />
        <label for="check_box">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div id="side-menu">
          <ul id='side-menu-container'>
            <li><Link to='/main'>홈</Link></li>
            <li><Link to={`/simulator/${cookie}`}>차트</Link></li>
            <li><Link to='/lucky'>운세</Link></li>
            <li><Link to='/htmlboard'>커뮤니티</Link></li>
            <li><Link to='/customer/*'>고객센터</Link></li>
          </ul>
          <ul id='side-menu-bottom'>
            {mypage}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;