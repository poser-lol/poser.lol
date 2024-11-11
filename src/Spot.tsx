import React from "react";
import { useParams, Link } from "react-router-dom";
import { spots } from "./data/spots";
import InstagramIcon from "@mui/icons-material/Instagram";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
          <S.ImageContainer></S.ImageContainer>
        </S.ContentContainer>
      </S.OuterSection>
    </S.MainContainer>
  );
}
