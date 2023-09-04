import React, { useContext, useEffect, useState } from "react";
import { ScreenContainer, LoadingSpinner, FadeContainer } from "./styles";
import AnimationContext from "../../../Contexts/AnimationContext";
import OverlayContainer from "../../Molecules/OverlayContainer";
const OverlayScreen: React.FC = () => {
  const { currentTime, isPlaying } = useContext(AnimationContext);
  const [showLoading, setShowLoading] = useState(false);
  const [showScreen, setShowScreen] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  const [loadingOpacity, setLoadingOpacity] = useState(0);
  const [screenOpacity, setScreenOpacity] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      setAnimationStarted(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying && animationStarted) {
      setShowLoading(true);
      setLoadingOpacity(1); // Fade in the loading spinner

      const timer = setTimeout(() => {
        setLoadingOpacity(0); // Fade out the loading spinner
        setTimeout(() => {
          setShowLoading(false);
          setShowScreen(true);
          setScreenOpacity(1); // Fade in the screen
        }, 750); // Duration of the fade out of the loading spinner
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, animationStarted]);

  return (
    <ScreenContainer>
      {showLoading && (
        <FadeContainer opacityValue={loadingOpacity}>
          <LoadingSpinner
            style={{
              opacity: loadingOpacity,
              transition: "opacity 0.75s ease-in-out",
            }}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="bar4"></div>
            <div className="bar5"></div>
            <div className="bar6"></div>
            <div className="bar7"></div>
            <div className="bar8"></div>
            <div className="bar9"></div>
            <div className="bar10"></div>
            <div className="bar11"></div>
            <div className="bar12"></div>
          </LoadingSpinner>
        </FadeContainer>
      )}
      {showScreen && (
        <FadeContainer opacityValue={screenOpacity}>
          <OverlayContainer />
        </FadeContainer>
      )}
    </ScreenContainer>
  );
};
export default OverlayScreen;
