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
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              detectRetina={true}
            />
          </MapContainer>
        </Box>
        <List sx={{ pt: 0 }}>
          {spots.map((spot, index) => (
            <React.Fragment key={spot.id}>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={`/spot/${spot.id}`}>
                  <ListItemAvatar>
                    <Avatar alt={spot.name} />
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
