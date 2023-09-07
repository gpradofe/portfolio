import React, { useEffect, useState } from "react";
import BootLoading from "../../Components/Organisms/BootLoading";
import ViewModeContext from "../../Contexts/ViewModeContext";
import PortfolioContent from "../../Components/Organisms/PortfolioContent";
import { ClassicViewContainer, FadeInDiv, FadeOutDiv } from "./styles";
import IntroSection from "../../Components/Molecules/IntroSection";

const ClassicViewPage: React.FC = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showBootLoading, setShowBootLoading] = useState(true);
  const [showPortfolioContent, setShowPortfolioContent] = useState(false); // new state

  useEffect(() => {
    if (isAnimationComplete) {
      setTimeout(() => {
        setShowBootLoading(false);
        setShowPortfolioContent(true); // set this to true only when boot loading is done
      }, 800); // Adjust the duration based on your FadeOutDiv animation
    }
  }, [isAnimationComplete]);

  return (
    <ViewModeContext.Provider
      value={{
        isAnimationComplete: isAnimationComplete,
        setIsAnimationComplete: setIsAnimationComplete,
      }}
    >
      <ClassicViewContainer>
        <ViewModeContext.Provider
          value={{
            isAnimationComplete: isAnimationComplete,
            setIsAnimationComplete: setIsAnimationComplete,
          }}
        >
          <FadeOutDiv shouldFade={isAnimationComplete}>
            {showBootLoading && <BootLoading />}
          </FadeOutDiv>

          <FadeInDiv shouldAppear={isAnimationComplete}>
            {showPortfolioContent && <PortfolioContent />}{" "}
          </FadeInDiv>
        </ViewModeContext.Provider>
      </ClassicViewContainer>
    </ViewModeContext.Provider>
  );
};

export default ClassicViewPage;
