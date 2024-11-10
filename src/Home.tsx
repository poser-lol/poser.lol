import React from "react";
import { Link } from "react-router-dom";
import { spots } from "./data/spots";

export function Home() {
  return (
    <div>
      <h1>Spots</h1>
      <ul>
        {spots.map((spot) => (
          <li key={spot.id}>
            <Link to={`/spot/${spot.id}`}>{spot.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
