import { Text3D, useTexture, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";

export default function FancyText() {
  const matcaps = useTexture([
    "/matcaps/matcapBl2.png",
    "/matcaps/matcapOO1.png",
    "/matcaps/matcapOO2.png",
    "/matcaps/matcapOO3.png",
    "/matcaps/matcapOR1.png",
    "/matcaps/matcapOR2.png",
    "/matcaps/matcapOR3.png",
    "/matcaps/matcapOR4.png",
    "/matcaps/matcapOR5.png",
    "/matcaps/matcapOR6.png",
    "/matcaps/matcapOR7.png",
    "/matcaps/matcapOR8.png",
    "/matcaps/matcapOR9.png",
    "/matcaps/matcapLBL1.png",
    "/matcaps/matcapLBL2.png",
  ]);
  const textRef = useRef();
  const [matcapIndex, setMatcapIndex] = useState(0);

  const updateMatcap = () => {
    setMatcapIndex((matcapIndex) => (matcapIndex + 1) % matcaps.length);
    console.log("clicked");
  };

  useFrame((_, delta) => {
    textRef.current.rotation.y += 0.01 * delta;
  });

  return (
    <group
      ref={textRef}
      position={[0, 3.65, 0]}
      rotation={[Math.PI * 0.25, 0, 0]}
      onPointerOver={(e) => console.log("hovered", e.object.name)}
      onPointerOut={(e) => console.log("unhovered", e.object.name)}
      onClick={updateMatcap}
    >
      <Center>
        <Text3D size={0.15} font={"/Righteous_Regular.json"}>
          Ryan J. Parker
          <meshMatcapMaterial matcap={matcaps[matcapIndex]} />
        </Text3D>
      </Center>
    </group>
  );
}
