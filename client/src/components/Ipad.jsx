import React, { useRef } from 'react';
import { Plane, RoundedBox, Cylinder } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function iPad() {
  const ipadRef = useRef();

  // Set up the video texture
  const video = document.createElement('video');
  video.src = '/videos/website.mp4'; // Replace with your video path
  video.crossOrigin = 'Anonymous';
  video.loop = true;
  video.muted = true;
  video.play();

  const videoTexture = new THREE.VideoTexture(video);

  // Metal material for the body
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#d0d0d0', // Silver color for iPad body
    metalness: 0.5,
    roughness: 0.3,
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

  // Animation loop for a slight floating effect
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ipadRef.current.position.y = Math.sin(time) * 0.2; // Floating effect
    // ipadRef.current.rotation.x = Math.PI; // Flip the iPad vertically
  });

  return (
    <group ref={ipadRef}>
      {/* iPad Body with Rounded Corners */}
      <RoundedBox args={[11, 7, 0.4]} radius={0.3} smoothness={4} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial {...bodyMaterial} /> {/* Metal body */}
      </RoundedBox>

      {/* Screen with Video */}
      <Plane args={[10.3, 6.3]} position={[-0, 0.01, 0.21]}>
        <meshPhysicalMaterial {...screenMaterial} /> {/* Map the video as texture */}
      </Plane>

      {/* Side Buttons - Volume Up/Down */}
      <RoundedBox args={[0.2, 0.6, 0.1]} radius={0.05} smoothness={4} position={[-3.8, 2.5, 0]}>
        <meshStandardMaterial color="#888888" /> {/* Volume up button */}
      </RoundedBox>
      
      <RoundedBox args={[0.2, 0.6, 0.1]} radius={0.05} smoothness={4} position={[-3.8, 1.8, 0]}>
        <meshStandardMaterial color="#888888" /> {/* Volume down button */}
      </RoundedBox>    

      {/* Power Button */}
      <RoundedBox args={[0.2, 0.8, 0.1]} radius={0.05} smoothness={4} position={[3.8, 0, 0]}>
        <meshStandardMaterial color="#888888" /> {/* Power button */}
      </RoundedBox>

      {/* Rear Camera */}
      <Cylinder args={[0.2, 0.2, 0.05, 32]} position={[3.8, 2.7, 0.2]}>
        <meshStandardMaterial color="#444444" /> {/* Camera color */}
      </Cylinder>
    </group>
  );
}
