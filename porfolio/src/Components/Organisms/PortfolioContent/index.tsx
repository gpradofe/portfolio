import React from "react";
import IntroSection from "../../Molecules/IntroSection";
import InteractiveTimeline from "../../Molecules/InteractiveTimeline";
import { PortfolioContainer } from "./styles";
import SkillsChart from "../../Molecules/SkillsChart";
import ProjectCarousel from "../../Molecules/ProjectCarousel";
const PortfolioContent: React.FC = () => {
  return (
    <PortfolioContainer>
      <IntroSection />
      <InteractiveTimeline />
      <SkillsChart />
      <ProjectCarousel />
    </PortfolioContainer>
  );
};

export default PortfolioContent;
