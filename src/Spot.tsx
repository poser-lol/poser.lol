import React from "react";
import { useParams, Link } from "react-router-dom";
import { spots } from "./data/spots";
import NavBar from "./components/NavBar";
import * as S from "../styles/spot";

export function Spot() {
  const { id } = useParams<{ id: string }>();
  const spot = spots.find((s) => s.id === id);

  if (!spot) {
    throw new Error("Spot not found");
  }

  return (
    <S.MainContainer>
      <S.OuterSection>
        <NavBar />
        <S.ContentContainer>
          <S.ImageContainer> </S.ImageContainer>
          <S.SpotName>{spot.name}</S.SpotName>
        </S.ContentContainer>
      </S.OuterSection>
    </S.MainContainer>
  );
}
