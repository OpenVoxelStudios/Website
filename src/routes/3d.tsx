import { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Preload } from '@react-three/drei'
import Header from '@/components/header'
import { onLoad } from '@/router'
import { ScrollRestoration } from 'react-router-dom'
import Animations from '@/components/3d/Animations'
import { easing } from 'maath'


function Rig() {
  const [mouseIn, setMouseIn] = useState<boolean>(false);
  const canvas = (document.getElementById('canvas1') as HTMLCanvasElement);
  const { camera } = useThree();
  const [rotation, setRotation] = useState<number>(0);

  canvas.onmouseenter = (_e) => setMouseIn(true);
  canvas.onmouseleave = (_e) => setMouseIn(false);
  canvas.onmousemove = (e) => {
    if (!mouseIn) return;
    let bounds = canvas.getBoundingClientRect();

    let goal = Math.PI / 2500 * (bounds.left - e.clientX);
    setRotation(goal);

    camera.rotateY(goal - rotation);
  };

  return <></>;
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  });

  return <></>;
}



export default function ThreeDRoute() {
  useEffect(onLoad, []);

  return (
    <>
      <Header />

      <div id='content' className='content'>

        <Canvas shadows className='glass' id='canvas1' style={{ height: '300px', width: '800px' }} flat camera={{ fov: 75, position: [0, 0, 0] }}>
          <Suspense fallback={null}>
            <Animations scale={[1.5, 1.5, 1.5]} />

            {/* <Rig /> */}
            <CameraRig />
            <Environment preset="warehouse" background={false} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      <ScrollRestoration />
    </>
  )
};