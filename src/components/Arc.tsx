import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ArcProps {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
}

export const Arc = ({ startLat, startLng, endLat, endLng, color }: ArcProps) => {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const startTime = useRef(Date.now());
  const points: THREE.Vector3[] = [];
  const startPhi = (90 - startLat) * (Math.PI / 180);
  const startTheta = (180 - startLng) * (Math.PI / 180);
  const endPhi = (90 - endLat) * (Math.PI / 180);
  const endTheta = (180 - endLng) * (Math.PI / 180);

  const start = new THREE.Vector3(
    Math.sin(startPhi) * Math.cos(startTheta),
    Math.cos(startPhi),
    Math.sin(startPhi) * Math.sin(startTheta)
  );
  const end = new THREE.Vector3(
    Math.sin(endPhi) * Math.cos(endTheta),
    Math.cos(endPhi),
    Math.sin(endPhi) * Math.sin(endTheta)
  );

  // Create curved line between points
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    const middle = new THREE.Vector3().lerpVectors(start, end, t);
    middle.normalize().multiplyScalar(1 + Math.sin(Math.PI * t) * 0.2);
    points.push(middle);
  }

  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, 20, 0.003, 8, false);

  useFrame(() => {
    if (materialRef.current) {
      const elapsedTime = (Date.now() - startTime.current) / 1000;
      materialRef.current.opacity = Math.max(0, 1 - elapsedTime / 3);
    }
  });

  useEffect(() => {
    startTime.current = Date.now();
  }, []);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        ref={materialRef}
        color={color}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};