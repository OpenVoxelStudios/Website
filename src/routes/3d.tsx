import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Html, Preload, useProgress } from '@react-three/drei'
import Header from '@/components/header'
import { onLoad } from '@/router'
import { ScrollRestoration } from 'react-router-dom'
import Animations from '@/components/3d/Animations'
import { easing } from 'maath'
import UAParser from 'ua-parser-js';
import * as THREE from 'three';

import '../components/main.css';

function CameraRig() {
  const hovering = useRef(false);

  // Constants to avoid recreating values every frame
  const HOVER_Z = 1.5;
  const DEFAULT_Z = 4.2;
  const X_SENSITIVITY = 1.5;
  const Y_SENSITIVITY = 0.5;
  const EASING_FACTOR = 0.5;

  // Setup event listeners using useEffect to prevent memory leaks
  useEffect(() => {
    const item = document.getElementById('canvas1');
    if (!item) return;

    const handleEnter = () => hovering.current = true;
    const handleLeave = () => hovering.current = false;

    item.addEventListener('mouseenter', handleEnter);
    item.addEventListener('mouseleave', handleLeave);

    // Cleanup listeners on unmount
    return () => {
      item.removeEventListener('mouseenter', handleEnter);
      item.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  useFrame((state, delta) => {
    const { pointer, camera } = state;

    // Calculate offsets only if hovering
    const [xOffset, yOffset] = hovering.current
      ? [pointer.x * X_SENSITIVITY, pointer.y * Y_SENSITIVITY]
      : [0, 0];

    // Update camera position with clamped values
    easing.damp3(
      camera.position,
      [
        THREE.MathUtils.clamp(xOffset, -X_SENSITIVITY, X_SENSITIVITY),
        THREE.MathUtils.clamp(yOffset, -Y_SENSITIVITY, Y_SENSITIVITY),
        hovering.current ? HOVER_Z : DEFAULT_Z
      ],
      EASING_FACTOR,
      delta
    );

    camera.lookAt(0, 0, 0);
  });

  return null;  // More performant than <></>
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(2)}% loaded...</Html>
}

function Scene() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Animations scale={[1, 1, 1]} position={[0, -1.5, -0.7]} rotation={[0, 0, 0]} />
        {/* <pointLight position={[-1.5, 2.75, 1]} intensity={13} distance={6} decay={0.2} color="#fff" /> */}
        <CameraRig />
        <Environment preset="night" background={false} />
        <Preload all />
      </Suspense>
    </>
  )
};

export default function ThreeDRoute() {
  useEffect(onLoad, []);
  const [device, _setDevice] = useState<string | undefined>(new UAParser(navigator.userAgent).getDevice().type);
  const isDesktop = device === undefined || !['wearable', 'mobile'].includes(device);

  return (
    <>
      <Header />

      <div id='content' className='content'>

        <div className='arg'>
          <div className='text'>
            <h1>Fancy Animations.</h1>
            <p>We brought <b>amazing animations</b> into vanilla Minecraft using <a href='https://animated-java.dev' target='_blank'>Animated Java</a> and <a href='https://www.blockbench.net' target='_blank'>Blockbench</a>!<br />An <b>exhibition room</b> is in the works! You will be able to see the models in 3D and download some of them!</p>
          </div>

          <div className='notextselection glass img' style={{ animation: isDesktop ? '' : 'float 6s ease-in-out infinite', minHeight: isDesktop ? '400px' : undefined }}>
            {isDesktop &&
              <Canvas shadows id='canvas1' flat camera={{ fov: 75, position: [0, 0, 1] }} style={{ cursor: 'none' }}>
                <Scene />
              </Canvas>
            }
            {!isDesktop &&
              <img src='/banner-team.png' loading='lazy' decoding='async' />
            }
          </div>
        </div>
      </div>

      <ScrollRestoration />
    </>
  )
};