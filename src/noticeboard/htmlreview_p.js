import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from "react-router-dom";
import { getCookie } from "../player/cookies";
import { API_URL } from '../config/config';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import './htmlboard.css';

const cookie = getCookie("user-cookie");

function Htmlreview_p(props) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const rid = searchParams.get('id');
  const rid = props.id
  const [newData, setNewData] = useState({
    reviewid: rid,
    title: '',
    content: '',
    author: cookie,
    created_at: ''
  });
  const navigate = useNavigate();

  const handleAdd = async () => {
    try {
      await axios.post(`${API_URL}/htmlreview`, newData);
      console.log('성공');
      window.location.reload(); // "완료" 버튼 클릭 시 페이지 리로드
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    window.location.reload();
    navigate('/htmlboard'); // "닫기" 버튼 클릭 시 페이지 이동
  };

  return (
    <div className="htmlreview_main">
      <div id='htmlreview_p_container'>
        <h2>댓글 작성</h2>
        <div id='htmlreview_p_top'>
          <TextField
            label="제목"
            variant="outlined"
            size="small"
            style={{ width: '900px', height: '50px', marginRight: '10px' }}
            value={newData.title}
            onChange={(e) => setNewData({ ...newData, title: e.target.value })}
          />
          <TextField
            label="작성자"
            variant="outlined"
            size="small"
            style={{ width: '250px', height: '50px', marginRight: '10px' }}
            value={cookie}
            onChange={(e) => setNewData({ ...newData, author: e.target.value })}
          />
        </div>
        <div id='htmlreview_p_main'>
          <TextField
            id='htmlreview_p_main'
            label="내용"
            variant="outlined"
            size="small"
            multiline
            maxRows={40}
            minRows={5}
            // style={{ width: '1200px', height: '400px',marginBottom: '20px' }}
            value={newData.content}
            onChange={(e) => setNewData({ ...newData, content: e.target.value })}
          />
        </div>
      </div>
      <div id="plusBtns_btns">
        <button id='submit_btn' variant="contained" onClick={handleAdd}>
          완료
        </button>
        <button id='submit_btn' variant="contained" onClick={handleClose}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default Htmlreview_p;
