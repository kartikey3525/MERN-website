import React, { useRef } from 'react';
import { RoundedBox, Plane, Cylinder, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Iphone() {
  const iphoneRef = useRef();

  // Set up the video texture
  const video = document.createElement('video');
  video.src = '/videos/video1.mp4'; // Replace with your video path
  video.crossOrigin = 'Anonymous';
  video.loop = true;
  video.muted = true;
  video.play();

  const videoTexture = new THREE.VideoTexture(video);

  // Metal material for the body
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    metalness: 0.1,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  // Glass-like material for the screen
  const screenMaterial = new THREE.MeshPhysicalMaterial({
    map: videoTexture,
    metalness: 0.1,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  // Animation loop for floating effect
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    iphoneRef.current.position.y = Math.sin(time) * 0.2; // Adjust the amplitude (0.2) for more or less floating
  });

  return (
    <group ref={iphoneRef}>
      {/* iPhone Body with Rounded Corners */}
      <RoundedBox args={[2.6, 5, 0.3]} radius={0.2} smoothness={4} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial {...bodyMaterial} /> {/* Metal body with rounded edges */}
      </RoundedBox>

      {/* Screen with Video */}
      <Plane args={[2.3, 4.5]} position={[0, 0.01, 0.16]}>
        <meshPhysicalMaterial {...screenMaterial} /> {/* Map the video as texture */}
      </Plane>

      {/* Home Button */}
      <Cylinder args={[0.10, 0.12, 0.06, 30]} position={[0, -2.3, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#888888" /> {/* Lightened home button color */}
      </Cylinder>

      {/* Side Buttons - Volume Up/Down */}
      <Box args={[0.1, 0.6, 0.1]} position={[-1.3, 1.1, 0]}>
        <meshStandardMaterial color="#888888" /> {/* Lightened side button color */}
      </Box>
      
      <Box args={[0.1, 0.6, 0.1]} position={[-1.3, 0.3, 0]}>
        <meshStandardMaterial color="#888888" />
      </Box>    

      {/* Side Button - Power */}
      <Box args={[0.1, 0.6, 0.1]} position={[1.3, 1.1, 0]}>
        <meshStandardMaterial color="#888888" />
      </Box>

      {/* Rear Camera */}
      <Cylinder args={[0.1, 0.1, 0.02, 32]} position={[0, 2.1, 0.15]}>
        <meshStandardMaterial color="#444444" /> {/* Camera color */}
      </Cylinder>
    </group>
  );
}
