import React, { useEffect, useState } from "react";
import BootLoading from "../../Components/Organisms/BootLoading";
import ViewModeContext from "../../Contexts/ViewModeContext";
import PortfolioContent from "../../Components/Organisms/PortfolioContent";
import { FadeInDiv, FadeOutDiv } from "./styles";
import IntroSection from "../../Components/Molecules/IntroSection";

const ClassicViewPage: React.FC = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showBootLoading, setShowBootLoading] = useState(true);
  useEffect(() => {
    if (isAnimationComplete) {
      setTimeout(() => {
        setShowBootLoading(false);
      }, 1000); // 1000ms matches the fade-out duration. Adjust if needed.
    }
  }, [isAnimationComplete]);
  return (
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
        <IntroSection />
      </FadeInDiv>
    </ViewModeContext.Provider>
  );
};
export default ClassicViewPage;
