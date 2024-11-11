import React from "react";
import * as S from "./Spot.styled";
import { Spot, spots } from "../../data/spots"; // Importing Spot interface and spots array
import { Link } from "react-router-dom";

export default function SpotList() {
  return (
    <>
      {spots.map((spot: Spot) => (
        <Link to={`/spot/${spot.id}`} key={spot.id}>
          <S.ListContainer key={spot.id}>
            <S.SpotName>{spot.name}</S.SpotName>
            <S.SpotSummary>{spot.summary}</S.SpotSummary>
          </S.ListContainer>
        </Link>
      ))}
    </>
  );
}
