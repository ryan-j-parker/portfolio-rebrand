import {
  Center,
  Html,
  OrbitControls,
  Scroll,
  ScrollControls,
  Text3D,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import FancyText from "./FancyText";

function DownArrow() {
  return (
    <Center>
      <Html
        style={{
          position: "sticky",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src="/down-arrow.png" alt="down arrow" />
      </Html>
    </Center>
  );
}

function Experience() {
  window.addEventListener("wheel", onMouseWheel);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  function onMouseWheel(event) {
    camera.position.y += event.deltaY * 0.1;
  }

  return (
    <Canvas style={{ height: "500vh", width: "100%" }}>
      <OrbitControls makeDefault enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FancyText />
      <Html>
        <div>
          <p>"Hello World"</p>
          <p>"Hello World"</p>
          <p>"Hello World"</p>{" "}
        </div>
      </Html>
      <mesh>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <DownArrow />
    </Canvas>
  );
}

export default Experience;
