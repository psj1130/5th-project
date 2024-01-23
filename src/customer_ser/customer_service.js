import React from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import './customer.css';
import Customer_update_news from "./customer_update_news";
import Customer_notice from "./customer_notice";
import Customer_noticedetail from './customer_detail';
import Customer_bugreport from "./customer_bugreport";

const Customer_list = () => {
  return (
    <div id="customer_list_body">
      <div id="customer_list_container">
        <div id="customer_list_div"><p>고객센터</p></div>
        <div id="cutomer_list_item">
          <NavLink to={'customer_notice'} style={{ textDecoration: "none" }} activeClassName="active"><div id="customer_list_div1"><p>공지사항</p></div></NavLink>
          <NavLink to={'customer_update'} style={{ textDecoration: "none" }} activeClassName="active"><div id="customer_list_div1"><p>업데이트</p></div></NavLink>
          <NavLink to={'customer_bug'} style={{ textDecoration: "none" }} activeClassName="active"><div id="customer_list_div1"><p>버그제보</p></div></NavLink>
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
          {/* 오른쪽에 동적으로 변경되는 페이지를 렌더링 */}
          <Routes>
            <Route path="/customer_notice" element={<Customer_notice />} />
            <Route path="/customer_update" element={<Customer_update_news />} />
            <Route path="/customer_detail/:id" element={<Customer_noticedetail />} />
            <Route path="/customer_bug" element={<Customer_bugreport />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Customer_service;