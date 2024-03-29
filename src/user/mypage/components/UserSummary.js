import React, { useEffect, useState } from "react";
import { API_URL } from "../../../config/config";
import { useParams } from "react-router";
import axios from "axios";
import UserDonut from "./UserDonut";
import '../css/UserSummary.css'

const UserSummary = () => {
  const { id } = useParams();
  const [ user, setUser ] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/user/data/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  console.log(user);
  return(
    <div className="User__Summary__Wrapper">
      <div className="User__Name">
        {/* 사용자 투자내역 및 수익률 볼 수 있게 */}
        <h2>{user.name}님의 보유현황</h2>
        <p>남은 가상 머니 : {user.balance?.toLocaleString('ko-KR', { maximumFractionDigits: 5 })} 원</p>
      </div>
      <UserDonut userData={user}/>
    </div>
  )
}

export default UserSummary;