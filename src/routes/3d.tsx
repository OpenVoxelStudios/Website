import * as THREE from 'three'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, Preload } from '@react-three/drei'
import Header from '@/components/header'
import { onLoad } from '@/router'
import { ScrollRestoration } from 'react-router-dom'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


export function Giggles(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, animations } = useGLTF('/3d/giggles.glb') as GLTF & {
    nodes: {
      giggles: THREE.SkinnedMesh
      giggles_1: THREE.Bone
    }
    materials: {}
  }

  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions?.Falling?.play();
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <skinnedMesh
          name="giggles"
          geometry={nodes.giggles.geometry}
          material={nodes.giggles.material}
          skeleton={nodes.giggles.skeleton}
          position={[0, 0, -0.041]}>
          <primitive object={nodes.giggles_1} />
        </skinnedMesh>
      </group>
    </group>
  )
}


function Rig() {
  const [mouseIn, setMouseIn] = useState<boolean>(false);
  const canvas = (document.getElementById('canvas1') as HTMLCanvasElement);
  const { camera } = useThree();

  // camera.rotateX()

  canvas.onmouseenter = (_e) => setMouseIn(true);
  canvas.onmouseleave = (_e) => setMouseIn(false);
  canvas.onmousemove = (e) => {
    if (!mouseIn) return;
    let bounds = canvas.getBoundingClientRect();

    camera.rotateY(Math.PI / 100 * (bounds.left - e.clientX));
  };

  return <></>;
}



export default function ThreeDRoute() {
  useEffect(onLoad, []);

  return (
    <>
      <Header />

      <div id='content' className='content'>

        <Canvas shadows className='glass' id='canvas1' style={{ height: '300px', width: '800px' }} flat camera={{ fov: 75, position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Giggles scale={[2, 2, 2]} />

            <Rig />
            <Environment preset="warehouse" background={false} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      <ScrollRestoration />
    </>
  )
};