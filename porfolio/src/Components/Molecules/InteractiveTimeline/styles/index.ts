import styled from "styled-components";
interface NodeProps {
  index: number;
  total: number;
}
interface CardProps {
  index: number;
  total: number;
}

export const TimelineContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ConnectingLine = styled.div<CardProps>`
  position: absolute;
  height: 2px;
  width: 100px;
  background-color: #333;
  top: ${({ index, total }) => `calc(${(index / total) * 100}% - 1px)`};
  left: ${({ index }) => (index % 2 === 0 ? "100%" : "auto")};
  right: ${({ index }) => (index % 2 !== 0 ? "100%" : "auto")};

  @media only screen and (min-width: 1280px) {
    top: ${({ index, total }) => `calc(${(index / total) * 100}% + 1.3vw)`};
  }
  @media only screen and (min-width: 1441px) {
    top: ${({ index, total }) => `calc(${(index / total) * 100}% + 0.8vw)`};
  }
  @media only screen and (max-width: 1440px) {
    top: ${({ index, total }) => `calc(${(index / total) * 100}% + 0.9vw)`};
  }
`;

export const VerticalLine = styled.div`
  margin-top: 1vh;
  height: 100vh;
  width: 4px;
  background-color: #333;
  @media only screen and (max-width: 1280px) {
    height: 60vw;
  }
  @media only screen and (max-width: 1440px) {
    height: 61vw;
  }
`;

export const Node = styled.div<NodeProps>`
  position: absolute;
  height: 12px;
  width: 12px;
  background-color: #555;
  border-radius: 50%;
  @media only screen and (max-width: 1280px) {
    top: ${({ index, total }) => `calc(${(index / total) * 100}% + 1vw)`};
  }
  @media only screen and (max-width: 1440px) {
    top: ${({ index, total }) => `calc(${(index / total) * 100}% + 0.5vw)`};
  }
  @media only screen and (min-width: 1441px) {
    top: ${({ index, total }) => `calc(${(index / total) * 100}% + 0.5vw)`};
  }
  span {
    font-size: 0.8rem;
    margin-left: ${({ index }) => (index % 2 === 0 ? "-15px" : "15px")};
    white-space: nowrap;
    background-color: #eee;
    padding: 2px 5px;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ index }) => (index % 2 === 0 ? "100%" : "auto")};
    left: ${({ index }) => (index % 2 !== 0 ? "100%" : "auto")};
    @media only screen and (max-width: 1280px) {
      right: ${({ index }) =>
        index % 2 === 0 ? "calc(100% + 0.9vw)" : "auto"};
      left: ${({ index }) => (index % 2 !== 0 ? "calc(100%)" : "auto")};
    }
    @media only screen and (max-width: 1440px) {
      right: ${({ index }) =>
        index % 2 === 0 ? "calc(100% + 0.8vw)" : "auto"};
      left: ${({ index }) => (index % 2 !== 0 ? "calc(100%)" : "auto")};
    }
    @media only screen and (min-width: 1440px) {
      right: ${({ index }) =>
        index % 2 === 0 ? "calc(100% + 0.8vw)" : "auto"};
      left: ${({ index }) => (index % 2 !== 0 ? "calc(100%)" : "auto")};
    }
  }
`;

export const InteractiveCard = styled.div<CardProps>`
  position: absolute;
  top: ${({ index, total }) => `calc(${(index / total) * 100}% - 50% + 50vh)`};
  transform: translateY(-50%);
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
  width: 12vw;
  left: ${({ index }) => (index % 2 === 0 ? "calc(100% + 110px)" : "auto")};
  right: ${({ index }) => (index % 2 !== 0 ? "calc(100% + 110px)" : "auto")};

  @media only screen and (max-width: 1280px) {
    left: ${({ index }) => (index % 2 === 0 ? "calc(100% + 8vw)" : "auto")};
    right: ${({ index }) => (index % 2 !== 0 ? "calc(100% + 8vw)" : "auto")};
  }
  @media only screen and (max-width: 1440px) {
  }
`;

export const EventTitle = styled.h3`
  @media only screen and (min-width: 1280px) {
    font-size: small;
  }
  @media only screen and (min-width: 1441px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1440px) {
    font-size: 0.9rem;
  }
`;
