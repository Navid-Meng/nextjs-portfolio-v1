import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { ParticleField } from './ParticleField';
import { Suspense } from 'react';

export function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <Suspense fallback={null}>
          <ParticleField />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}