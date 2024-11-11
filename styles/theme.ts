import { DefaultTheme } from "styled-components";

const size = {
  smallMobile: "360px",
  notMobileHeight: "788px",
  notMobileWidth: "541px",
};

export const theme: DefaultTheme = {
  smallMobile: `@media screen and (max-width: ${size.smallMobile})`,
  landscape: `media screen and (min-width: ${size.notMobileWidth}) and (max-height: ${size.notMobileHeight})`,
  mobile: `@media screen and (max-width: ${size.notMobileWidth})`,

  mainSection: `
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  `,

  outerSection: `
  width: 100%;
  height: 100%;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  // @media (min-width: 542px) {
  //   width: 360px;
  //   height: 788px;
  // }

  // @media (min-width: 542px) and (max-height: 788px) {
  //   width: 360px;
  //   height: 100%;
  // }
  `,

  navContainer: `
  width: 100%;
  height: 7%;

  position: fixed;
  display : flex;
  justify-content: space-between;
  align-items : center;
  z-index: 1;
  `,

  navLeft: `
  padding-left: 20px;
  color: white;
  font-weight: bold;
  `,

  section: `
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 48px;
  overflow: scroll;

  // @media (min-width: 542px) {
  //   width: 360px;
  //   height: 788px;
  //   overflow: scroll;
  // }

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  `,

  contentContainer: `
  width: 86%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `,
};
