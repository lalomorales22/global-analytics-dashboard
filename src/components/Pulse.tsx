import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PulseProps {
  position: THREE.Vector3;
  color: string;
}

export const Pulse = ({ position, color }: PulseProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const startTime = useRef(Date.now());

  useFrame(() => {
    if (meshRef.current && materialRef.current) {
      const elapsedTime = (Date.now() - startTime.current) / 1000;
      const scale = 1 + Math.sin(elapsedTime * 3) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
      materialRef.current.opacity = Math.max(0, 1 - elapsedTime / 2);
    }
  });

  useEffect(() => {
    startTime.current = Date.now();
  }, []);

  return (
    <mesh ref={meshRef} position={position.multiplyScalar(1.01)}>
      <circleGeometry args={[0.05, 32]} />
      <meshBasicMaterial
        ref={materialRef}
        color={color}
        transparent
        opacity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};