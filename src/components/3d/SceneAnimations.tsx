import { Suspense } from 'react'
import { Environment, Preload } from '@react-three/drei'
import Animations from '@/components/3d/Animations'
import { CameraRig, Loader } from '@/components/3d/essentials'
import { Canvas } from '@react-three/fiber'

export default function SceneAnimations() {
    return (
        <Canvas shadows id='canvas1' flat camera={{ fov: 75, position: [0, 0, 1] }} style={{ cursor: 'none' }}>
            <Suspense fallback={<Loader />}>
                <Animations scale={[1, 1, 1]} position={[0, -1.5, -0.7]} rotation={[0, 0, 0]} />
                {/* <pointLight position={[-1.5, 2.75, 1]} intensity={13} distance={6} decay={0.2} color="#fff" /> */}
                <CameraRig elementId='canvas1' />
                <Environment preset="night" background={false} />
                <Preload all />
            </Suspense>
        </Canvas>
    )
};