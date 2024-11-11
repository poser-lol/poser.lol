import React, { useEffect, useState } from "react";
import { spots } from "./data/spots";
import wheel from "./data/media/wheel.png";

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
    if (window.kakao) {
      const loadKaKaoMap = () => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
          level: 7,
        };
        const mapInstance = new window.kakao.maps.Map(mapContainer, mapOption);
        setMap(mapInstance);

        spots?.forEach((info) => {
          const position = new window.kakao.maps.LatLng(
            info.latitude,
            info.longitude
          );

          const content = `
            <div style="width: 70px; height: 70px; text-align: center;">
              <div 
                style="width: 100%; height: 100%; background-image: url(${wheel}); background-size: contain; background-repeat: no-repeat; background-position: center;">
              </div>
            </div>
          `;

          const customOverlay = new window.kakao.maps.CustomOverlay({
            position: position,
            content: content,
          });

          customOverlay.setMap(mapInstance);
        });
      };

      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_JS_KEY}&libraries=services&autoload=false`;
      script.async = true;
      script.onload = loadKaKaoMap;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
