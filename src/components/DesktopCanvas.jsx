import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "./CanvasLoader";

const Desktop = ({ scale, position, rotationX, rotationY }) => {
  const desktopRef = useRef();
  const { scene } = useGLTF("../assets/3d/desktop.glb");
  const { camera } = useThree();

  useEffect(() => {
    if (scene) {
      console.log("Model loaded successfully");
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      camera.position.z = cameraZ * 1.5;
      camera.updateProjectionMatrix();
    } else {
      console.error("Failed to load the model");
    }
  }, [scene, camera]);

  useFrame(() => {
    if (desktopRef.current) {
      desktopRef.current.rotation.x = rotationX;
      desktopRef.current.rotation.y = rotationY;
    }
  });

  return (
    <mesh ref={desktopRef} position={position} scale={scale}>
      <primitive object={scene} />
    </mesh>
  );
};

const DesktopCanvas = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale] = useState([0.4, 0.4, 0.4]);
  const [position] = useState([0, -0.5, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer && scrollContainer.current) {
        const scrollTop = scrollContainer.current.scrollTop;
        const rotationXValue = scrollTop * 0.0002;
        const rotationYValue = scrollTop * 0.0003;
        setRotationX(rotationXValue);
        setRotationY(rotationYValue);
      }
    };

    const container = scrollContainer && scrollContainer.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainer]);

  return (
    <Canvas 
      className="w-full h-full" 
      camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Desktop 
          rotationX={rotationX} 
          rotationY={rotationY} 
          scale={scale} 
          position={position} 
        />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default DesktopCanvas;