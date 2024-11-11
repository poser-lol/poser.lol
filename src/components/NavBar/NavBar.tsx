import React from "react";
import * as S from "./NavBar.styled";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function SpotList() {
  //   const location = useLocation();
  //   const isSpotPage = location.pathname.startsWith("/spot");

  return (
    <S.NavContainer>
      <Link to={`/`}>
        <S.NavLeft>Spots</S.NavLeft>
      </Link>
      <S.NavRight>
        <IconButton
          edge="end"
          color="inherit"
          href="https://www.instagram.com/your_instagram_handle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
      </S.NavRight>
    </S.NavContainer>
  );
}
