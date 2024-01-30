import React from "react";
import GoogleLoginButton from "./googleLoginbutton";
import NaverLoginButton from "./naverLoginbutton";

const GoogleLogin = () => {

  return (
    <div className="sns-login-button">
      <div className="google-login-button">
				<GoogleLoginButton />
      </div>
      <div className="naver-login-button">
        <NaverLoginButton />
      </div>
    </div>
  )
}
export default GoogleLogin;