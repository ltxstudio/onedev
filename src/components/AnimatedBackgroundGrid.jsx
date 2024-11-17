import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { MathUtils } from 'three';

const AnimatedBackgroundGrid = () => {
  const gridRef = useRef();

  useEffect(() => {
    if (gridRef.current) {
      const interval = setInterval(() => {
        gridRef.current.rotation.y += 0.01;
      }, 16); // approximately 60fps

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, []);

  return (
    <div className="absolute inset-0 z-[-1]">
      <Canvas>
        {/* Rotating 3D Grid */}
        <Grid
          ref={gridRef}
          position={[0, 0, -10]}
          cellSize={1}
          spacing={1}
          rotation={[MathUtils.degToRad(90), 0, 0]} // Rotate grid to lay flat
          infinite
        >
          <meshStandardMaterial color="#0a0a0a" wireframe />
        </Grid>

        {/* OrbitControls for interactive camera movement */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default AnimatedBackgroundGrid;
