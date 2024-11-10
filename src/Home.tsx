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
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ px: 2 }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ flexGrow: 1, color: "inherit" }}
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Typography variant="h6" fontWeight="bold">
              스케이트 스팟
            </Typography>
          </Breadcrumbs>
          <IconButton
            edge="end"
            color="inherit"
            href="https://www.instagram.com/your_instagram_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>
        <Box
          sx={{
            height: "40vh", // Responsive height
            width: "100%",
            backgroundColor: "grey.300",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MapContainer
            center={[37.5665, 126.978]}
            zoom={11}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {spots.map((spot) => (
              <Marker key={spot.id} position={[spot.latitude, spot.longitude]}>
                <Popup>
                  <Typography variant="body2">{spot.name}</Typography>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Box>
        <List sx={{ pt: 0 }}>
          {spots.map((spot, index) => (
            <React.Fragment key={spot.id}>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={`/spot/${spot.id}`}>
                  <ListItemAvatar>
                    <Avatar alt={spot.name} src={placeholderImage} />
                  </ListItemAvatar>
                  <ListItemText primary={spot.name} secondary={spot.summary} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </>
  );
}
