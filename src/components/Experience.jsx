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

function BigText() {
  const matcaps = useTexture(["/matcapBl2.png", "/matcapOR3.png"]);
  const textRef = useRef();
  return (
    <group
      ref={textRef}
      position={[0, 2, 0]}
      rotation={[Math.PI * 0.125, 0, 0]}
    >
      <Center>
        <Text3D size={0.15} font={"/Righteous_Regular.json"}>
          Ryan J. Parker
          <meshMatcapMaterial matcap={matcaps[1]} />
        </Text3D>
      </Center>
    </group>
  );
}

function Experience() {
  //   window.addEventListener("wheel", onMouseWheel);

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
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* <BigText /> */}
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
    </Canvas>
  );
}

export default Experience;
