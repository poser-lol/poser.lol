import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { spots } from "./data/spots";
import { Container, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InstagramIcon from "@mui/icons-material/Instagram";

export function Spot() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const spot = spots.find((s) => s.id === id);

  if (!spot) {
    throw new Error("Spot not found");
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ px: 2 }}>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            {spot.name}
          </Typography>
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
      <Container sx={{ mt: 2 }}>
        <Typography variant="body1" component="p">
          {spot.summary}
        </Typography>
      </Container>
    </>
  );
}