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
`;
export const ScreenText = styled.div`
  font-family: "sans-serif";
  font-style: "normal";
  margin-bottom: 10%;
  margin-bottom: "2vh";
  position: relative;
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
