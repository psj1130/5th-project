import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';

function Login() {

  return(
    //모바일 픽셀 이상일때
    <div id="login-container">
      <img className="login-img-style" src="/main/login_icon.png" alt="icon" />
        <Link
        className='login-main-text-style'
        to='#'>
          로그인
        </Link>
    </div>
  );
}

export default Login;