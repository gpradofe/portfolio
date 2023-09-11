import React, { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import ConnectingLine from "../../Atoms/ConnectingLine";
import {
  CanvasContainer,
  GradientBar,
  GradientLegendContainer,
  Handle,
  ProficiencyDisplay,
  SkillsChartContainer,
  StyledTooltip,
} from "./styles";
import {
  SkillsChartCameraSetter,
  createConnections,
  createHexagonalGrid,
  getSkillByIndex,
} from "../../../Helpers/SkillsChartHelper";
import { Html } from "@react-three/drei";
import { TooltipData } from "../../../Types/ToolTipTypes";
import SkillsChartContext from "../../../Contexts/SkillsChartContext";
import TechyLights from "../../Atoms/TechyLights";
import Hexagon from "../../Atoms/Hexagon";
import SkillModal from "../../Atoms/SkillModal";
import { Text } from "@react-three/drei";

const SkillsChart: React.FC = () => {
  const [handlePosition, setHandlePosition] = useState("0%");

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    const barRect = e.currentTarget.getBoundingClientRect();
    const handleWidth = 5; // width of the handle in pixels

    // Calculate the drag position, subtracting half the handle width to center the handle on the cursor
    let percentage =
      ((e.clientX - barRect.left - handleWidth / 2) / barRect.width) * 100;

    // Ensure percentage is between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage));

    setHandlePosition(`${percentage}%`);
  };

  const centralHexRadius = 3; // For example, twice the regular size
  const regularHexRadius = 1.5;
  const circleCount = 2;
  const [hexagonPositions, setHexagonPositions] = useState(() =>
    createHexagonalGrid(circleCount, centralHexRadius, regularHexRadius)
  );
  const [activeHexagon, setActiveHexagon] = useState<number | null>(null);
  const [connections, setConnections] = useState(() =>
    createConnections(hexagonPositions, regularHexRadius)
  );
  const [tooltipData, setTooltipData] = useState<TooltipData>({
    content: null,
    position: null,
  });
  const showTooltip = useCallback((content: string, x: number, y: number) => {
    setTooltipData({ content, position: { x, y } });
  }, []);

  const hideTooltip = useCallback(() => {
    setTooltipData({ content: null, position: null });
  }, []);
  const [lightPosition, setLightPosition] = useState<[number, number, number]>([
    0, 0, 10,
  ]);
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    description: string;
    proficiency: number;
    relevantExperience: string[];
  } | null>(null);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      setRotation({ x: normalizedY / 20, y: -normalizedX / 20 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <SkillsChartContext.Provider
      value={{
        content: tooltipData.content,
        position: tooltipData.position,
        showTooltip,
        hideTooltip,
        lightPosition,
        setLightPosition,
        hexagonPositions,
        setHexagonPositions,
        setActiveHexagon,
        activeHexagon,
        connections,
        setConnections,
        activeSkill,
        setActiveSkill,
      }}
    >
      <SkillsChartContainer>
        <CanvasContainer>
          <Canvas shadows={true}>
            <Text
              position={[0, 16, 0]}
              fontSize={3}
              color="white"
              rotation={[rotation.x, rotation.y, 0]}
            >
              Skills Chart
            </Text>
            <SkillsChartCameraSetter
              circleCount={circleCount}
              centralHexRadius={centralHexRadius}
              regularHexRadius={regularHexRadius}
            />
            <ambientLight intensity={0.2} />
            <TechyLights />
            <group rotation={[rotation.x, rotation.y, Math.PI / 6]}>
              {connections.map((connection, idx) => {
                return (
                  <ConnectingLine
                    key={idx}
                    start={
                      new Vector3(
                        connection[0].x,
                        connection[0].y,
                        connection[0].z
                      )
                    }
                    end={
                      new Vector3(
                        connection[1].x,
                        connection[1].y,
                        connection[1].z
                      )
                    }
                  />
                );
              })}

              {hexagonPositions.map((pos, idx) => {
                const skill = getSkillByIndex(idx);
                if (!skill) return null;

                if (idx === hexagonPositions.length - 1) {
                  return (
                    <Hexagon
                      key={idx}
                      position={[pos.x, pos.y, pos.z]}
                      skill={skill}
                      radius={centralHexRadius}
                    />
                  );
                }
                return (
                  <Hexagon
                    key={idx}
                    position={[pos.x, pos.y, pos.z]}
                    skill={skill}
                    radius={regularHexRadius}
                  />
                );
              })}
            </group>
            {tooltipData.position && (
              <Html
                position={[tooltipData.position.x, tooltipData.position.y, 0]}
              >
                <StyledTooltip>{tooltipData.content}</StyledTooltip>
              </Html>
            )}
          </Canvas>
        </CanvasContainer>
        <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
        <GradientLegendContainer>
          <GradientBar onMouseMove={handleDrag}>
            <Handle position={handlePosition} />
          </GradientBar>
          <ProficiencyDisplay>
            Proficiency: {parseFloat(handlePosition).toFixed(2)}%
          </ProficiencyDisplay>
        </GradientLegendContainer>
      </SkillsChartContainer>
    </SkillsChartContext.Provider>
  );
};

export default React.memo(SkillsChart); // wrap export in React.memo for performance
