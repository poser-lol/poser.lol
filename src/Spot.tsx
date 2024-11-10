import React from "react";
import { useParams, Link } from "react-router-dom";
import { spots } from "./data/spots";
import { Container, Typography, Button } from "@mui/material";

export function Spot() {
  const { id } = useParams<{ id: string }>();
  const spot = spots.find((s) => s.id === id);

  if (!spot) {
    return (
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Spot not found
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Back to list
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {spot.name}
      </Typography>
      <Typography variant="body1" component="p">
        {spot.summary}
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Back to list
      </Button>
    </Container>
  );
}
