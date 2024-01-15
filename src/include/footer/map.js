import React, { useEffect } from 'react';
import './map.css';

export default function Map() {
  
  useEffect(() => {
    // 'kakao' 객체 로드
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=aef4ab98014a9637b18069532e95629b&libraries=services,drawing`;
    document.head.appendChild(script);

    script.onload = () => {
      console.log('kakao script loaded!');
      // 'kakao' 객체가 로드된 후에 실행되는 코드
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.0645081, 127.080787), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      // 마커를 생성하고 지도에 표시합니다
      const markerPosition = new window.kakao.maps.LatLng(37.0645081, 127.080787);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    };
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  return <div id="map-container"><div id="map"></div></div>;
}
