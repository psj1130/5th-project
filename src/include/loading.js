import React from "react";
import './loading.css'
import { PacmanLoader } from 'react-spinners';
import { useEffect } from "react";
import { API_URL } from "../config/config";
import axios from 'axios';
import { useNavigate } from "react-router";
import { setCookie } from "../player/cookies";

const Loading = () => {
  const navigate = useNavigate();
  const setTime = 3600000; //1시간
  useEffect(() => {
    userAccessToken();
  })

  const userAccessToken = () => {
    // window.location.href는 현재 페이지의 URL을 문자열로 반환하는 속성입니다.
    // includes 메소드를 사용하여 URL에 'code'이라는 문자열이 포함되어 있는지 확인합니다.
    // 만약 포함되어 있다면 getToken() 함수를 호출합니다.
    window.location.href.includes('code') && getToken();
	}

  const getToken = async () => {
    //?code=c4HdngWVGK3jEDwp2y&state=NAVER_STATE
    const code = window.location.href.split('=')[1].split('&')[0];
    const state = window.location.href.split('=')[2];
  
    // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!   
    localStorage.setItem('code', code);
    localStorage.setItem('state', state);

			const callbackRes = await axios.get(`${API_URL}/test/callback?code=${code}&state=${state}`);
			console.log("callbackRes: ", callbackRes);

			const memberRes = await axios.get(`${API_URL}/test/member?access_token=${callbackRes.data.access_token}`);
			console.log("memberRes: ", memberRes);

			await axios.post(`${API_URL}/auth/naverlogin`, memberRes.data.response, {withCredentials: true })
        .then((res) => {
          if(res.status == 200) {
            setCookie('user-cookie',res.email,{
              path: '/',
              secure: '/',
              expires: new Date(Date.now() + setTime),
            });
            navigate('/');
            document.location.reload(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
	}
  return (
    <div className="loading-wrapper">
      <PacmanLoader
        color="black"
        loading
      />
    </div>
  )
}

export default Loading;