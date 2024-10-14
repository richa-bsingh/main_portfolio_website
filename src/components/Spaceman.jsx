import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import spacemanScene from "./dist/assets/3d/desktop.glb";
import CanvasLoader from "./CanvasLoader";

const Spaceman = ({ scale, position, rotationX, rotationY }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    if (animations && animations.length > 0) {
      if (actions["Idle"]) {
        actions["Idle"].play();
      } else {
        const firstAnimationName = Object.keys(actions)[0];
        if (firstAnimationName) {
          actions[firstAnimationName].play();
        }
      }
    }
  }, [actions, animations]);

  useFrame(() => {
    if (spacemanRef.current) {
      spacemanRef.current.rotation.x = rotationX;
      spacemanRef.current.rotation.y = rotationY + Math.PI / 2; // Rotate by 90 more degrees
    }
  });

  return (
    <mesh ref={spacemanRef} position={position} scale={scale}>
      <primitive object={scene} />
    </mesh>
  );
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(Math.PI); // Initial rotation facing forward
  const [scale, setScale] = useState([2, 2, 2]); // Smaller scale for the spaceman
  const [position, setPosition] = useState([0, -2, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer && scrollContainer.current) {
        const scrollTop = scrollContainer.current.scrollTop;
        const rotationXValue = scrollTop * -0.0006;
        const rotationYValue = scrollTop * -0.00075;
        setRotationX(rotationXValue);
        setRotationY(Math.PI + rotationYValue); // Maintain the base forward rotation during scroll
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]); // Smaller for mobile
        setPosition([0, -1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.5, 1.5, 1.5]); // Slightly larger for tablet
        setPosition([0, -1.5, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1.75, 1.75, 1.75]);
        setPosition([0, -1.75, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([2, 2, 2]); // Smaller on desktop to improve balance
        setPosition([0, -2, 0]);
      } else {
        setScale([2.5, 2.5, 2.5]); // Default scale
        setPosition([0, -2, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const container = scrollContainer && scrollContainer.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainer]);

  return (
    <Canvas className="w-full h-screen bg-transparent z-10" camera={{ position: [0, 0, 10], fov: 50, near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Spaceman 
          rotationX={rotationX} 
          rotationY={rotationY} 
          scale={scale} 
          position={position} 
        />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
