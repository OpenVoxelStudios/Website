import '../App.css';
import { Suspense, useEffect } from 'react';
import Header from '../components/header';
import { onLoad } from '../router';
import { ScrollRestoration } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';

import Giggles from '../components/3d/giggles';
import { Environment } from '@react-three/drei';

export default function ThreeDRoute() {
  useEffect(onLoad, []);

  return (
    <>
      <Header />
      
      <Canvas>
        <Suspense fallback={null}>
          <Giggles />
          <Environment preset="warehouse" background={false} />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>

      <ScrollRestoration />
    </>
  )
};