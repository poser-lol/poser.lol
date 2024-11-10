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
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

export function Home() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ px: 2 }}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            스케이트 스팟
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
      <Box sx={{ mt: 0, mx: 0 }}>
        <Box
          sx={{
            height: "40vh", // Responsive height
            backgroundColor: "grey.300",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 0,
          }}
        >
          <Typography variant="h6">Map Placeholder</Typography>
        </Box>
        <List sx={{ m: 0, p: 0 }}>
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
              {index < spots.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </>
  );
}
