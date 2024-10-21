import { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Html, Preload, useProgress } from '@react-three/drei'
import Header from '@/components/header'
import { onLoad } from '@/router'
import { ScrollRestoration } from 'react-router-dom'
import Animations from '@/components/3d/Animations'
import { easing } from 'maath'
import UAParser from 'ua-parser-js';

import '../components/main.css';

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [Math.min(Math.max(-0.5 + (state.pointer.x * state.viewport.width) / 3, -3), 1.5), (1 + state.pointer.y) / 2, 4], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  });

  return <></>;
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(2)}% loaded...</Html>
}

function Scene() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Animations scale={[1, 1, 1]} position={[-1, -1.5, 0]} />
        <spotLight position={[-5.5, 10, 0]} rotation={[0, 0, -Math.PI / 2]} angle={Math.PI / 13} penumbra={0.6} decay={0} intensity={Math.PI * 4} />
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
  const [isDesktop, _setIsDesktop] = useState<boolean>(device === undefined || !['wearable', 'mobile'].includes(device));
  console.log(isDesktop);

  return (
    <>
      <Header />

      <div id='content' className='content'>

        <div className='arg'>
          <div className='text'>
            <h1>Fancy Animations.</h1>
            <p>We brought <b>amazing animations</b> into vanilla Minecraft using <a href='https://animated-java.dev' target='_blank'>Animated Java</a> and <a href='https://www.blockbench.net' target='_blank'>Blockbench</a>!<br />An <b>exhibition room</b> is in the works! You will be able to see the models in 3D and download some of them!</p>
          </div>

          <div className='notextselection glass img'>
            {isDesktop &&
              <Canvas shadows id='canvas1' flat camera={{ fov: 75, position: [0, 0, 1] }} style={{ cursor: 'none' }}>
                <Scene />
              </Canvas>
            }
            {!isDesktop &&
              <img src='/banner-team.png' loading='lazy' decoding='async' style={{ filter: 'blur(4px)' }} />
            }
          </div>
        </div>
      </div>

      <ScrollRestoration />
    </>
  )
};