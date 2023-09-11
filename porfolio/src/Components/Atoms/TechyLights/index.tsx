import React, { FC } from "react";

interface ShadowProps {
  "shadow-mapSize-width": number;
  "shadow-mapSize-height": number;
  "shadow-radius": number;
  castShadow: boolean;
}

const TechyLights: FC = () => {
  const shadowProps: ShadowProps = {
    "shadow-mapSize-width": 1024,
    "shadow-mapSize-height": 1024,
    "shadow-radius": 10,
    castShadow: true,
  };

  return (
    <>
      <pointLight
        position={[10, 10, 5]}
        intensity={30}
        color="purple"
        {...shadowProps}
      />{" "}
      <pointLight
        position={[-10, 10, 5]}
        intensity={30}
        color="purple"
        {...shadowProps}
      />{" "}
      <pointLight
        position={[-10, -10, 4]}
        intensity={30}
        color="purple"
        {...shadowProps}
      />{" "}
      <pointLight
        position={[10, -10, 4]}
        intensity={30}
        color="purple"
        {...shadowProps}
      />{" "}
      <pointLight
        position={[5, 5, 4]}
        intensity={30}
        color="purple"
        {...shadowProps}
      />{" "}
      <pointLight
        position={[5, -5, 4]}
        intensity={30}
        color="purple"
        {...shadowProps}
      />{" "}
      <pointLight
        position={[-5, 5, 4]}
        intensity={30}
        color="purple"
        {...shadowProps}
      />{" "}
      <pointLight
        position={[-5, -5, 4]}
        intensity={30}
        color="purple"
        {...shadowProps}
      />{" "}
    </>
  );
};

export default TechyLights;
