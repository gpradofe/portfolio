import React from "react";
import AmbientLighting from "../../Atoms/AmbientLighting";
import PointLighting from "../../Atoms/PointLighting";
import AnimatedNotebook from "../../Molecules/AnimatedNotebook";
import CameraSetter from "../../Atoms/CameraSetter";
const Scene: React.FC = () => {
  return (
    <>
      <AmbientLighting />
      <PointLighting />
      <AnimatedNotebook />
      <CameraSetter />
    </>
  );
};

export default Scene;
