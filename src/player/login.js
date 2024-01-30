import React, { useState, useRef } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/config";
import Kakao from "./kakao";
import { getCookie } from "./cookies";
import Google from "./snsLogin";
const cookie = getCookie('loginCookie');
const LoginForm = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [context, setContext] = useState(null);
  const id_css = useRef(document.getElementById('id'));
  const pw_css = useRef(document.getElementById('password'));
  const navigate = useNavigate();
  const setTime = 3600000; //1시간


  return(
    <div className="login-form-container">
      <div className="login-input-container">
        <p>
          <span>이메일</span>
        </p>
        <input ref={id_css} id='email' name='email' type="text" placeholder="아이디를 입력해 주세요." onChange={(e) => {
          setEmail(e.target.value);
        }}></input>
      </div>
      <div className="login-input-container">
        <p>
          <span>비밀번호</span>
        </p>
        <input ref={pw_css} id="password" name='password' type="password" placeholder="비밀번호를 입력해 주세요." onChange={(e) => {
          setPassword(e.target.value);
        }}></input>
      </div>
      <p id="fail-login">{context}</p>
      <div className="login-button" onClick={async () => {
        if(!email || !password) {
          id_css.current.style.setProperty('border', '1px solid red')
          pw_css.current.style.setProperty('border', '1px solid red')
          setContext('아이디 또는 비밀번호를 입력해주세요 !');
        }
        await axios.post(`${API_URL}/auth/login`, { email: email, password: password}, { withCredentials: true })
        .then((res) => {
          if(res.data == '1') {
            alert('로그인 성공');
            navigate(sessionStorage.getItem('BeforePage') ? sessionStorage.getItem('BeforePage') : '/');
            document.location.reload(true);
          }else if(res.data == '2') {
            id_css.current.style.setProperty('border', '1px solid red')
            pw_css.current.style.setProperty('border', '1px solid red')
            setContext('아이디 또는 비밀번호를 다시 확인해주세요 !');
          }else if(res.data == '3') {
            alert('구글 로그인을 이용해주세요 !');
          }
        })
        .catch((err) => {
          console.log(err);
        })
      }}>로그인</div>
    </div>
    
  )
}

function LoginPage() {
  const navigate = useNavigate();
if(!cookie){
  return (
    <div id="login-page-wrapper">
      <div id="login-page-container">
        <div className="customer-h1">
          <h1><b>쩐의 전쟁</b></h1>
        </div>
        <LoginForm/>
        <div className="other-container">
          <div className="login-button1" onClick={() => {
            navigate('/signup');
          }}><b>회원가입</b></div>
        </div>
        <Kakao/>
        <Google/>
      </div>
    </div>
  )
}else{
  window.location.replace("/")
}
}

export default LoginPage;