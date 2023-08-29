import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "three";

const CameraSetter: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    const perspCamera = camera as PerspectiveCamera;
    perspCamera.fov = 55;
    perspCamera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

export default CameraSetter;
