import React from "react";
import { useParams, Link } from "react-router-dom";
import { spots } from "./data/spots";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Breadcrumbs,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export function Spot() {
  const { id } = useParams<{ id: string }>();
  const spot = spots.find((s) => s.id === id);

  if (!spot) {
    throw new Error("Spot not found");
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ px: 2 }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ flexGrow: 1, color: "inherit" }}
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6">스케이트 스팟</Typography>
            </Link>
            <Typography variant="h6" fontWeight="bold">
              {spot.name}
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
      <Box sx={{ mt: 2, px: 2 }}>
        <Typography variant="h6" component="h1" gutterBottom>
          {spot.name}
        </Typography>
        <Typography variant="body1" component="p">
          {spot.summary}
        </Typography>
      </Box>
    </>
  );
}
