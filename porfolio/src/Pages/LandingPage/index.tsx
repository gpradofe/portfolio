import React, { useEffect, useRef } from "react";
import { AnimationMixer, LoopRepeat, PerspectiveCamera } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import notebookModel from "../../Assets/3DModels/betterNotebook.glb";

function CameraSetter() {
  const { camera } = useThree();

  useEffect(() => {
    const perspCamera = camera as PerspectiveCamera;
    perspCamera.fov = 55; // Set this to your desired FOV
    perspCamera.updateProjectionMatrix();
  }, [camera]);

  return null;
}
function Notebook() {
  const gltf = useGLTF(notebookModel) as GLTF;

  const mixer = useRef<AnimationMixer>();

  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixer.current = new AnimationMixer(gltf.scene);
      const action = mixer.current.clipAction(gltf.animations[0]);
      action.play();
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });
  gltf.scene.position.set(0, -0.1, 4.65);
  return <primitive object={gltf.scene} dispose={null} />;
}

const LandingPage: React.FC = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={5} />
      <pointLight position={[0, 0.6, 4]} intensity={4} />
      <Notebook />
      <CameraSetter />
    </Canvas>
  );
};

export default LandingPage;
