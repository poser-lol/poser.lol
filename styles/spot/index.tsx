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

  @media (min-width: 542px) {
    width: 100%;
  }
`;

export const SpotName = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  margin-left: 30px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: white;
  color: black;
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 5%;
`;
