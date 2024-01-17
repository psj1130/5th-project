import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/config";
import { useSearchParams } from "react-router-dom";

export default function GoogleRegister() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkpw, setCheckpw] = useState('');
  const code = searchParams.get('code');
  // console.log(code);
  useEffect(() => {
    axios.post(`${API_URL}/auth/google/data`, {
      code: code
    }, {
      headers: { accept: `application/json` },
    })
      .then((res) => {
        console.log(res);
        // setEmail(res.data.email);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const handleRegister = async () => {
    const data = {
      name : name,
      email : email,
      password : password,
      method : 'google'
    }
    await axios.post(`${API_URL}/user/register`, data)
      .then((res) => {
        console.log(res.data);
        window.location.href('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  return(
    <div className="google-login-container">
        <p>닉네임</p><input type="text" onChange={(e) => {
          setName(e.target.value);
        }}></input>
        <p>이메일</p><input type="text" onChange={(e) => {
          setEmail(e.target.value);
        }} value={email? email: ''}></input>
        <p>비밀번호</p><input type="password" onChange={(e) => {
          setPassword(e.target.value);
        }}></input>
        <p>비밀번호 확인</p><input type="password" onChange={(e) => {
          setCheckpw(e.target.value);
        }}></input>
        <button type="submit" onClick={handleRegister}>회원가입</button>
    </div>
  )
}