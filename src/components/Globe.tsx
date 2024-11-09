import { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Activity } from '../types';
import { Arc } from './Arc';
import { ParticleSystem } from './ParticleSystem';
import { Pulse } from './Pulse';

interface GlobeProps {
  activities: Activity[];
}

export const Globe = ({ activities }: GlobeProps) => {
  const globeRef = useRef<THREE.Group>(null);
  const earthTexture = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
  const bumpMap = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg');
  const specularMap = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');
  const cloudsTexture = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png');

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  const getPositionFromLatLng = (lat: number, lng: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (180 - lng) * (Math.PI / 180);
    
    return new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta),
      Math.cos(phi),
      Math.sin(phi) * Math.sin(theta)
    );
  };

  return (
    <group ref={globeRef}>
      {/* Base globe sphere with textures */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={specularMap}
          specular={new THREE.Color('grey')}
          shininess={50}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshPhongMaterial
          map={cloudsTexture}
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshPhongMaterial
          transparent
          opacity={0.2}
          color="#4B91F7"
          side={THREE.BackSide}
        />
      </mesh>

      {/* Activity arcs */}
      {activities.slice(-10).map((activity) => (
        <Arc
          key={activity.id}
          startLat={activity.lat}
          startLng={activity.lng}
          endLat={activity.lat + Math.random() * 20 - 10}
          endLng={activity.lng + Math.random() * 20 - 10}
          color={
            activity.type === 'commit' ? '#4CAF50' :
            activity.type === 'pull_request' ? '#2196F3' :
            '#FFC107'
          }
        />
      ))}

      {/* Activity pulses */}
      {activities.slice(-20).map((activity) => (
        <Pulse
          key={activity.id}
          position={getPositionFromLatLng(activity.lat, activity.lng)}
          color={
            activity.type === 'commit' ? '#4CAF50' :
            activity.type === 'pull_request' ? '#2196F3' :
            '#FFC107'
          }
        />
      ))}

      {/* Activity particles */}
      <ParticleSystem activities={activities} />
    </group>
  );
};