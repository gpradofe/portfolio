import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Container,
  Background,
  ScreenContainer,
  ScreenBackground,
  ScreenButton,
} from "./styles";
import landingBackground from "../../Assets/Images/background_portfolio_landing_page.png";
import Scene from "../../Components/Organisms/Scene";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Background src={landingBackground} />
      <Canvas style={{ height: "100vh", position: "relative" }}>
        <Scene />
      </Canvas>

      <ScreenContainer>
        <ScreenBackground src={landingBackground} />
        <ScreenButton onClick={() => console.log("hi")}>Button 1</ScreenButton>
        <ScreenButton>Button 2</ScreenButton>
      </ScreenContainer>
    </Container>
  );
};

export default LandingPage;
