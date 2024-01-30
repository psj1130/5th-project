import React, { useState, useEffect } from 'react';
import './main4.css';
import axios from 'axios';
import Notice from './components/notice';
import Service from './components/service';
import { API_URL } from '../../../config/config';

export default function Main4() {
  const [propsData, setpropsData] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/notice_detail/`)
      .then((res) => {
        const data = res.data;
        console.log("전달 받은 notice data: ", data);
        setpropsData(data); // 데이터 설정
      })
      .catch((err) => {
        console.error(err);
      }); 
  }, []);

  return (
    <div id='main4-container'>
      <div id="main4-box-con">
        <div className="main4-box">
          <div id="notice-container">
            <Service data={propsData}/>
          </div>
        </div>
        <div className="main4-box">
          <div id="service-container">
            <Notice data={propsData}/>
          </div>
        </div>
      </div>
    </div>
  );
}
