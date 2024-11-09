import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Activity } from '../types';

interface ParticleSystemProps {
  activities: Activity[];
}

export const ParticleSystem = ({ activities }: ParticleSystemProps) => {
  const particles = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y += 0.001;
      
      // Update particle sizes based on camera distance
      const material = particles.current.material as THREE.PointsMaterial;
      const distance = state.camera.position.length();
      material.size = Math.max(0.02, 0.05 * (2 / distance));
    }
  });

  const positions = new Float32Array(activities.length * 3);
  const colors = new Float32Array(activities.length * 3);
  const sizes = new Float32Array(activities.length);

  activities.forEach((activity, i) => {
    const phi = (90 - activity.lat) * (Math.PI / 180);
    const theta = (180 - activity.lng) * (Math.PI / 180);
    
    positions[i * 3] = Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = Math.cos(phi);
    positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta);

    const color = new THREE.Color(
      activity.type === 'commit' ? '#4CAF50' :
      activity.type === 'pull_request' ? '#2196F3' :
      '#FFC107'
    );
    
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    // Randomize particle sizes slightly
    sizes[i] = 0.05 + Math.random() * 0.02;
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};