import Slider from "react-slick";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ProjectCarouselContainer = styled.div`
  width: 100%;
  display: flex;
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
  width: 300px;
  height: 450px;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); // Subtle shadow for elevation
  transition: transform 0.5s;
  font-family: "Roboto", sans-serif; // Modern font, make sure to import it

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

export const StyledCodeSnippet = styled(SyntaxHighlighter).attrs(() => ({
  style: solarizedlight,
  language: "javascript", // you can change the language accordingly
}))`
  width: 80%;
  max-height: 70%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
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
