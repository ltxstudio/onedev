import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

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

        {/* Rotating Sphere with distort effect */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.5, 100, 200]} position={[2, 0, -5]}>
            <MeshDistortMaterial
              color="#ff6f61"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0}
            />
          </Sphere>
        </Float>

        {/* Another Sphere with different color and effect */}
        <Float speed={3} rotationIntensity={1.5} floatIntensity={3}>
          <Sphere args={[1, 100, 200]} position={[-3, -1, -6]}>
            <MeshDistortMaterial
              color="#61dafb"
              attach="material"
              distort={0.6}
              speed={3}
              roughness={0}
            />
          </Sphere>
        </Float>

        {/* Orbit Controls for subtle movement */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />

        {/* Ambient light for overall brightness */}
        <ambientLight intensity={0.5} />

        {/* Directional light for dynamic highlights */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
