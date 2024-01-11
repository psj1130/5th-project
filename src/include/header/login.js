import React from 'react';
import { Link } from 'react-router-dom'
import './login.css';

function Login() {

  return(
    <div id="login-container">
      <span className="login-style">
        <img src="/main/login_icon.png" alt="icon" />
          <Link to='#'>
            로그인
          </Link>
      </span>
    </div>
  );
}

export default Login;