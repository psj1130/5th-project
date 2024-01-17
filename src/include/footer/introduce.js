import React from 'react';
import './introduce.css'

export default function Introduce() {
  const data = [
    {id: 1, title: '주소', body: '경기도 평택시 장안웃길 56'},
    {id: 2, title: '상호', body: '㈜쩐의전쟁'},
    {id: 3, title: '등록번호', body: '134-0707-5423'},
    {id: 4, title: '대표', body: '3조'},
    {id: 5, title: '전화', body: '010-1234-5678'},
  ]

  return(
    <div id="introduce-box">
      <table id='introduce-table'>
        <tbody>
          {data.map((item, id) => (
            <tr className='tr-box' key={id}>
              <td>{item.title}</td>
                <span className='td-body-style'>
                  <td>{item.body}</td>
                </span>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}