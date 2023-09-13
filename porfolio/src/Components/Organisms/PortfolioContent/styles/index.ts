import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  height: 100vh;
`;

export const IntroSectionDiv = styled.div<{ widthPercentage: number }>`
  width: ${(props) => 100 - props.widthPercentage}%;
  transition: width 0.3s ease;
`;

export const DetailsTimelineDiv = styled.div<{ widthPercentage: number }>`
  width: ${(props) => props.widthPercentage}%;
  overflow: hidden;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
