import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'

export default function Giggles(props: JSX.IntrinsicElements['group']) {
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