import React from "react";
import {
  ScreenButton,
  ScreenBackground,
  Container,
  ScreenText,
} from "./styles";
import overlayBackground from "../../../Assets/Images/overlay_background_page.png";
import { useNavigate } from "react-router-dom";

const OverlayContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/classic-view");
  };

  return (
    <Container>
      <ScreenBackground src={overlayBackground} />
      <ScreenText style={{ fontSize: "22px" }}>
        Please, choose one of the options below, and embark on a journey!
      </ScreenText>
      <ScreenButton
        onClick={() => console.log("hi")}
        style={{ marginLeft: "7vw" }}
      >
        Game Mode
      </ScreenButton>
      <ScreenButton onClick={handleClick}>Normal Mode</ScreenButton>
    </Container>
  );
};

export default OverlayContainer;
