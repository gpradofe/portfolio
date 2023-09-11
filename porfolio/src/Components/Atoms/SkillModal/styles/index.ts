import styled, { css, keyframes } from "styled-components";
import React from "react";
import { proficiencyToColor } from "../../../../Helpers/SkillsChartHelper";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalOverlay = styled.div`
  position: relative;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  font-family: "Roboto Mono", monospace;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #44d62c;
  }
`;

export const ProficiencyBar = styled.div<{ proficiency: number }>`
  background-color: #333;
  border-radius: 5px;
  position: relative;
  height: 10px;
  width: 100%;
  margin-top: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.proficiency * 100}%;
    background-color: ${(props) => proficiencyToColor(props.proficiency)};
    border-radius: 5px;
  }
`;
