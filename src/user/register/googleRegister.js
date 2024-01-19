import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/config";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function GoogleRegister() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkpw, setCheckpw] = useState('');
  const code = searchParams.get('code');
  const navigate = useNavigate();
  // console.log(code);
  useEffect(() => {
    axios
      .post(`${API_URL}/auth/google/data`, {
        code: code
      },{
        headers: { accept: `application/json` }
      })
      .then((result) => {
        console.log(result);
        return;
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return(
    <div className="google-login-container">
        
    </div>
  )
}