import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapBox() {
  const [map, setMap] = useState(null);
  const DEFAULT_LAT = 37.497625203;
  const DEFAULT_LNG = 127.03088379;

  useEffect(() => {
    const loadKaKaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        };
        const mapInstance = new window.kakao.maps.Map(mapContainer, mapOption);

        setMap(mapInstance);
      });
    };

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_JS_KEY}&libraries=services&autoload=false`;
    script.async = true;
    script.onload = () => {
      loadKaKaoMap();
    };
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </>
  );
}
