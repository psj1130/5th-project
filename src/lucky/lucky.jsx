import { getCookie } from "../player/cookies";
import React, { useState } from 'react';
import './lucky.css';
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import { API_URL } from '../config/serverurl';

async function getLucky() {
  const res = await axios.get(`${API_URL}/lucky`);
  console.log(res,"1");
  return res.data;
}

const TodayFortune = () => {
  const [state] = useAsync(() => getLucky(), []);
  const { data: fortunes } = state;
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const cookie = getCookie('loginCookie');
  let name = cookie ? cookie : "이용자";

  const getFortunesFromDatabase = async () => {
    try {
      const response = await axios.get(`${API_URL}/lucky`);
      return response.data; // API 응답이 운세 객체 배열인 것으로 가정합니다.
    } catch (error) {
      console.error("운세 데이터를 불러오는 중 오류 발생", error);
      throw error;
    }
  };

  const generateFortune = async (index) => {
    try {
      const fortunesFromDB = await getFortunesFromDatabase();
      if (selectedCardIndex === index) {
        // 이미 선택된 카드를 다시 클릭하면 초기화
        setSelectedCardIndex(null);
      } else {
        const availableFortunes = fortunes
          .filter((_, idx) => idx !== selectedCardIndex) // 이전 선택된 카드를 제외
          .sort(() => Math.random() - 0.5) // 배열을 무작위로 섞기
          .slice(0, 5); // 첫 5개만 선택

        const randomIndex = Math.floor(Math.random() * availableFortunes.length);
        const selectedFortune = availableFortunes[randomIndex];

        // 클릭 후 이미지 설정
        setSelectedCardIndex(index);
        fortunes((prevFortunes) => {
          const newFortunes = [...prevFortunes];
          newFortunes[index] = selectedFortune;
          return newFortunes;
        }); 
        // 클릭 시 배경 이미지를 변경하고 초기화 상태로 복원
        setRotateY(0);
        setRotateX(0);
      }
    } catch (error) {
      // 오류 처리 - 오류 상태를 설정하는 등의 작업을 수행할 수 있습니다.
    }
  };

  const handleMouseMove = (e) => {
    if (selectedCardIndex === null) {
      const { clientX, clientY } = e;
      const { left, top, width, height } = e.target.getBoundingClientRect();
  
      const rotateYPercent = ((clientX - left) / width - 0.5) * 2;
      const rotateXPercent = ((clientY - top) / height - 0.5) * 2;
  
      setRotateY(rotateYPercent * 15);
      setRotateX(rotateXPercent * 15);
    }
  };

  return (
    <div>
      <h1 id='luckyh1'>{name}님의 오늘의 운세!</h1>
      <div className="fortune-cards-container">
        {fortunes && fortunes.slice(0,5).sort(() => Math.random()-0.5).map((fortune, index) => (
          <div
            key={index}
            className={`fortune-card ${selectedCardIndex === index ? 'selected' : ''}`}
            onMouseMove={handleMouseMove}
            onClick={() => generateFortune(index)}
          >
            <div
              className="card-content"
              style={{
                transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
              }}
            >
              {selectedCardIndex === index ? <p id="luckyp"><b>{fortune.content}</b></p> : <b style={{fontSize:"20px"}}>쩐의 전쟁</b>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayFortune;