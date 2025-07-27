import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BlinkingStars = () => {
  const meshRef = useRef();
  const [positions] = useState(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    return positions;
  });

  const [opacities] = useState(() => {
    const opacities = new Float32Array(2000);
    for (let i = 0; i < 2000; i++) {
      opacities[i] = Math.random();
    }
    return opacities;
  });

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material;

      // Update opacity for blinking effect
      for (let i = 0; i < opacities.length; i++) {
        const time = state.clock.elapsedTime;
        const phase = i * 0.1;
        opacities[i] = Math.abs(Math.sin(time * 0.5 + phase)) * 0.8 + 0.2;
      }

      // Slow rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.0001;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.0002;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        color="#a855f7"
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </points>
  );
};

export default BlinkingStars;
