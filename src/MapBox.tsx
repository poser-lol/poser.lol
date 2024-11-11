import React, { useEffect, useState } from "react";
import { spots } from "./data/spots";
import wheel from "./data/media/wheel.png";

declare global {
  interface Window {
    kakao: any;
  }
}

type position = {
  lat: number;
  lng: number;
};

export default function MapBox() {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState<position>({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [position, setPosition] = useState<position>({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });

    navigator.geolocation.watchPosition((pos) => {
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  useEffect(() => {
    const loadKaKaoMap = () => {
      if (window.kakao && !map) {
        window.kakao.maps.load(() => {
          const mapContainer = document.getElementById("map");
          const mapOption = {
            center: new window.kakao.maps.LatLng(center.lat, center.lng),
            level: 8,
          };
          const mapInstance = new window.kakao.maps.Map(
            mapContainer,
            mapOption
          );
          setMap(mapInstance);

          const userPositionMarker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(position.lat, position.lng),
            map: mapInstance,
            title: "Your Current Location",
          });

          navigator.geolocation.watchPosition((pos) => {
            const newPos = new window.kakao.maps.LatLng(
              pos.coords.latitude,
              pos.coords.longitude
            );
            userPositionMarker.setPosition(newPos);
            mapInstance.setCenter(newPos);
          });

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
        });
      }
    };

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_JS_KEY}&libraries=services&autoload=false`;
    script.async = true;
    script.onload = loadKaKaoMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [center]);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
