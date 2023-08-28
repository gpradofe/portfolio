import React from "react";
import {
  ShaderMaterial,
  Mesh,
  TextureLoader,
  MeshStandardMaterial,
} from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import notebookModel from "../../Assets/3DModels/notebook.gltf";
import notebookTexture from "../../Assets/Textures/keyboard-texture.png";

const gradientTexture = new TextureLoader().load(notebookTexture);
const gradientMaterial = new MeshStandardMaterial({ map: gradientTexture });

function Notebook() {
  const gltf = useGLTF(notebookModel) as GLTF;

  gltf.scene.traverse((child: THREE.Object3D) => {
    if (child.name === "macBook_BottomPart" && "isGroup" in child) {
      (child as THREE.Group).children.forEach((subChild: THREE.Object3D) => {
        if ("isMesh" in subChild) {
          if (
            subChild.name === "Cube005_5" ||
            subChild.name === "Cube005_4" ||
            subChild.name === "Cube005_3" ||
            subChild.name === "Cube005_2"
          ) {
            (subChild as THREE.Mesh).material = gradientMaterial;
          }
        }
      });
    }
  });
  gltf.scene.position.set(-0.7, -2, -0.4);
  return (
    <primitive object={gltf.scene} rotation={[0, Math.PI, 0]} dispose={null} />
  );
}

const LandingPage: React.FC = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <Notebook />
    </Canvas>
  );
};

export default LandingPage;
