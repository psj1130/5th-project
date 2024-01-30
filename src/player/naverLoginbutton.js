import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/config";
import axios from "axios";

const NaverLoginButton = () => {
  const [naverLoginButton, setNaverLoginButton] = useState();
  const navigate = useNavigate();

	const createMarkup = (html) => {
		return {__html: html};
	}
	const MyComponent = (html) => {
		return <div dangerouslySetInnerHTML={createMarkup(html)} />;
	}
	
	useEffect(()=> {
		axios.get(`${API_URL}/naverbutton`)
		.then(res => {
			// console.log(res.data);
			setNaverLoginButton(MyComponent(res.data));
		}).catch(e => {
			console.error(e);
		})
	}, []);

  return(
    <>
      {naverLoginButton}
    </>
  )
}

export default NaverLoginButton;