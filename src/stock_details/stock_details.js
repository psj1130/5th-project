import React from "react";
import axios from "axios";
import './stock_details.css';

import { Link, Navigate, useParams } from 'react-router-dom';
import { API_URL } from "../config/config";
import useAsync from '../customHook/useAsync';

async function getStockdetail(code) {
  console.log("code",code);
  const res = await axios.get(`${API_URL}/stock_detail/${code}`);
  console.log('stockdetail왔음');
  console.log(res.data);
  return res.data;
}

function Stock_detail (){
  const { code } = useParams();
  const [state] = useAsync(() => getStockdetail(code), [code]);
  const { loading, data: pdata, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!pdata) return null;

  function processNewLines(text) {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index !== text.split('\n').length - 1 && <br />} {/* 마지막 줄에는 <br />를 추가하지 않음 */}
      </React.Fragment>
    ));
  }

  console.log(pdata.img_url);
  return(
    <div id="stock_detail_body">
      <div id="stock_detail_container">

        <div id="stock_inner_container">
            <div id="stock_1div">
              <div id="stock_img_korname_code">
                <div ><img id="stock_img" src={pdata.img_url}/></div>
                <div id="stock_korname"><p>{pdata.kor_name}</p></div>
                <div id="stock_code"><p>{pdata.code}/KRW</p></div>
              </div>
              <div id="stock_infotext"><p>정보</p></div>
            </div>
  
          <div id="stock_2div">
            <div id="stock_engname"><p>{pdata.eng_name}</p></div>
            <div id="stock_linkwarrap">
            <a href={pdata.website} target="_blank" id="stock_linkdiv"><div>웹사이트</div></a>
            <a href={pdata.block_inq} target="_blank" id="stock_linkdiv"><div >블록조회</div></a>
            <a href={pdata.orig_white} target="_blank" id="stock_linkdiv"><div >원문백서</div></a>
              {pdata.kor_white && (
                <a href={pdata.kor_white} target="_blank" id="stock_linkdiv"><div >국문백서</div></a>
              )}
            </div>
          </div>
  
          <div id="stock_3div">
            <div id="stock_firlimit_div"><p>최초발행</p></div>
            <div id="stock_firlimit"><p>{pdata.first}</p></div>
            <div id="stock_firlimit_div"><p>총 발행한도</p></div>
            <div id="stock_firlimit"><p>{pdata.total_limit}</p></div>
          </div>
          <div>
            <div id="stock_subheading"><p>디지털 자산 소개</p></div>
            <div id="stock_subtext"><p>{processNewLines(pdata.intro_digital)}</p></div>
          </div>
          
          <div>
            <div id="stock_subheading"><p>기술적 특징</p></div>
            <div id="stock_subtext"><p>{processNewLines(pdata.tech)}</p></div>
          </div>
          
          <div>
            <div id="stock_subheading"><p>현재와 미래</p></div>
            <div id="stock_subtext"><p>{processNewLines(pdata.current_future)}</p></div>
          </div>
  
          <div >
            <ul id="stock_5div">
              <li>
                해당 정보는 투자자가 디지털 자산 관련 정보를 편리하게 확인할 수 있도록 하기 위한 것일 뿐 투자 권유를 목적으로 하지 않으며, 어떠한 경우에도 그러한 목적으로 사용될 수 없습니다.
              </li>
              <li>
                <b>두나무는 제공된 정보에 의한 투자결과에 대해 법적인 책임을 지지 않으며, 투자 손실은 투자자에게 귀속됩니다.</b>
              </li>
              <li>
                상단의 표에 기재된 정보는 해당 디지털 자산 프로젝트팀, CoinMarketCap, CoinGecko에서 제공하는 정보를 그대로 반영하고 있으며, <b>두나무는 총 발행한도, 현재 유통량 및 계획표, 시가총액 등 위 데이터 산출에 일체 개입하지 않습니다.</b>
              </li>
              <li>
                정보를 제공하는 주체마다 각 수치를 산출하는 방법과 기준 등이 다를 수 있어 상이한 값이 표시될 수 있으며, 각 정보 주체가 제공하지 않은 정보는 표시되지 않을 수 있습니다.
              </li>
              <li>
                디지털 자산 소개 등의 정보는 프로젝트 팀의  백서 등에 기초하여 단순 참고용으로 작성되었으며, 변경, 오류 또는 업데이트 지연이 발생할 수 있습니다.
              </li>
              <li>
                데이터 불일치, 정보 미 제공 등과 관련하여 궁금하신 사항에 대한 보다 정확하고 신속한 답변을 얻기 위해서는 프로젝트팀을 비롯하여 각 정보 제공 주체 측에 문의하여 주시기 바랍니다.
              </li>
            </ul>
          </div>
  
        </div>
      </div>
    </div>
  )
}
export default Stock_detail;