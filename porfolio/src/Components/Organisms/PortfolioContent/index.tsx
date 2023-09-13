import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IntroSection from "../../Molecules/IntroSection";
import DetailsSection from "../../Molecules/DetailsSection";
import InteractiveTimeline from "../../Molecules/InteractiveTimeline";
import SkillsChart from "../../Molecules/SkillsChart";
import ProjectCarousel from "../../Molecules/ProjectCarousel";
import { Container, DetailsTimelineDiv, IntroSectionDiv } from "./styles";

const PortfolioContent: React.FC = () => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const [hijackScroll, setHijackScroll] = useState(true);

  const handleWheel = (e: WheelEvent) => {
    if (!hijackScroll) return;

    if (e.deltaY > 0) {
      setWidthPercentage((prevWidth) => Math.min(prevWidth + 3, 50));
    } else {
      setWidthPercentage((prevWidth) => Math.max(prevWidth - 3, 0));
    }

    if (widthPercentage >= 50) {
      setHijackScroll(false);
    } else {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [widthPercentage, hijackScroll]);

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <IntroSectionDiv widthPercentage={widthPercentage}>
          <IntroSection isMorphed={widthPercentage === 50} />
        </IntroSectionDiv>
        <DetailsTimelineDiv widthPercentage={widthPercentage}>
          <InteractiveTimeline />
        </DetailsTimelineDiv>
      </div>
      <SkillsChart />
      <ProjectCarousel />
    </Container>
  );
};

export default PortfolioContent;
