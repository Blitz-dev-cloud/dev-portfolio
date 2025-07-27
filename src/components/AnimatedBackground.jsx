import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import BlinkingStars from "./BlinkingStars";

const AnimatedBackground = ({ isDark }) => (
  <div className="fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
      <Suspense fallback={null}>
        <BlinkingStars />
      </Suspense>
    </Canvas>
    <div
      className={`absolute inset-0 ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-purple-950/30 to-indigo-950/30"
          : "bg-gradient-to-br from-purple-50 via-white to-indigo-50"
      }`}
    />
  </div>
);

export default AnimatedBackground;
