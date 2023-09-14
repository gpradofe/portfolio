import styled, { keyframes } from "styled-components";

export const ScreenContainer = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28.5vw;
  height: 32vh;
  /* Trapezoidal shape */
  clip-path: polygon(0 0%, 100% 0, 98.3% 98%, 1.7% 98.4%);

  @media only screen and (max-width: 2000px) {
    width: 33vw;
    height: 33vh;
  }

  border-radius: 1%; /* Slightly rounded corners; adjust as needed */
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15); /* Subtle shadow for depth */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Thin border for bezel illusion */
`;

const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0.25; }
`;

export const LoadingSpinner = styled.div`
  position: relative;
  width: 54px;
  height: 54px;
  display: inline-block;

  background: transparent;
  padding: 10px;
  border-radius: 10px;

  div {
    width: 6%;
    height: 16%;
    background: #fff;
    position: absolute;
    left: 49%;
    top: 43%;
    opacity: 0;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    animation: ${fade} 1s linear infinite;
  }

  div.bar1 {
    transform: rotate(0deg) translate(0, -130%);
    animation-delay: 0s;
  }

  div.bar2 {
    transform: rotate(30deg) translate(0, -130%);
    animation-delay: -0.9167s;
  }

  div.bar3 {
    transform: rotate(60deg) translate(0, -130%);
    animation-delay: -0.833s;
  }

  div.bar4 {
    transform: rotate(90deg) translate(0, -130%);
    animation-delay: -0.7497s;
  }

  div.bar5 {
    transform: rotate(120deg) translate(0, -130%);
    animation-delay: -0.667s;
  }

  div.bar6 {
    transform: rotate(150deg) translate(0, -130%);
    animation-delay: -0.5837s;
  }

  div.bar7 {
    transform: rotate(180deg) translate(0, -130%);
    animation-delay: -0.5s;
  }

  div.bar8 {
    transform: rotate(210deg) translate(0, -130%);
    animation-delay: -0.4167s;
  }

  div.bar9 {
    transform: rotate(240deg) translate(0, -130%);
    animation-delay: -0.333s;
  }

  div.bar10 {
    transform: rotate(270deg) translate(0, -130%);
    animation-delay: -0.2497s;
  }

  div.bar11 {
    transform: rotate(300deg) translate(0, -130%);
    animation-delay: -0.167s;
  }

  div.bar12 {
    transform: rotate(330deg) translate(0, -130%);
    animation-delay: -0.0833s;
  }
`;

export const FadeContainer = styled.div<{ opacityValue: number }>`
  opacity: ${(props) => props.opacityValue};
  transition: opacity 1.5s ease-in-out;
`;
