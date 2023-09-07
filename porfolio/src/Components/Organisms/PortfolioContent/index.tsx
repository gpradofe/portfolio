import React from "react";
import IntroSection from "../../Molecules/IntroSection";
import InteractiveTimeline from "../../Molecules/InteractiveTimeline";
import { PortfolioContainer } from "./styles";
const PortfolioContent: React.FC = () => {
  return (
    <PortfolioContainer>
      <IntroSection />
      <InteractiveTimeline />
    </PortfolioContainer>
  );
};

export default PortfolioContent;
