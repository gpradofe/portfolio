import styled from "styled-components";

export const FadeOutDiv = styled.div<{ shouldFade: boolean }>`
  z-index: 1;
  transition: opacity 1s ease-out, background-color 1s ease-out;
  opacity: ${(props) => (props.shouldFade ? 0 : 1)};
  background-color: ${(props) =>
    props.shouldFade ? "#1a1a1a" : "transparent"}; // fades to #1a1a1a
`;

export const FadeInDiv = styled.div<{ shouldAppear: boolean }>`
  z-index: 2;
  transition: opacity 0.8s ease-in, background-color 0.5s ease-in;
  opacity: ${(props) => (props.shouldAppear ? 1 : 0)};
  background-color: ${(props) =>
    props.shouldAppear
      ? "#1a1a1a"
      : "transparent"}; // fades from transparent to #1a1a1a
`;
export const ClassicViewContainer = styled.div`
  background-color: #1a1a1a; // Your intro section color
  width: 100%;
  height: 100%;
`;
