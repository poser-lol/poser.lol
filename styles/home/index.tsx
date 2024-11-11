import styled from "styled-components";

export const MainContainer = styled.main`
  ${({ theme }) => theme.mainSection};
`;

export const OuterSection = styled.section`
  ${({ theme }) => theme.outerSection};
`;

export const NavContainer = styled.div`
  ${({ theme }) => theme.navContainer};
`;

export const NavLeft = styled.div`
  ${({ theme }) => theme.navLeft};
`;

export const NavRight = styled.div`
  ${({ theme }) => theme.navRight};
`;

export const ContentContainer = styled.div`
  ${({ theme }) => theme.contentContainer};
  justify-content: center;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: white;
`;

export const ListContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  background-color: aqua;
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 5%;
`;
