import axios from "axios";
import KakaoLogin from "react-kakao-login";
import { API_URL } from "../config/config";
import { useNavigate } from "react-router-dom";
import { setCookie } from "./cookies";
import "./kakao.css";
const setTime = 3600000; //1시간
const KakaoLoginButton =()=>{
  const navigate = useNavigate();
  const kakaoClientId = "b127e3315d27eaeeb6ab1e5d607bd83f";
  
  const kakaoOnSuccess = async (data)=>{
    // console.log(data)
    const access_token = data.response.access_token;  // 엑세스 토큰 백엔드로 전달

    const res = await axios.post(`${API_URL}/kakao`, {access_token});
    kakaoLogin(res.data);
  }

  const kakaoLogin = async (userData) => {
		console.log("kakaoLogin(): ", userData);
		const res = await axios.post(`${API_URL}/auth/kakaologin`, {userData});
		console.log(res.data,userData.properties.nickname);

		if(res.status == 200){
			// console.log('로그인성공!');
			alert("로그인성공!");
      // setCookie('user-cookie', userData.id, {
      //   path: '/',
      //   secure: '/',
      //   expires: new Date(Date.now() + setTime),
      // });
			window.location.replace("/")
		}
	}

  const kakaoOnFailure = (error) => {
    console.log(error);
  };

  return(
    <>
     <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
        render={({ onClick }) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
           <img src="../img/kakao.png" id="kakaoimg"/>
          </div>
        )}
      />
    </>
  )
}

export default KakaoLoginButton;