import React from 'react';
import './notice.css';
import { Link } from 'react-router-dom';


export default function Notice( props ) {
  const filterdata = props.data.filter(item => item.title.startsWith("[업데이트]"));

  console.log("service 부분 propsData 받음 : ", props.data);

  return(
    <div id="notice-box">
      <div id="notice-title">
        <p>업데이트</p>
        <Link to='/customer/update' className='component-notice-link'>더 보기</Link>
      </div>
      <ul id='notice-list-box'>
        {filterdata.map((item, index) => (
          <li key={index}><p className='data-text-style'>{item.title}</p></li>
        ))}
      </ul>
    </div>
  );
}