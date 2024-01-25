import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { API_URL } from "../config/serverurl";
import { useNavigate } from "react-router";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const clientId = '1087352918812-0sng7c0ne7imi2npab9fev8vj2ivvg16.apps.googleusercontent.com'
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={async (res) => {
            await axios.post(`${API_URL}/auth/googlelogin`, { token: res.credential })
              .then((result) => {
                if (result) {
                  
                }
              })
              .catch((err) => {
                console.log(err);
              })
          }}
          onFailure={(err) => {
            console.log(err);
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton