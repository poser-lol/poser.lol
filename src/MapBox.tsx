import React from "react";
import { Map } from "react-kakao-maps-sdk";

export default function MapBox() {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
      style={{ width: "100%", height: "100%" }} // 지도 크기
      level={3} // 지도 확대 레벨
    ></Map>
  );
}
