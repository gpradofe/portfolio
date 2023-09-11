import React, { createContext } from "react";
import { Vector3D } from "../Types/3DTypes";

type SkillsChartContextType = {
  content: string | null;
  position: { x: number; y: number } | null;
  showTooltip: (content: string, x: number, y: number) => void;
  hideTooltip: () => void;
  lightPosition: [number, number, number];
  setLightPosition: (pos: [number, number, number]) => void;
  hexagonPositions: { x: number; y: number; z: number }[];
  setHexagonPositions: (
    positions: { x: number; y: number; z: number }[]
  ) => void;
  activeHexagon: number | null;
  setActiveHexagon: (index: number | null) => void;
  connections: [Vector3D, Vector3D][]; // This is the changed line
  setConnections: (connections: [Vector3D, Vector3D][]) => void; // Add this for updating connections
  activeSkill: { name: string; description: string } | null;
  setActiveSkill: (
    skill: {
      name: string;
      description: string;
      proficiency: number;
      relevantExperience: string[];
    } | null
  ) => void;
};

const SkillsChartContext = createContext<SkillsChartContextType>({
  content: null,
  position: null,
  showTooltip: () => {},
  hideTooltip: () => {},
  lightPosition: [0, 0, 5],
  setLightPosition: () => {},
  hexagonPositions: [],
  setHexagonPositions: () => {},
  activeHexagon: null,
  setActiveHexagon: () => {},
  connections: [],
  setConnections: () => {},
  activeSkill: null,
  setActiveSkill: () => {},
});

export default SkillsChartContext;
