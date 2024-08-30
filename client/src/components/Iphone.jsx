import React, { useRef } from 'react';
import { RoundedBox, Plane, Cylinder, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Iphone() {
  const iphoneRef = useRef();

  // Set up the video texture
  const video = document.createElement('video');
  video.src = '/videos/app.mp4'; // Replace with your video path
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
      <RoundedBox args={[3.6, 7, 0.3]} radius={0.2} smoothness={5} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial {...bodyMaterial} /> {/* Metal body with rounded edges */}
      </RoundedBox>

      {/* Screen with Video */}
      <Plane args={[3.2, 6.5]} position={[0, 0.01, 0.16]}>
        <meshPhysicalMaterial {...screenMaterial} /> {/* Map the video as texture */}
      </Plane>
 
      {/* Side Buttons - Volume Up/Down */}
      <Box args={[0.1, 0.6, 0.1]} position={[-1.8, 1.1, 0]}>
        <meshStandardMaterial color="#888888" /> {/* Lightened side button color */}
      </Box>
      
      <Box args={[0.1, 0.6, 0.1]} position={[-1.8, 0.3, 0]}>
        <meshStandardMaterial color="#888888" />
      </Box>    

      {/* Side Button - Power */}
      <Box args={[0.1, 0.6, 0.1]} position={[1.8, 1.1, 0]}>
        <meshStandardMaterial color="#888888" />
      </Box>
 
    </group>
  );
}
