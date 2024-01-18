import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/config";
import axios from "axios";

const clientid = '1087352918812-0sng7c0ne7imi2npab9fev8vj2ivvg16.apps.googleusercontent.com'


const RegisterForm = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkpw, setCheckpw] = useState('');
  const handleRegister = async () => {
    const data = {
      name : name,
      email : email,
      password : password,
      method : 'local'
    }
    await axios.post(`${API_URL}/auth/join`, data)
      .then((res) => {
        console.log(res.data);
        // window.location.href('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
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
        {/* <p>비밀번호 확인</p><input type="password" onChange={(e) => {
          setCheckpw(e.target.value);
        }}></input> */}
        <button type="submit" onClick={handleRegister}>회원가입</button>
    </div>
  )
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <div>
      <input name='email' id="email" type="text" onChange={(e) => {
        setEmail(e.target.value);
      }}></input>
      <input name='password' id="password" type="password" onChange={(e) => {
        setPassword(e.target.value);
      }}></input>
      <button type="click" onClick={async () => {
        await axios.post(`${API_URL}/auth/locallogin`, {
          email : email,
          password : password
        })
      }}>로컬 로그인</button>
    </div>
  )
}

const GoogleLogin = () => {
  const [naverLoginButton, setNaverLoginButton] = useState();
  const navigate = useNavigate();

	const createMarkup = (html) => {
		return {__html: html};
	}
	const MyComponent = (html) => {
		return <div dangerouslySetInnerHTML={createMarkup(html)} />;
	}
	
	useEffect(()=> {
		axios.get(`${API_URL}/api/test/naverlogin`)
		.then(res => {
			console.log(res.data);
			setNaverLoginButton(MyComponent(res.data));
		}).catch(e => {
			console.error(e);
		})

		userAccessToken();
	}, []);

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

			const callbackRes = await axios.get(`${API_URL}/api/test/callback?code=${code}&state=${state}`);
			console.log("callbackRes: ", callbackRes);

			const memberRes = await axios.get(`${API_URL}/api/test/member?access_token=${callbackRes.data.access_token}`);
			console.log("memberRes: ", memberRes);

			const naverlogin = await axios.post(`${API_URL}/api/user/naver-login`, 
				memberRes.data.response,
				{ withCredentials: true }// 쿠키 수정허용
			);
			
			console.log("naverlogin: ", naverlogin);

			if(naverlogin.status == 200){
				console.log('if 들어옴');
				alert("로그인성공!");
				// setIslogin(true);// 로컬스토리지에 저장. 브라우저닫아도 유지
				// navigate('/'); 
			}
	}

  return (
    <div>
      <div>
        <button onClick={() => {
          window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientid}&redirect_uri=http://localhost:3000/success&response_type=code&scope=email+profile`;
        }}>구글 로그인 하기</button>
        <button type="click" onClick={ async () => {
          await axios.get(`${API_URL}/auth/google`, {
            headers: "Access-Control-Allow-Origin: *"
          })
        }}>구글 로그인 하기</button>
      </div>
      <div>
        {naverLoginButton}
      </div>
      <RegisterForm/>
      <LoginForm/>
    </div>
  )
}
export default GoogleLogin;