import axios from "axios";
import './signup.css';
import React, { useRef, useState } from "react";
import { API_URL } from "../config/config";
import { useNavigate } from "react-router";


const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [context, setContext] = useState('');
  const pw_css = useRef(document.getElementById('pw'));
  const pw2_css = useRef(document.getElementById('pw2'));
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // 간단한 이메일 유효성 검사를 수행합니다.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="signup-form-container">
      <p><span>닉네임</span></p>
      <input id="name" type="text" placeholder="닉네임을 입력해주세요." onChange={(e) => {
        setName(e.target.value);
      }}></input>
      <p><span>이메일</span></p>
      <input id="email" type="text" placeholder="이메일을 입력해주세요." onChange={(e) => {
        setEmail(e.target.value);
      }}></input>
      <div className="password-container">
        <div>
          <p><span>비밀번호</span></p>
          <input ref={pw_css} id="password" type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={(e) => {
            setPassword(e.target.value);
          }}></input>
        </div>
        <div>
          <p><span>비밀번호 재입력</span></p>
          <input ref={pw2_css} id="pw2" type="text" placeholder="비밀번호를 다시 입력해주세요." onChange={(e) => {
            setPassword2(e.target.value);
          }}></input>
        </div>
      </div>
      <div id="warning">
        {context}
      </div>
      <div className="login-button" onClick={async () => {
        if (!name || !password || !password2 || !email) {
          setContext('필수정보를 입력해주세요 !');
        } else if (password !== password2) {
          setContext('비밀번호가 일치하지 않습니다.');
          pw_css.current.style.setProperty('border', '1px solid red');
          pw2_css.current.style.setProperty('border', '1px solid red');
        } else if (!/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(password)) {
          setContext('비밀번호는 숫자와 영문자를 모두 포함해야 합니다.');
        } else {
          const data = {
            name: name,
            email: email,
            password: password,
            method:"local",
            wallet_code:generateRandomCode(6)
          };

          try {
            const res = await axios.post(`${API_URL}/auth/join`, data);
            if (res.data === 'success') {
              alert('회원가입을 축하드립니다 !');
              navigate('/login');
            } else if (res.data === 'fail') {
              alert('이미 가입한 이메일입니다.');
            }
            await axios.post(`${API_URL}/auth/join`, data)
              .then(res => {
                if(res.data == 'success') {
                  alert('회원가입을 축하드립니다 !');
                  navigate('/login');
                } else if(res.data == 'fail') {
                  alert('다시 확인해주세요 !');
                }
              })
              .catch(err => {
                console.log(err);
              })
            } catch(err) {
              console.log(err)
          }
        }
      }
    }>
        회원가입
      </div>
    </div>
  )
}

const SignUpPage = () => {
  return(
    <div id='signup-page-wrapper'>
      <div id="signup-page-container">
        <div className="customer-h1">
          <h1>회원가입</h1>
        </div>
        <SignUpForm/>
      </div>
    </div>
  )
}

export default SignUpPage;