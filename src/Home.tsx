import React from "react";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import * as S from "../styles/home";
import MapBox from "./MapBox";
import Spot from "./components/Spot";
import NavBar from "./components/NavBar";

export function Home() {
  return (
    <S.MainContainer>
      <S.OuterSection>
        <NavBar />
        <S.ContentContainer>
          <S.MapContainer>
            <MapBox />
          </S.MapContainer>
          <S.ListContainer>
            <Spot />
          </S.ListContainer>
        </S.ContentContainer>
      </S.OuterSection>
    </S.MainContainer>
  );
}
