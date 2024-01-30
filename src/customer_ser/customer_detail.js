import React from "react";
import './customer_detail.css'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { API_URL } from "../config/config";
import useAsync from '../customHook/useAsync';
//
async function getNoticedetail(id) {
  const res = await axios.get(`${API_URL}/notice_detail/${id}`);
  console.log('왔움')
  console.log(res.data);
  return res.data;
}
function Cutomer_noticedetail() {
  const { id } = useParams();
  const [state] = useAsync(() => getNoticedetail(id), [id]);
  const { loading, data: pdata, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!pdata) return null;

  // title에서 특정 텍스트에 따라 분기
  let categoryText = "공지사항"; // 기본값 설정
  if (pdata.title.includes("업데이트")) {
    categoryText = "업데이트";
  }

  let listLink = "customer_notice"; // 기본값 설정
  if (pdata.title.includes("업데이트")) {
    listLink = "customer_update";
  }
  console.log("카테고리텍스트", categoryText);
  return(
    <div id="noticedetail_body">  
      <div id="noticedetail_container">
        <div id="noticedetail_innerctn">
          <div id="noticedetail_text"><p>{categoryText}</p></div>
          <div id="ntcdti_title_regviw">
            <div id="noticedetail_title">{pdata.title}</div>
            <div id="regdt_views">
              <div id="noticedetail_regdt"><p>등록일</p>{pdata.regdt}</div>
              <div id="noticedetail_views"><p>조회수</p>{pdata.views}</div>
            </div>
          </div>
          {pdata.notice_detail.split('\n').map((detailPart, index) => (
            <div key={index} id="ntc_detail">{detailPart}</div>
          ))}
          <Link to={`/customer/${listLink}`} style={{ textDecoration: 'none' }}>
            <div id="ntcdti_listbtn"><p>목록</p></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cutomer_noticedetail;