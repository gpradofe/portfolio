import { useFrame } from "@react-three/fiber";
import { useState, useContext, useMemo } from "react";
import {
  TubeGeometry,
  CatmullRomCurve3,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from "three";
import SkillsChartContext from "../../../Contexts/SkillsChartContext";
import { Vector3D } from "../../../Types/3DTypes";
import { findShortestPath } from "../../../Helpers/SkillsChartHelper";
import React from "react";

interface Props {
  start: Vector3D;
  end: Vector3D;
}

const ConnectingLine: React.FC<Props> = ({ start, end }) => {
  const { activeHexagon, hexagonPositions, connections } =
    useContext(SkillsChartContext);
  const centerHexagon = hexagonPositions[hexagonPositions.length - 1];

  const shortestPath = useMemo(() => {
    if (activeHexagon !== null && activeHexagon !== undefined) {
      return findShortestPath(
        connections,
        centerHexagon,
        hexagonPositions[activeHexagon]
      );
    }
    return [];
  }, [activeHexagon, connections, centerHexagon, hexagonPositions]);

  const vectorsEqual = (v1: Vector3D, v2: Vector3D) =>
    v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;

  const isConnectedToActiveHexagon = shortestPath.some(
    ([pathStart, pathEnd]) =>
      (vectorsEqual(start, pathStart) && vectorsEqual(end, pathEnd)) ||
      (vectorsEqual(start, pathEnd) && vectorsEqual(end, pathStart))
  );

  const curve = new CatmullRomCurve3([
    new Vector3(start.x, start.y, start.z),
    new Vector3(end.x, end.y, end.z),
  ]);

  const geometry = new TubeGeometry(curve, 20, 0.05, 8, false);

  // Update material to reflect changes based on `isLit` and `isConnectedToActiveHexagon`
  const material = new MeshStandardMaterial({
    color: isConnectedToActiveHexagon ? 0x44d62c : 0xffffff, // Use your preferred color
    emissive: isConnectedToActiveHexagon ? 0x44d62c : 0x000000, // Set emissive color based on connection
  });

  return <mesh geometry={geometry} material={material} />;
};

export default React.memo(ConnectingLine);
