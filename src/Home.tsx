import React from "react";
import { Link } from "react-router-dom";
import { spots } from "./data/spots";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Divider,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Breadcrumbs,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import * as S from "../styles/home";
import MapBox from "./MapBox";

// Import the default Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Map } from "react-kakao-maps-sdk";
import placeholderImage from "./data/media/placeholder.jpg";

// Configure the default icon
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export function Home() {
  return (
    <S.MainContainer>
      <S.OuterSection>
        <S.NavContainer>
          <S.NavLeft>스케이트 스팟</S.NavLeft>
          <S.NavRight>
            {" "}
            <IconButton
              edge="end"
              color="inherit"
              href="https://www.instagram.com/your_instagram_handle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
          </S.NavRight>
        </S.NavContainer>
        <S.ContentContainer>
          <S.MapContainer>
            <MapBox />
          </S.MapContainer>
          <S.ListContainer></S.ListContainer>
        </S.ContentContainer>
      </S.OuterSection>
    </S.MainContainer>
  );
}
