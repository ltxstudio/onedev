import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { MathUtils } from 'three';

// This component renders a rotating 3D galaxy background
const AnimatedGalaxyBackground = () => {
  const galaxyRef = useRef();

  useEffect(() => {
    if (galaxyRef.current) {
      const interval = setInterval(() => {
        galaxyRef.current.rotation.y += 0.001; // Slow rotation for the galaxy effect
      }, 16); // roughly 60fps

      return () => clearInterval(interval); // Clean up the interval on unmount
    }
  }, []);

  return (
    <div className="absolute inset-0 z-[-1]">
      <Canvas>
        {/* Stars for galaxy effect */}
        <Stars
          radius={100}
          depth={50}
          count={5000} // Number of stars
          factor={4} // How densely the stars are scattered
          fade // Make distant stars fade
        />
        
        {/* OrbitControls to allow interaction with the camera */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />

        {/* Lighting to create a glowing galaxy effect */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 10, 0]} intensity={1} />
        
        {/* Add rotating nebula-like cloud effect using particles */}
        <group ref={galaxyRef}>
          <NebulaEffect />
        </group>
      </Canvas>
    </div>
  );
};

// Simple Nebula effect using particles or small spheres (representing a nebula)
const NebulaEffect = () => {
  const numParticles = 300; // Number of particles in nebula
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      position: [
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
      ],
      color: new THREE.Color(Math.random(), Math.random(), Math.random()), // Random colors
    });
  }

  return (
    <>
      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={particle.position}
          scale={Math.random() * 0.5 + 0.5} // Scale randomly
        >
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial color={particle.color} />
        </mesh>
      ))}
    </>
  );
};

export default AnimatedGalaxyBackground;
