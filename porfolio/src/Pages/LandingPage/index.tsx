import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Container, Background } from "./styles";
import landingBackground from "../../Assets/Images/background_portfolio_landing_page.png";
import Scene from "../../Components/Organisms/Scene";
import AnimationContext from "../../Contexts/AnimationContext";
import OverlayScreen from "../../Components/Organisms/OverlayScreen";

const LandingPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean | null>(null);

  return (
    <AnimationContext.Provider
      value={{
        currentTime,
        setCurrentTIme: setCurrentTime,
        isPlaying,
        setIsPlaying: setIsPlaying,
      }}
    >
      <Container>
        <Background src={landingBackground} />
        <Canvas style={{ height: "100vh", position: "relative" }}>
          <Scene />
        </Canvas>
        <OverlayScreen />
      </Container>
    </AnimationContext.Provider>
  );
};

export default LandingPage;
