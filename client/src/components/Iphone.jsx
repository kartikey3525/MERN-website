import { Box, Plane, RoundedBox } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Iphone({ videoSrc }) {
  const iphoneRef = useRef();
  const videoRef = useRef(null);
  const textureRef = useRef(null);

  const { viewport, camera } = useThree();

  /* -------------------- CAMERA FRAME FIX (IMPROVED) -------------------- */
  useEffect(() => {
    camera.fov = 65;        // ⬅ more vertical room
    camera.position.z = 11; // ⬅ compensate for large scale
    camera.updateProjectionMatrix();
  }, [camera]);

  /* -------------------- Video Texture -------------------- */
  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    video.play().catch(() => {});

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;

    videoRef.current = video;
    textureRef.current = texture;

    return () => {
      video.pause();
      video.src = '';
      texture.dispose();
    };
  }, [videoSrc]);

  /* -------------------- BIGGER RESPONSIVE SCALE -------------------- */
  const scaleFactor = Math.min(viewport.width / 5, 1.6);

  useEffect(() => {
    if (iphoneRef.current) {
      iphoneRef.current.scale.setScalar(scaleFactor);
    }
  }, [scaleFactor]);

  /* -------------------- FREE FLOAT (SCALE-AWARE) -------------------- */
  useFrame(({ clock }) => {
    if (!iphoneRef.current) return;

    const t = clock.getElapsedTime();

    // Float scales proportionally with size
    const floatAmplitude = 0.12 / scaleFactor;

    iphoneRef.current.position.y =
      Math.sin(t) * floatAmplitude;
  });

  return (
    <group ref={iphoneRef}>
      {/* Metal Chamfer Frame */}
      <RoundedBox args={[3.7, 7.4, 0.34]} radius={0.35} smoothness={8}>
        <meshPhysicalMaterial
          color="#d9d9d9"
          metalness={1}
          roughness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </RoundedBox>

      {/* Inner Body */}
      <RoundedBox
        args={[3.55, 7.3, 0.3]}
        radius={0.28}
        smoothness={8}
        position={[0, 0, 0.01]}
      >
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.15}
          roughness={0.35}
        />
      </RoundedBox>

     {/* Screen */}
{textureRef.current && (
  <Plane args={[3.1, 6.7]} position={[0, 0, 0.18]}>
    <meshPhysicalMaterial
      map={textureRef.current}
      toneMapped={false}
      roughness={5.2}
      metalness={0}
      clearcoat={1}
    
      clearcoatRoughness={0.05}
    />
  </Plane>
)}


      {/* Buttons */}
      <Box args={[0.1, 0.7, 0.1]} position={[-1.78, 1.4, 0]}>
        <meshStandardMaterial color="#9a9a9a" />
      </Box>

      <Box args={[0.1, 0.7, 0.1]} position={[-1.78, 0.5, 0]}>
        <meshStandardMaterial color="#9a9a9a" />
      </Box>

      <Box args={[0.1, 0.7, 0.1]} position={[1.78, 1.4, 0]}>
        <meshStandardMaterial color="#9a9a9a" />
      </Box>
    </group>
  );
}
