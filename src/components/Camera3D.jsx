import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function RealCameraModel() {
  // Loading a very high quality, highly detailed vintage camera from Khronos's official sample repository.
  const { scene } = useGLTF('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF-Binary/AntiqueCamera.glb'); 
  return <primitive object={scene} scale={0.3} position={[0, -2.5, 0]} />;
}

export default function Camera3D() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing bg-[#0a0a0c]">
      <Canvas camera={{ position: [8, 4, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <RealCameraModel />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={true}
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
      <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full pointer-events-none border border-white/10">
        Drag to rotate
      </div>
    </div>
  );
}

// Preload the high quality model to ensure it loads quickly
useGLTF.preload('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF-Binary/AntiqueCamera.glb');
