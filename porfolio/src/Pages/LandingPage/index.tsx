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
import AnimationContext from "../../Context/AnimationContext";

const LandingPage: React.FC = () => {
  return (
    <AnimationContext.Provider
      value={{
        currentTime: 0,
        setCurrentTIme: () => {},
        isPlaying: false,
        setIsPlaying: () => {},
      }}
    >
      <Container>
        <Background src={landingBackground} />
        <Canvas style={{ height: "100vh", position: "relative" }}>
          <Scene />
        </Canvas>
        <ScreenContainer>
          <ScreenBackground src={landingBackground} />
          <ScreenButton onClick={() => console.log("hi")}>
            Button 1
          </ScreenButton>
          <ScreenButton>Button 2</ScreenButton>
        </ScreenContainer>
      </Container>
    </AnimationContext.Provider>
  );
};

export default LandingPage;
