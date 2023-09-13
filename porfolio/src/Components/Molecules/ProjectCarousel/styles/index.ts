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
  height: 100%; // This ensures that the card occupies the full height of its container
  min-height: 45vh; // adjust this value based on your design needs
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
`;

export const RepoCard = styled.div`
  border: 1px solid #e1e4e8;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 6px;
  h4 {
    font-weight: 600;
    margin-bottom: 8px;
  }
  p {
    color: #586069;
    margin-bottom: 8px;
  }
  span {
    font-size: 12px;
    background-color: #f1f8ff;
    color: #0366d6;
    padding: 2px 6px;
    border-radius: 3px;
  }
  margin-top: 10px;
  font-size: 12px;
`;

export const CodeModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
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

    &[data-content="•"]::before {
      content: attr(data-content);
      position: absolute;
      left: 0.5em; // adjusted position
      top: 0; // added top positioning
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
  margin-bottom: 20vh;
  font-size: 5rem; // Adjust as per your design needs
  text-align: center; // Center align the title
  color: White; // Adjust color as per your design
  // Add other styles as required
`;
