import styled from "styled-components";
import wheel from "../../data/media/wheel.png";

const OverlayTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #333;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;

  .left,
  .right {
    flex: 1;
  }

  .center {
    font-weight: bold;
  }
`;
