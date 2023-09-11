import React, { useContext, useEffect, useMemo, useState } from "react";
import { Shape } from "three";
import SkillsChartContext from "../../../Contexts/SkillsChartContext";
import { useSpring, animated } from "@react-spring/three";
import { getEmissiveColor } from "../../../Helpers/SkillsChartHelper";

interface HexagonProps {
  position: [number, number, number];
  skill: {
    name: string;
    description: string;
    proficiency: number;
    relevantExperience: string[];
  }; // <-- Add this
  radius?: number;
}

const Hexagon: React.FC<HexagonProps> = ({ position, skill, radius = 1.5 }) => {
  const {
    showTooltip,
    hideTooltip,
    setActiveHexagon,
    hexagonPositions,
    activeSkill,
    setActiveSkill,
  } = useContext(SkillsChartContext);
  const hexIndex = hexagonPositions.findIndex(
    (pos) =>
      pos.x === position[0] && pos.y === position[1] && pos.z === position[2]
  );

  const [isHovered, setIsHovered] = useState(false); // Add this line
  const [isClicked, setIsClicked] = useState(false);

  const shape = useMemo(() => {
    const shape = new Shape();
    const sides = 6,
      Xcenter = 0,
      Ycenter = 0;

    shape.moveTo(
      Xcenter + radius * Math.cos(0),
      Ycenter + radius * Math.sin(0)
    );

    for (let i = 1; i <= sides; i += 1) {
      shape.lineTo(
        Xcenter + radius * Math.cos((i * 2 * Math.PI) / sides),
        Ycenter + radius * Math.sin((i * 2 * Math.PI) / sides)
      );
    }
    return shape;
  }, [radius]);

  const settings = useMemo(
    () => ({
      steps: 2,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 0.2,
      bevelSize: 0.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    []
  );
  const { scaleX, scaleY, scaleZ } = useSpring({
    scaleX: isClicked ? 1.5 : 1,
    scaleY: isClicked ? 1.5 : 1,
    scaleZ: isClicked ? 3 : 1,
  });

  useEffect(() => {
    if (isHovered) {
      console.log(`Hexagon at index ${hexIndex} is hovered.`);
    }
  }, [isHovered, hexIndex]);
  return (
    <group position={position} rotation={[0, 0, Math.PI / 6]}>
      <animated.mesh
        receiveShadow
        castShadow
        scale-x={scaleX}
        scale-y={scaleY}
        scale-z={scaleZ}
        onPointerOver={(e) => {
          setIsHovered(true);
          setActiveHexagon(hexIndex);
          setIsClicked(true);
          showTooltip(skill.name, e.point.x + 1, e.point.y + 1); // <-- Use dynamic skill name
        }}
        onPointerDown={() => {
          setIsClicked(true);
          setActiveSkill(skill);
          // Inform the parent component to display the modal with detailed skill information
        }}
        onPointerOut={() => {
          setIsHovered(false);
          setIsClicked(false); // Reset the clicked status.
          hideTooltip();
          setActiveHexagon(null);
        }}
      >
        <extrudeGeometry attach="geometry" args={[shape, settings]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.6}
          metalness={0.2}
          emissive={getEmissiveColor(isHovered, skill.proficiency)}
        />
      </animated.mesh>
    </group>
  );
};

export default React.memo(Hexagon);
