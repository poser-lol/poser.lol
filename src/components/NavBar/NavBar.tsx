import React from "react";
import * as S from "./NavBar.styled";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useLocation } from "react-router-dom"; // Import useLocation

export default function SpotList() {
  const location = useLocation(); // Get current location (URL)

  // Check if the current path is "/spot/:id"
  const isSpotPage = location.pathname.startsWith("/spot");

  return (
    <S.NavContainer>
      <S.NavLeft>{isSpotPage ? "←" : "스케이트 스팟"}</S.NavLeft>
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
