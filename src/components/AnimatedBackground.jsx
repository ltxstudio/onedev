import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, useTexture } from '@react-three/drei';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas>
        {/* Starry Sky */}
        <Stars
          radius={100}
          depth={50}
          count={10000}
          factor={3}
          fade
        />

        {/* Rotating Cube with beautiful glow effect */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Box args={[3, 3, 3]} position={[0, 0, -10]}>
            <meshStandardMaterial
              color="#ff6f61"
              emissive="#ff6f61"
              emissiveIntensity={0.5}
              roughness={0.3}
              metalness={0.7}
            />
          </Box>
        </Float>

        {/* Floating particles effect */}
        <FloatingParticles />

        {/* Orbit Controls for subtle movement */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />

        {/* Ambient light for overall brightness */}
        <ambientLight intensity={0.3} color="#ffffff" />

        {/* Directional light for dynamic highlights */}
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />

        {/* Additional spotlights for highlights */}
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} color="#ff6f61" />
        <spotLight position={[-5, -5, -5]} angle={0.15} penumbra={1} intensity={0.8} color="#61dafb" />
      </Canvas>
    </div>
  );
};

const FloatingParticles = () => {
  const texture = useTexture('/path-to-particle-texture.png'); // Load texture for particles

  const particles = Array.from({ length: 500 }, (_, i) => ({
    position: [
      Math.random() * 20 - 10,
      Math.random() * 20 - 10,
      Math.random() * 20 - 10
    ],
    speed: Math.random() * 0.05 + 0.01,
    scale: Math.random() * 0.1 + 0.05,
  }));

  return (
    <group>
      {particles.map((particle, index) => (
        <Float key={index} speed={particle.speed} rotationIntensity={0.5} floatIntensity={2}>
          <mesh position={particle.position} scale={[particle.scale, particle.scale, particle.scale]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshBasicMaterial
              map={texture}
              color={new THREE.Color(Math.random(), Math.random(), Math.random())}
              transparent={true}
              opacity={0.8}
              emissive={true}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default AnimatedBackground;
