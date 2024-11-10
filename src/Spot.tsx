import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { spots } from "./data/spots";
import { Container, Typography, AppBar, Toolbar, IconButton, Breadcrumbs, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function Spot() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const spot = spots.find((s) => s.id === id);

  if (!spot) {
    throw new Error("Spot not found");
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ px: 2 }}>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {spot.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 2 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Spots
          </Link>
          <Typography color="textPrimary">{spot.name}</Typography>
        </Breadcrumbs>
        <Typography variant="h4" component="h1" gutterBottom>
          {spot.name}
        </Typography>
        <Typography variant="body1" component="p">
          {spot.summary}
        </Typography>
      </Container>
    </>
  );
}