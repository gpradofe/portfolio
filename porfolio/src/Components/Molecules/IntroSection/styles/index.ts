import styled from "styled-components";
import { motion } from "framer-motion";
import subtlePattern from "../../../../Assets/Images/subtle_pattern.jpg";

export const StyledSection = styled.section`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  padding: 2rem;
  background-color: #1a1a1a;
  background-image: linear-gradient(
      rgba(26, 26, 26, 0.95),
      rgba(26, 26, 26, 0.95)
    ),
    url(${subtlePattern});
  background-size: cover; // Cover the entire viewport
  background-repeat: no-repeat; // Ensure the pattern doesn't repeat
  color: #ffffff;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.3); // An inset shadow to create a vignette effect
`;
export const StyledSectionMorphed = styled.section`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 95vh;
  padding: 2rem;
  background-color: #1a1a1a;
  background-image: linear-gradient(
      rgba(26, 26, 26, 0.95),
      rgba(26, 26, 26, 0.95)
    ),
    url(${subtlePattern});
  background-size: cover; // Cover the entire viewport
  background-repeat: no-repeat; // Ensure the pattern doesn't repeat
  color: #ffffff;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.3); // An inset shadow to create a vignette effect
`;
export const StyledName = styled.div`
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2); // Text shadow to lift the name off the background
  transition: transform 0.2s, color 0.2s;
  font-size: 4rem;
  &:hover {
    transform: scale(1.05);
    color: #f0c040; // Highlight color when hovered over
  }
`;
export const StyledNameMorphed = styled.div`
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2); // Text shadow to lift the name off the background
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.05);
    color: #f0c040; // Highlight color when hovered over
  }
  @media only screen and (max-width: 1280px) {
    font-size: 1.5vw;
  }
  @media only screen and (min-width: 1680px) {
    font-size: 2rem;
    margin-bottom: 2vh;
  }
`;
export const StyledTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: "Alcova CC";
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
`;

export const StyledIntro = styled(motion.p)`
  font-size: 1.25rem;
  text-align: center;
  max-width: 80%;
  background-color: rgba(
    255,
    255,
    255,
    0.08
  ); // A very subtle light background for the intro
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); // A shadow to give depth to the paragraph
`;
export const StyledDetails = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: #ccc;
`;
export const StyledNarrative = styled.p`
  text-align: justify;
  max-width: 80%;
  line-height: 1.5;
  color: #ccc;
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 1280px) {
    font-size: 0.8vw;
  }
  @media only screen and (max-width: 1440px) {
    font-size: 0.8vh;
  }
  @media only screen and (max-width: 1680px) {
    font-size: 1.02vw;
  }
  @media only screen and (min-width: 1700px) {
    font-size: 0.8vw;
  }
`;
