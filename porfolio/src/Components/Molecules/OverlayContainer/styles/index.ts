import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
`;
export const ScreenButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
  position: relative;
  &:disabled {
    background-color: grey; // or whatever grey you want
    cursor: not-allowed;
  }
  @media only screen and (max-width: 1280px) {
    font-size: 0.9vw;
  }
`;
export const ScreenText = styled.div`
  font-family: "sans-serif";
  font-style: "normal";
  margin-bottom: 10%;
  margin-bottom: "2vh";
  position: relative;
  @media only screen and (max-width: 1280px) {
    font-size: 1.2vw;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 22px;
  }
`;
export const ScreenBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
`;
