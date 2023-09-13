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
`;

export const VerticalLine = styled.div`
  margin-top: 1vh;
  height: 100vh;
  width: 4px;
  background-color: #333;
`;

export const Node = styled.div<NodeProps>`
  position: absolute;
  height: 12px;
  width: 12px;
  background-color: #555;
  border-radius: 50%;
  top: ${({ index, total }) => `calc(${(index / total) * 100}% - 6px)`};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #777;
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
  width: 20vh;
  left: ${({ index }) => (index % 2 === 0 ? "calc(100% + 110px)" : "auto")};
  right: ${({ index }) => (index % 2 !== 0 ? "calc(100% + 110px)" : "auto")};
`;
