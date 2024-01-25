import React, { useState, useRef } from "react";
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "./cookies";
import axios from "axios";
import { API_URL } from "../config/serverurl";
import Kakao from "./kakao"
import { getCookie, delCookie } from "./cookies";
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
        <input ref={pw_css} id="password" name='password' type="text" placeholder="비밀번호를 입력해 주세요." onChange={(e) => {
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
        await axios.post(`${API_URL}/auth/login`, { email: email, password: password})
        .then((res) => {
          if(res.data == '1') {
            console.log('로그인 성공');
            setCookie('loginCookie', email, {
              path: '/',
              secure: '/',
              expires: new Date(Date.now() + setTime),
            });
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
          <h1>로그인</h1>
        </div>
        <LoginForm/>
        <div className="other-container">
          {/* <span >아이디/비밀번호 찾기</span>
          <form name="form" id="form" action="https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb">
              <input type="hidden" id="m" name="m" value="service" />
              <input type="hidden" id="token_version_id" name="token_version_id" value="" />
              <input type="hidden" id="enc_data" name="enc_data" />
              <input type="hidden" id="integrity_value" name="integrity_value" />
          </form> */}

          <div className="login-button1" onClick={() => {
            navigate('/signup');
          }}><b>이메일로 회원가입</b></div>
          <Kakao/>
        </div>
      </div>
    </div>
  )
}else{
  window.location.replace("/")
}
}

export default LoginPage;