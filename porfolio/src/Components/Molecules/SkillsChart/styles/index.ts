import { Tooltip } from "react-tooltip";
import styled from "styled-components";

export const CanvasContainer = styled.div`
  height: 80vh;
  width: 100%;
  overflow: auto;
`;
export const SkillsChartContainer = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const StyledTooltip = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  pointer-events: none;
  transform: translate(-50%, -100%);
  font-size: 0.9rem;
`;
export const InvisibleAnchor = styled.a`
  display: none;
`;
export const GradientLegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: white;
`;
export const ProficiencyDisplay = styled.div`
  font-size: 1.2rem; // Increase the font size for prominence
  margin-top: 10px; // Add some spacing above the proficiency display
  padding: 5px 10px; // Some padding to give it more space
  border-radius: 4px; // Optional: rounded corners for aesthetic reasons
  color: white; // Darker text color for better contrast
`;
export const GradientBar = styled.div`
  width: 50vh;
  height: 25px;
  background: linear-gradient(
    90deg,
    #e61500,
    #e68900,
    #ebc200,
    #96dd70,
    #63c24e,
    #34a72e,
    #0d8e15
  );
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const Handle = styled.div<{ position?: string }>`
  width: 5px;
  height: 35px;
  background-color: white;
  position: absolute;
  top: -5px;
  left: ${(props) => props.position || "0%"};
  cursor: pointer;
`;
