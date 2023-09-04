import styled from "styled-components";
export const FadeOutDiv = styled.div<{ shouldFade: boolean }>`
  z-index: 1;
  transition: opacity 1s ease-out;
  opacity: ${(props) => (props.shouldFade ? 0 : 1)};
`;

export const FadeInDiv = styled.div<{ shouldAppear: boolean }>`
  z-index: 2;
  transition: opacity 1s ease-in;
  opacity: ${(props) => (props.shouldAppear ? 1 : 0)};
`;
