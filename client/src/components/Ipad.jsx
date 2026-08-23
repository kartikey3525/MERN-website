import { Cylinder, Plane, RoundedBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

export default function iPad({ width = 11, height = 7, depth = 0.4 }) {
  const ipadRef = useRef();

  const video = document.createElement('video');
  video.src = '/videos/website.mp4';
  video.crossOrigin = 'Anonymous';
  video.loop = true;
  video.muted = true;
  video.play();

  const videoTexture = new THREE.VideoTexture(video);

  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#d0d0d0',
    metalness: 0.5,
    roughness: 0.3,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  const screenMaterial = new THREE.MeshPhysicalMaterial({
    map: videoTexture,
    metalness: 0.1,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ipadRef.current.position.y = Math.sin(time) * 0.2;
  });

  // Derive everything else from width/height so it scales proportionally
  const screenWidth = width * 0.936;   // matches 10.3/11 ratio
  const screenHeight = height * 0.9;   // matches 6.3/7 ratio
  const buttonX = width * 0.345;       // matches 3.8/11 ratio
  const cameraX = width * 0.345;
  const cameraY = height * 0.386;      // matches 2.7/7 ratio
  const volUpY = height * 0.357;       // matches 2.5/7
  const volDownY = height * 0.257;     // matches 1.8/7

  return (
    <group ref={ipadRef}>
      <RoundedBox args={[width, height, depth]} radius={0.3} smoothness={4} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial {...bodyMaterial} />
      </RoundedBox>

      <Plane args={[screenWidth, screenHeight]} position={[0, 0.01, depth / 2 + 0.01]}>
        <meshPhysicalMaterial {...screenMaterial} />
      </Plane>

      <RoundedBox args={[0.2, 0.6, 0.1]} radius={0.05} smoothness={4} position={[-buttonX, volUpY, 0]}>
        <meshStandardMaterial color="#888888" />
      </RoundedBox>

      <RoundedBox args={[0.2, 0.6, 0.1]} radius={0.05} smoothness={4} position={[-buttonX, volDownY, 0]}>
        <meshStandardMaterial color="#888888" />
      </RoundedBox>

      <RoundedBox args={[0.2, 0.8, 0.1]} radius={0.05} smoothness={4} position={[buttonX, 0, 0]}>
        <meshStandardMaterial color="#888888" />
      </RoundedBox>

      <Cylinder args={[0.2, 0.2, 0.05, 32]} position={[cameraX, cameraY, 0.2]}>
        <meshStandardMaterial color="#444444" />
      </Cylinder>
    </group>
  );
}