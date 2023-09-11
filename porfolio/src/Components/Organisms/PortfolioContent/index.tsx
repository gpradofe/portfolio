import React from "react";
import IntroSection from "../../Molecules/IntroSection";
import InteractiveTimeline from "../../Molecules/InteractiveTimeline";
import { PortfolioContainer } from "./styles";
import SkillsChart from "../../Molecules/SkillsChart";
const PortfolioContent: React.FC = () => {
  return (
    <PortfolioContainer>
      <IntroSection />
      <InteractiveTimeline />
      <SkillsChart />
    </PortfolioContainer>
  );
};

export default PortfolioContent;
