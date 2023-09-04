import React, { useContext, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import notebookModel from "../../../Assets/3DModels/betterNotebook2.glb";
import {
  AnimationMixer,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
} from "three";
import AnimationContext from "../../../Contexts/AnimationContext";

const AnimatedNotebook: React.FC = () => {
  const gltf = useGLTF(notebookModel) as GLTF;
  const mixer = useRef<AnimationMixer>();

  // State for viewport dimensions
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { currentTime, isPlaying, setIsPlaying } = useContext(AnimationContext);

  useEffect(() => {
    // Update dimensions when window is resized
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixer.current = new AnimationMixer(gltf.scene);
      const action = mixer.current.clipAction(gltf.animations[0]);
      action.timeScale = 3;
      action.play();

      // Set animation as playing when it starts
      setIsPlaying(true);
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
      const action = mixer.current.clipAction(gltf.animations[0]);
      const halfDuration = action.getClip().duration / 2.25;

      if (action.time >= halfDuration && isPlaying) {
        action.paused = true;

        // Indicate that animation has paused
        setIsPlaying(false);
      }
    }
  });

  const scaleMultiplier =
    viewportWidth < 768 ? 0.5 : viewportWidth < 1024 ? 0.8 : 1;
  gltf.scene.scale.set(
    0.85 * scaleMultiplier,
    0.8 * scaleMultiplier,
    0.8 * scaleMultiplier
  );

  gltf.scene.position.set(0, -0.1 * scaleMultiplier, 4.65);

  return <primitive object={gltf.scene} dispose={null} />;
};

export default AnimatedNotebook;
