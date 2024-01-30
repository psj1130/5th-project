import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';

export default function Service( props ) {

  const filterdata = props.data
    .filter(item => item.title.startsWith("[공지]"))
    .slice(0, 5);

  console.log("service 부분 propsData 받음 : ", props.data);

  return(
    <div id="service-box">
      <div id="service-title">
        <p>공지사항</p>
        <Link to='/' className='component-service-link'>더 보기</Link>
      </div>
      <ul id='service-list-box'>
        {filterdata.map((item, index) => (
          <li key={index}><p className='data-text-style'>{item.title}</p></li>
        ))}
      </ul>
    </div>
  );
}
