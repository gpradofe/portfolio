import Slider from "react-slick";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ProjectCarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #181818; // Dark background
`;

export const StyledSlider = styled(Slider)`
  width: 90%;
  .slick-slide {
    transition: transform 0.5s;
    &:hover {
      transform: translateY(-10px);
    }
  }
  .slick-slide > div {
    margin: 0 3vw;
  }
  .slick-list {
    margin: 0 -1vw;
  }
`;

export const ProjectCard = styled.div`
  background: #212121; // Slightly different from the container for a layered feel
  color: #ffffff; // Primary text color
  padding: 1.5vh;
  margin: 1.5vh;
  border-radius: 1.5vh;
  box-shadow: 0px 1vh 1.5vh rgba(0, 0, 0, 0.2); // Subtle shadow for elevation
  transition: transform 0.5s;
  font-family: "Roboto", sans-serif; // Modern font, make sure to import it
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // content starts at the top
  position: relative; // Added this line

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  }

  > h3 {
    font-weight: 500;
    margin-bottom: 10px;
  }

  > p {
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 15px;
    color: #b0b0b0; // Secondary text color
  }

  > ul {
    margin-top: 10px;
    list-style-type: none;
    padding-left: 0;
    > li {
      font-size: 12px;
      font-weight: 300;
      color: #b0b0b0;
      margin-bottom: 5px;
    }
  }

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #61dafb; // GitHub color as accent
    font-weight: 500;
    margin-top: 20px;

    > svg {
      margin-right: 5px;
    }
    > iframe {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  @media only screen and (min-width: 1720px) {
    height: 30vw;
  }
  @media only screen and (max-width: 1680px) {
    height: 40vw;
  }
  @media only screen and (max-width: 1280px) {
    height: 65vw;
  }
  @media only screen and (max-width: 1440px) {
    height: 40vw;
  }
`;

export const GitHubBox = styled.div`
  background-color: #2a2a2a; // A bit darker than the card background
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  border: 1px solid #3a3a3a; // Adding a subtle border for more definition
  position: absolute;
  bottom: 2vh; // Or however much space you want from the bottom
  left: 3vh; // Adjust according to your design
  right: 3vh; // Adjust according to your design

  a {
    color: #61dafb; // GitHub color as accent
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const GitHubLogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff; // Changed to white

  span {
    margin-left: 10px;
    font-family: "Roboto", sans-serif; // Ensure using Roboto
    font-weight: 500; // Slightly bold for emphasis
    transition: color 0.3s; // Smooth transition for hover effect
  }

  &:hover {
    color: #61dafb; // GitHub color as accent on hover
  }
`;

export const DescriptionList = styled.ul`
  list-style: none;
  padding-left: 0;

  & > li {
    position: relative;
    padding-left: 1.5em;
    padding-bottom: 0.5em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 14; // dynamically adjust based on height
    -webkit-box-orient: vertical;

    &.expanded {
      -webkit-line-clamp: none;
    }

    &[data-content="•"]::before {
      content: attr(data-content);
      position: absolute;
      left: 0.5em;
      top: 0;
      color: #b0b0b0;
      font-weight: bold;
    }
  }
`;
export const WhiteLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const CardContent = styled.div`
  flex: 1; // takes up all available space
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const PageTitle = styled.h1`
  margin-top: 10vh;
  font-size: 5rem; // Adjust as per your design needs
  text-align: center; // Center align the title
  color: White; // Adjust color as per your design
  // Add other styles as required
`;
