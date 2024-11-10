import React from "react";
import { Link } from "react-router-dom";
import { spots } from "./data/spots";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Box,
} from "@mui/material";

export function Home() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Spots
      </Typography>
      <Box
        sx={{
          height: 300,
          backgroundColor: "grey.300",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Map Placeholder</Typography>
      </Box>
      <List>
        {spots.map((spot, index) => (
          <React.Fragment key={spot.id}>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={`/spot/${spot.id}`}>
                <ListItemText primary={spot.name} secondary={spot.summary} />
              </ListItemButton>
            </ListItem>
            {index < spots.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
}
