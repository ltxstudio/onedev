import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas>
        {/* Starry Sky */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          fade
        />
        {/* Smooth movement and slight rotation */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
