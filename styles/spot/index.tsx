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

export const ImageContainer = styled.div`
  width: 100%;
  height: 30%;
  background-color: black;
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 5%;
`;
