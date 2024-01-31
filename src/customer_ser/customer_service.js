import React from "react";
import {  NavLink, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router';
import './customer.css';
import Customer_update_news from "./customer_update_news";
import Customer_notice from "./customer_notice";
import Customer_noticedetail from './customer_detail';
import Customer_bugreport from "./customer_bugreport";
import { getCookie } from '../player/cookies';

// export function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// }

const Customer_list = () => { 
  const navigate = useNavigate();

  const cookie = getCookie('user-cookie');

  return (
    <div id="customer_list_body">
      <div id="customer_list_container">
        <div id="cutomer_list_item">
          <div id="customer_list_div"><p>고객센터</p></div>
          <NavLink to={'notice'} style={{ textDecoration: "none" }} activeClassName="active"><div id="customer_list_div1"><p>공지사항</p></div></NavLink>
          <NavLink to={'update'} style={{ textDecoration: "none" }} activeClassName="active"><div id="customer_list_div1"><p>업데이트</p></div></NavLink>
          <button id="bug_btn_style" style={{ textDecoration: "none" }}  
          onClick={() => {
          if (cookie) {
            navigate(`/customer/bug`);
          } else if (!cookie) {
            alert('로그인 후 이용해주세요 !');
            navigate('/login');
          }
        }}
        ><div id="customer_list_div1"><p>버그제보</p></div></button>
        </div>
      </div>
    </div>
  );
};

function Customer_service() {
  return (
    <>
      <div id="customer_body">
        <div id="customer_container">
          <Customer_list id="customer_list" />
          <Routes>
            <Route path="/notice" element={<Customer_notice />} />
            <Route path="/update" element={<Customer_update_news />} />
            <Route path="/detail/:id" element={<Customer_noticedetail />} />
            <Route path="/bug" element={<Customer_bugreport />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Customer_service;