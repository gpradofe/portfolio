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
  height: 300vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red; /* temporary for debugging */
`;

export const VerticalLine = styled.div`
  height: 300vh;
  width: 4px;
  background-color: #333;
`;

export const Node = styled.div<NodeProps>`
  position: absolute;
  height: 12px;
  width: 12px;
  background-color: #555;
  border-radius: 50%;
  top: ${({ index, total }) => `${((index + 1) / (total + 1)) * 100}%`};
  cursor: pointer;
  transition: background-color 0.3s;
  border: 1px solid green; /* temporary for debugging */

  &:hover {
    background-color: #777;
  }
`;

export const InteractiveCard = styled.div<CardProps>`
  position: absolute;
  top: ${({ index, total }) => `${((index + 1) / (total + 1)) * 100}%`};
  transform: translateX(100%) translateY(-50%);
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
  width: 300px;
`;
