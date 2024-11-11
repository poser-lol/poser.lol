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

// Import the default Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

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
        </S.NavContainer>
        <S.ContentContainer>
          <S.MapContainer></S.MapContainer>
          <List sx={{ pt: 0 }}>
            {spots.map((spot, index) => (
              <React.Fragment key={spot.id}>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to={`/spot/${spot.id}`}>
                    <ListItemAvatar>
                      <Avatar alt={spot.name} src={placeholderImage} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={spot.name}
                      secondary={spot.summary}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </S.ContentContainer>
      </S.OuterSection>
    </S.MainContainer>
  );
}
