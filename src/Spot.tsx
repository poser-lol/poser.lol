import React from "react";
import { useParams, Link } from "react-router-dom";
import { spots } from "./data/spots";

export function Spot() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error("Invalid spot id");
  }

  const spot = spots.find((s) => s.id === id);
  return (
    <div>
      <h1>{spot?.name}</h1>
      <p>{spot?.summary}</p>
      <Link to="/">Back to list</Link>
    </div>
  );
}
