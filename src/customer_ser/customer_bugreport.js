import React, { useState, useRef } from "react";
import './customer_bugreport.css';
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from "../config/serverurl";
import useAsync from '../customHook/useAsync';

function Customer_bugreport (){
  const [bugTitle, setbugTitle] = useState("");
  const [bugContent, setbugContent] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const imgRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const InsertImg = async(e)=>{
    if(e && e.target){
      const reader = new FileReader();
      console.log("이미지 파일", e.target.files[0]);
      
      if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0]);
      }

      reader.onloadend = ()=>{
        const previewImgUrl = reader.result;
        if(previewImgUrl){
          setPreviewImg(previewImgUrl);
        }
      }
    }
  }

  const handlebugreportSubmit = async () => {
    if (!bugTitle.trim() || !bugContent.trim()) {
      // 유효성 검사 실패
      alert("문의 제목과 내용을 모두 입력해주세요.");
      return;
    }

    if (isSubmitting) {
      // 이미 전송 중인 경우
      return;
    }

    const upload = imgRef.current.files[0];
    const formData = new FormData();
    formData.append("imageFile", upload);
    console.log("폼데이터",formData);
    

    await axios.post(`${API_URL}/bug/`, formData)
    
    .then(res=>{
      
      console.log("버그타이틀",bugTitle);
      console.log("버그콘텐츠",bugContent);
      console.log("버그이미지",res.data.image_path);
      const data = {
        title : bugTitle,
        content:bugContent,
        img_url:res.data.image_path,
      }
      

      axios.post(`${API_URL}/bug/resend`,data)
      .then(async (res)=>{
        console.log("재송신",res);
      })
    })
  };

  return(
    <div id="bug_body">
      <div id="bug_container">
        <div id="bug_innercontainer">
          <div id="bug_reporttext"><p>버그제보</p></div>
          <div id="bug_inputdiv1">
            <p><span id="b_point">*</span> 문의 제목</p>
            <input id="bug_input1" type="text"
            value={bugTitle}
            onChange={(e)=>setbugTitle(e.target.value)}
            />
          </div>
          <div id="bug_inputdiv2">
            <p><span id="b_point">*</span> 문의 내용</p>
            <textarea id="bug_input2" type="text"
            value={bugContent}
            onChange={(e) => setbugContent(e.target.value)}
            />
          </div>
          <div id="bug_filediv">
            <p>파일 첨부</p>
            <input id="bug_inputfile" type="file"
            ref={imgRef} accept="image/*"
            onChange={(e) => InsertImg(e)}/>
            {previewImg && (
              <div>
                <label htmlFor='img1'><img src={previewImg} alt='image' style={{ width: '100px', height: '100px' }}></img></label>
                <p>선택한 이미지</p>
              </div>
            )}
            
          </div>
          <div>
            <div id="bug_sendbtn"
            onClick={()=> handlebugreportSubmit()}
            ><p>전송</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer_bugreport;