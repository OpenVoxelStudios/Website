import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, CameraShake } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Body_1: THREE.Mesh
        Body_Layer: THREE.Mesh
        Head_1: THREE.Mesh
        Hat_Layer: THREE.Mesh
        camera: THREE.Mesh
        Right_Arm: THREE.Mesh
        Right_Arm_Layer: THREE.Mesh
        Left_Arm: THREE.Mesh
        Left_Arm_Layer: THREE.Mesh
        Right_Leg: THREE.Mesh
        Right_Leg_Layer: THREE.Mesh
        Left_Leg: THREE.Mesh
        Left_Leg_Layer: THREE.Mesh
        cube: THREE.Mesh
        cube_1: THREE.Mesh
        cube_2: THREE.Mesh
        cube_3: THREE.Mesh
        cube_4: THREE.Mesh
        cube_5: THREE.Mesh
        cube_6: THREE.Mesh
        cube_7: THREE.Mesh
        cube_8: THREE.Mesh
        cube_9: THREE.Mesh
        cube_10: THREE.Mesh
        cube_11: THREE.Mesh
        cube_12: THREE.Mesh
        cube_13: THREE.Mesh
        cube_14: THREE.Mesh
        cube_15: THREE.Mesh
        cube_16: THREE.Mesh
        cube_17: THREE.Mesh
        cube_18: THREE.Mesh
        cube_19: THREE.Mesh
        cube_20: THREE.Mesh
        cube_21: THREE.Mesh
        cube_22: THREE.Mesh
        cube_23: THREE.Mesh
        cube_24: THREE.Mesh
        cube_25: THREE.Mesh
        cube_26: THREE.Mesh
        cube_27: THREE.Mesh
        cube_28: THREE.Mesh
        cube_29: THREE.Mesh
        cube_30: THREE.Mesh
        cube_31: THREE.Mesh
        cube_32: THREE.Mesh
        cube_33: THREE.Mesh
        spruce: THREE.Mesh
        spruce_1: THREE.Mesh
        cube_34: THREE.Mesh
        spruce_2: THREE.Mesh
        spruce_3: THREE.Mesh
        cube_35: THREE.Mesh
        spruce_4: THREE.Mesh
        cube_36: THREE.Mesh
        cube_37: THREE.Mesh
        spruce_5: THREE.Mesh
        spruce_6: THREE.Mesh
        cube_38: THREE.Mesh
        spruce_7: THREE.Mesh
        spruce_8: THREE.Mesh
        cube_39: THREE.Mesh
        spruce_9: THREE.Mesh
        cube_40: THREE.Mesh
        cube_41: THREE.Mesh
        cube_42: THREE.Mesh
        cube_43: THREE.Mesh
        cube_44: THREE.Mesh
        cube_45: THREE.Mesh
        cube_46: THREE.Mesh
        cube_47: THREE.Mesh
        cube_48: THREE.Mesh
        cube_49: THREE.Mesh
        cube_50: THREE.Mesh
        cube_51: THREE.Mesh
        cube_52: THREE.Mesh
        cube_53: THREE.Mesh
        cube_54: THREE.Mesh
        cube_55: THREE.Mesh
        cube_56: THREE.Mesh
        cube_57: THREE.Mesh
        cube_58: THREE.Mesh
        cube_59: THREE.Mesh
        cube_60: THREE.Mesh
        cube_61: THREE.Mesh
        cube_62: THREE.Mesh
        cube_63: THREE.Mesh
        cube_64: THREE.Mesh
        cube_65: THREE.Mesh
        cube_66: THREE.Mesh
        cube_67: THREE.Mesh
        cube_68: THREE.Mesh
        cube_69: THREE.Mesh
        cube_70: THREE.Mesh
        cube_71: THREE.Mesh
        cube_72: THREE.Mesh
        cube_73: THREE.Mesh
        spruce_10: THREE.Mesh
        spruce_11: THREE.Mesh
        cube_74: THREE.Mesh
        spruce_12: THREE.Mesh
        spruce_13: THREE.Mesh
        cube_75: THREE.Mesh
        spruce_14: THREE.Mesh
        cube_76: THREE.Mesh
        cube_77: THREE.Mesh
        spruce_15: THREE.Mesh
        spruce_16: THREE.Mesh
        cube_78: THREE.Mesh
        spruce_17: THREE.Mesh
        spruce_18: THREE.Mesh
        cube_79: THREE.Mesh
        spruce_19: THREE.Mesh
        cube_80: THREE.Mesh
        mesh_114: THREE.Mesh
        mesh_114_1: THREE.Mesh
        mesh_114_2: THREE.Mesh
        cube_82: THREE.Mesh
        mesh_116: THREE.Mesh
        mesh_116_1: THREE.Mesh
        mesh_116_2: THREE.Mesh
        cube_84: THREE.Mesh
        cube_85: THREE.Mesh
        cube_86: THREE.Mesh
        cube_87: THREE.Mesh
        cube_88: THREE.Mesh
        cube_89: THREE.Mesh
        cube_90: THREE.Mesh
        cube_91: THREE.Mesh
        cube_92: THREE.Mesh
        cube_93: THREE.Mesh
        cube_94: THREE.Mesh
        cube_95: THREE.Mesh
        cube_96: THREE.Mesh
        cube_97: THREE.Mesh
        cube_98: THREE.Mesh
        cube_99: THREE.Mesh
        cube_100: THREE.Mesh
        cube_101: THREE.Mesh
        cube_102: THREE.Mesh
        cube_103: THREE.Mesh
        cube_104: THREE.Mesh
        mesh_138: THREE.Mesh
        mesh_138_1: THREE.Mesh
        mesh_138_2: THREE.Mesh
        cube_106: THREE.Mesh
        mesh_140: THREE.Mesh
        mesh_140_1: THREE.Mesh
        mesh_140_2: THREE.Mesh
        cube_108: THREE.Mesh
        cube_109: THREE.Mesh
        cube_110: THREE.Mesh
        cube_111: THREE.Mesh
        cube_112: THREE.Mesh
        cube_113: THREE.Mesh
        cube_114: THREE.Mesh
        cube_115: THREE.Mesh
        cube_116: THREE.Mesh
        cube_117: THREE.Mesh
        cube_118: THREE.Mesh
        cube_119: THREE.Mesh
        cube_120: THREE.Mesh
        cube_121: THREE.Mesh
        cube_122: THREE.Mesh
        cube_123: THREE.Mesh
        cube_124: THREE.Mesh
        cube_125: THREE.Mesh
        cube_126: THREE.Mesh
        cube_127: THREE.Mesh
        cube_128: THREE.Mesh
        cube_129: THREE.Mesh
        cube_130: THREE.Mesh
        cube_131: THREE.Mesh
        cube_132: THREE.Mesh
        cube_133: THREE.Mesh
        cube_134: THREE.Mesh
        cube_135: THREE.Mesh
        cube_136: THREE.Mesh
        cube_137: THREE.Mesh
        cube_138: THREE.Mesh
        cube_139: THREE.Mesh
        cube_140: THREE.Mesh
        cube_141: THREE.Mesh
        cube_142: THREE.Mesh
        cube_143: THREE.Mesh
        cube_144: THREE.Mesh
        cube_145: THREE.Mesh
        cube_146: THREE.Mesh
        cube_147: THREE.Mesh
        cube_148: THREE.Mesh
        cube_149: THREE.Mesh
        cube_150: THREE.Mesh
        cube_151: THREE.Mesh
        cube_152: THREE.Mesh
        cube_153: THREE.Mesh
        cube_154: THREE.Mesh
        cube_155: THREE.Mesh
        cube_156: THREE.Mesh
        cube_157: THREE.Mesh
        cube_158: THREE.Mesh
        cube_159: THREE.Mesh
        cube_160: THREE.Mesh
        cube_161: THREE.Mesh
        cube_162: THREE.Mesh
        cube_163: THREE.Mesh
        cube_164: THREE.Mesh
        cube_165: THREE.Mesh
        cube_166: THREE.Mesh
        cube_167: THREE.Mesh
        cube_168: THREE.Mesh
        cube_169: THREE.Mesh
        cube_170: THREE.Mesh
        cube_171: THREE.Mesh
        cube_172: THREE.Mesh
        cube_173: THREE.Mesh
        cube_174: THREE.Mesh
        cube_175: THREE.Mesh
        cube_176: THREE.Mesh
        cube_177: THREE.Mesh
        cube_178: THREE.Mesh
        cube_179: THREE.Mesh
        cube_180: THREE.Mesh
        cube_181: THREE.Mesh
        cube_182: THREE.Mesh
        cube_183: THREE.Mesh
        cube_184: THREE.Mesh
        cube_185: THREE.Mesh
        cube_186: THREE.Mesh
        cube_187: THREE.Mesh
        cube_188: THREE.Mesh
        cube_189: THREE.Mesh
        cube_190: THREE.Mesh
        cube_191: THREE.Mesh
        cube_192: THREE.Mesh
        cube_193: THREE.Mesh
        cube_194: THREE.Mesh
        cube_195: THREE.Mesh
        cube_196: THREE.Mesh
        cube_197: THREE.Mesh
        cube_198: THREE.Mesh
        cube_199: THREE.Mesh
        cube_200: THREE.Mesh
        cube_201: THREE.Mesh
        cube_202: THREE.Mesh
        cube_203: THREE.Mesh
        cube_204: THREE.Mesh
        cube_205: THREE.Mesh
        cube_206: THREE.Mesh
        cube_207: THREE.Mesh
        cube_208: THREE.Mesh
        cube_209: THREE.Mesh
        cube_210: THREE.Mesh
        cube_211: THREE.Mesh
        cube_212: THREE.Mesh
        cube_213: THREE.Mesh
        cube_214: THREE.Mesh
        cube_215: THREE.Mesh
        cube_216: THREE.Mesh
        cube_217: THREE.Mesh
        cube_218: THREE.Mesh
        cube_219: THREE.Mesh
        cube_220: THREE.Mesh
        cube_221: THREE.Mesh
        cube_222: THREE.Mesh
        cube_223: THREE.Mesh
        cube_224: THREE.Mesh
        cube_225: THREE.Mesh
        cube_226: THREE.Mesh
        cube_227: THREE.Mesh
        cube_228: THREE.Mesh
        cube_229: THREE.Mesh
        cube_230: THREE.Mesh
    }
    materials: {}
}

type ActionName = 'jack'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Animations(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, animations } = useGLTF('/3d/animations.glb') as GLTFResult
    const { actions } = useAnimations<GLTFActions>(animations, group)

    useEffect(() => {
        actions.jack.play();
    }, []);

    return (
        <>
            <CameraShake
                maxYaw={0.1} // Max amount camera can yaw in either direction
                maxPitch={0.1} // Max amount camera can pitch in either direction
                maxRoll={0.1} // Max amount camera can roll in either direction
                yawFrequency={0.1} // Frequency of the the yaw rotation
                pitchFrequency={0.1} // Frequency of the pitch rotation
                rollFrequency={0.1} // Frequency of the roll rotation
                intensity={1} // initial intensity of the shake
                decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
            />
            <group ref={group} {...props} dispose={null}>
                <group name="blockbench_export">
                    <group>
                        <group name="bone" position={[0, 0, 1]}>
                            <group name="Body" position={[0, 0.75, 0]}>
                                <mesh
                                    name="Body_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Body_1.geometry}
                                    material={nodes.Body_1.material}
                                    position={[0, -0.75, 0]}
                                />
                                <mesh
                                    name="Body_Layer"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Body_Layer.geometry}
                                    material={nodes.Body_Layer.material}
                                    position={[0, -0.75, 0]}
                                />
                                <group name="Head" position={[0, 0.75, 0]}>
                                    <mesh
                                        name="Head_1"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Head_1.geometry}
                                        material={nodes.Head_1.material}
                                        position={[0, -1.5, 0]}
                                    />
                                    <mesh
                                        name="Hat_Layer"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Hat_Layer.geometry}
                                        material={nodes.Hat_Layer.material}
                                        position={[0, -1.5, 0]}
                                    />
                                    <mesh
                                        name="camera"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.camera.geometry}
                                        material={nodes.camera.material}
                                        position={[0, 0.25, 0.188]}
                                    />
                                </group>
                                <group name="RightArm" position={[0.313, 0.625, 0]}>
                                    <mesh
                                        name="Right_Arm"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Right_Arm.geometry}
                                        material={nodes.Right_Arm.material}
                                        position={[-0.313, -0.625, 0]}
                                    />
                                    <mesh
                                        name="Right_Arm_Layer"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Right_Arm_Layer.geometry}
                                        material={nodes.Right_Arm_Layer.material}
                                        position={[-0.313, -0.625, 0]}
                                    />
                                </group>
                                <group name="LeftArm" position={[-0.313, 0.625, 0]}>
                                    <mesh
                                        name="Left_Arm"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Left_Arm.geometry}
                                        material={nodes.Left_Arm.material}
                                        position={[0.313, -1.375, 0]}
                                    />
                                    <mesh
                                        name="Left_Arm_Layer"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Left_Arm_Layer.geometry}
                                        material={nodes.Left_Arm_Layer.material}
                                        position={[0.313, -1.375, 0]}
                                    />
                                </group>
                            </group>
                            <group name="RightLeg" position={[0.119, 0.75, -0.016]}>
                                <mesh
                                    name="Right_Leg"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Right_Leg.geometry}
                                    material={nodes.Right_Leg.material}
                                    position={[-0.119, -0.75, 0]}
                                />
                                <mesh
                                    name="Right_Leg_Layer"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Right_Leg_Layer.geometry}
                                    material={nodes.Right_Leg_Layer.material}
                                    position={[-0.119, -0.75, 0]}
                                />
                            </group>
                            <group name="LeftLeg" position={[-0.119, 0.75, 0]}>
                                <mesh
                                    name="Left_Leg"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Left_Leg.geometry}
                                    material={nodes.Left_Leg.material}
                                    position={[0.119, -0.75, 0]}
                                />
                                <mesh
                                    name="Left_Leg_Layer"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Left_Leg_Layer.geometry}
                                    material={nodes.Left_Leg_Layer.material}
                                    position={[0.119, -0.75, 0]}
                                />
                            </group>
                        </group>
                        <group name="base2" position={[-2.063, 0, -2.509]} rotation={[0, -Math.PI / 2, 0]}>
                            <mesh
                                name="cube"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube.geometry}
                                material={nodes.cube.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_1.geometry}
                                material={nodes.cube_1.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_2.geometry}
                                material={nodes.cube_2.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_3"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_3.geometry}
                                material={nodes.cube_3.material}
                                position={[-1.813, 0, -0.5]}
                            />
                            <mesh
                                name="cube_4"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_4.geometry}
                                material={nodes.cube_4.material}
                                position={[-1.813, 0, -0.5]}
                            />
                            <mesh
                                name="cube_5"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_5.geometry}
                                material={nodes.cube_5.material}
                                position={[-1.813, 0, -0.5]}
                            />
                            <mesh
                                name="cube_6"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_6.geometry}
                                material={nodes.cube_6.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_7"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_7.geometry}
                                material={nodes.cube_7.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_8"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_8.geometry}
                                material={nodes.cube_8.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_9"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_9.geometry}
                                material={nodes.cube_9.material}
                                position={[-0.34, -0.481, -0.5]}
                                rotation={[0, 0, -Math.PI / 4]}
                            />
                            <mesh
                                name="cube_10"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_10.geometry}
                                material={nodes.cube_10.material}
                                position={[3.433, 2.613, -0.5]}
                                rotation={[0, 0, Math.PI / 4]}
                            />
                            <mesh
                                name="cube_11"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_11.geometry}
                                material={nodes.cube_11.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_12"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_12.geometry}
                                material={nodes.cube_12.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_13"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_13.geometry}
                                material={nodes.cube_13.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_14"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_14.geometry}
                                material={nodes.cube_14.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_15"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_15.geometry}
                                material={nodes.cube_15.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_16"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_16.geometry}
                                material={nodes.cube_16.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_17"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_17.geometry}
                                material={nodes.cube_17.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_18"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_18.geometry}
                                material={nodes.cube_18.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_19"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_19.geometry}
                                material={nodes.cube_19.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_20"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_20.geometry}
                                material={nodes.cube_20.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_21"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_21.geometry}
                                material={nodes.cube_21.material}
                                position={[0, 1, -0.5]}
                            />
                            <mesh
                                name="cube_22"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_22.geometry}
                                material={nodes.cube_22.material}
                                position={[0, 1, -0.5]}
                            />
                            <mesh
                                name="cube_23"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_23.geometry}
                                material={nodes.cube_23.material}
                                position={[0, -1, -0.5]}
                            />
                            <mesh
                                name="cube_24"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_24.geometry}
                                material={nodes.cube_24.material}
                                position={[0, -1, -0.5]}
                            />
                            <mesh
                                name="cube_25"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_25.geometry}
                                material={nodes.cube_25.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_26"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_26.geometry}
                                material={nodes.cube_26.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_27"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_27.geometry}
                                material={nodes.cube_27.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_28"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_28.geometry}
                                material={nodes.cube_28.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_29"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_29.geometry}
                                material={nodes.cube_29.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_30"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_30.geometry}
                                material={nodes.cube_30.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_31"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_31.geometry}
                                material={nodes.cube_31.material}
                                position={[0, 0, -0.5]}
                            />
                            <group name="door3" position={[0.875, 0.25, -0.5]}>
                                <mesh
                                    name="cube_32"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_32.geometry}
                                    material={nodes.cube_32.material}
                                    position={[-1.188, -0.25, 0.5]}
                                />
                                <mesh
                                    name="cube_33"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_33.geometry}
                                    material={nodes.cube_33.material}
                                    position={[-0.313, 0.875, 0.5]}
                                />
                                <mesh
                                    name="spruce"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce.geometry}
                                    material={nodes.spruce.material}
                                    position={[-0.313, 0.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_1.geometry}
                                    material={nodes.spruce_1.material}
                                    position={[-0.313, -0.125, 0.5]}
                                />
                                <mesh
                                    name="cube_34"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_34.geometry}
                                    material={nodes.cube_34.material}
                                    position={[-0.313, -0.125, 0.5]}
                                />
                                <mesh
                                    name="spruce_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_2.geometry}
                                    material={nodes.spruce_2.material}
                                    position={[-0.313, -0.125, 0.5]}
                                />
                                <mesh
                                    name="spruce_3"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_3.geometry}
                                    material={nodes.spruce_3.material}
                                    position={[-0.313, -1.125, 0.5]}
                                />
                                <mesh
                                    name="cube_35"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_35.geometry}
                                    material={nodes.cube_35.material}
                                    position={[-0.313, -1.125, 0.5]}
                                />
                                <mesh
                                    name="spruce_4"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_4.geometry}
                                    material={nodes.spruce_4.material}
                                    position={[-0.313, -1.125, 0.5]}
                                />
                            </group>
                            <group name="door4" position={[-0.813, 3, -0.5]}>
                                <mesh
                                    name="cube_36"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_36.geometry}
                                    material={nodes.cube_36.material}
                                    position={[-0.375, -3, 0.5]}
                                />
                                <mesh
                                    name="cube_37"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_37.geometry}
                                    material={nodes.cube_37.material}
                                    position={[0.5, -1.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_5"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_5.geometry}
                                    material={nodes.spruce_5.material}
                                    position={[0.5, -1.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_6"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_6.geometry}
                                    material={nodes.spruce_6.material}
                                    position={[0.5, -2.875, 0.5]}
                                />
                                <mesh
                                    name="cube_38"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_38.geometry}
                                    material={nodes.cube_38.material}
                                    position={[0.5, -2.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_7"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_7.geometry}
                                    material={nodes.spruce_7.material}
                                    position={[0.5, -2.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_8"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_8.geometry}
                                    material={nodes.spruce_8.material}
                                    position={[0.5, -3.875, 0.5]}
                                />
                                <mesh
                                    name="cube_39"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_39.geometry}
                                    material={nodes.cube_39.material}
                                    position={[0.5, -3.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_9"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_9.geometry}
                                    material={nodes.spruce_9.material}
                                    position={[0.5, -3.875, 0.5]}
                                />
                            </group>
                        </group>
                        <group name="base3" position={[2, 0, -0.509]} rotation={[0, Math.PI / 2, 0]}>
                            <mesh
                                name="cube_40"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_40.geometry}
                                material={nodes.cube_40.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_41"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_41.geometry}
                                material={nodes.cube_41.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_42"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_42.geometry}
                                material={nodes.cube_42.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_43"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_43.geometry}
                                material={nodes.cube_43.material}
                                position={[1.813, 0, -0.5]}
                            />
                            <mesh
                                name="cube_44"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_44.geometry}
                                material={nodes.cube_44.material}
                                position={[1.813, 0, -0.5]}
                            />
                            <mesh
                                name="cube_45"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_45.geometry}
                                material={nodes.cube_45.material}
                                position={[1.813, 0, -0.5]}
                            />
                            <mesh
                                name="cube_46"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_46.geometry}
                                material={nodes.cube_46.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_47"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_47.geometry}
                                material={nodes.cube_47.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_48"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_48.geometry}
                                material={nodes.cube_48.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_49"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_49.geometry}
                                material={nodes.cube_49.material}
                                position={[0.34, -0.481, -0.5]}
                                rotation={[0, 0, Math.PI / 4]}
                            />
                            <mesh
                                name="cube_50"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_50.geometry}
                                material={nodes.cube_50.material}
                                position={[-3.433, 2.613, -0.5]}
                                rotation={[0, 0, -Math.PI / 4]}
                            />
                            <mesh
                                name="cube_51"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_51.geometry}
                                material={nodes.cube_51.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_52"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_52.geometry}
                                material={nodes.cube_52.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_53"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_53.geometry}
                                material={nodes.cube_53.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_54"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_54.geometry}
                                material={nodes.cube_54.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_55"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_55.geometry}
                                material={nodes.cube_55.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_56"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_56.geometry}
                                material={nodes.cube_56.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_57"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_57.geometry}
                                material={nodes.cube_57.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_58"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_58.geometry}
                                material={nodes.cube_58.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_59"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_59.geometry}
                                material={nodes.cube_59.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_60"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_60.geometry}
                                material={nodes.cube_60.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_61"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_61.geometry}
                                material={nodes.cube_61.material}
                                position={[0, 1, -0.5]}
                            />
                            <mesh
                                name="cube_62"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_62.geometry}
                                material={nodes.cube_62.material}
                                position={[0, 1, -0.5]}
                            />
                            <mesh
                                name="cube_63"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_63.geometry}
                                material={nodes.cube_63.material}
                                position={[0, -1, -0.5]}
                            />
                            <mesh
                                name="cube_64"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_64.geometry}
                                material={nodes.cube_64.material}
                                position={[0, -1, -0.5]}
                            />
                            <mesh
                                name="cube_65"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_65.geometry}
                                material={nodes.cube_65.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_66"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_66.geometry}
                                material={nodes.cube_66.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_67"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_67.geometry}
                                material={nodes.cube_67.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_68"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_68.geometry}
                                material={nodes.cube_68.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_69"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_69.geometry}
                                material={nodes.cube_69.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_70"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_70.geometry}
                                material={nodes.cube_70.material}
                                position={[0, 0, -0.5]}
                            />
                            <mesh
                                name="cube_71"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_71.geometry}
                                material={nodes.cube_71.material}
                                position={[0, 0, -0.5]}
                            />
                            <group name="door5" position={[-0.875, 0.25, -0.5]}>
                                <mesh
                                    name="cube_72"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_72.geometry}
                                    material={nodes.cube_72.material}
                                    position={[1.188, -0.25, 0.5]}
                                />
                                <mesh
                                    name="cube_73"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_73.geometry}
                                    material={nodes.cube_73.material}
                                    position={[0.313, 0.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_10"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_10.geometry}
                                    material={nodes.spruce_10.material}
                                    position={[0.313, 0.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_11"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_11.geometry}
                                    material={nodes.spruce_11.material}
                                    position={[0.313, -0.125, 0.5]}
                                />
                                <mesh
                                    name="cube_74"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_74.geometry}
                                    material={nodes.cube_74.material}
                                    position={[0.313, -0.125, 0.5]}
                                />
                                <mesh
                                    name="spruce_12"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_12.geometry}
                                    material={nodes.spruce_12.material}
                                    position={[0.313, -0.125, 0.5]}
                                />
                                <mesh
                                    name="spruce_13"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_13.geometry}
                                    material={nodes.spruce_13.material}
                                    position={[0.313, -1.125, 0.5]}
                                />
                                <mesh
                                    name="cube_75"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_75.geometry}
                                    material={nodes.cube_75.material}
                                    position={[0.313, -1.125, 0.5]}
                                />
                                <mesh
                                    name="spruce_14"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_14.geometry}
                                    material={nodes.spruce_14.material}
                                    position={[0.313, -1.125, 0.5]}
                                />
                            </group>
                            <group name="door6" position={[0.813, 3, -0.5]}>
                                <mesh
                                    name="cube_76"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_76.geometry}
                                    material={nodes.cube_76.material}
                                    position={[0.375, -3, 0.5]}
                                />
                                <mesh
                                    name="cube_77"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_77.geometry}
                                    material={nodes.cube_77.material}
                                    position={[-0.5, -1.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_15"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_15.geometry}
                                    material={nodes.spruce_15.material}
                                    position={[-0.5, -1.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_16"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_16.geometry}
                                    material={nodes.spruce_16.material}
                                    position={[-0.5, -2.875, 0.5]}
                                />
                                <mesh
                                    name="cube_78"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_78.geometry}
                                    material={nodes.cube_78.material}
                                    position={[-0.5, -2.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_17"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_17.geometry}
                                    material={nodes.spruce_17.material}
                                    position={[-0.5, -2.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_18"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_18.geometry}
                                    material={nodes.spruce_18.material}
                                    position={[-0.5, -3.875, 0.5]}
                                />
                                <mesh
                                    name="cube_79"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_79.geometry}
                                    material={nodes.cube_79.material}
                                    position={[-0.5, -3.875, 0.5]}
                                />
                                <mesh
                                    name="spruce_19"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.spruce_19.geometry}
                                    material={nodes.spruce_19.material}
                                    position={[-0.5, -3.875, 0.5]}
                                />
                            </group>
                        </group>
                        <group name="Scene" position={[-3.438, 3, -0.438]}>
                            <mesh
                                name="cube_80"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_80.geometry}
                                material={nodes.cube_80.material}
                                position={[4, -4, 3]}
                            />
                            <group name="cube_81" position={[0, -4, 3]}>
                                <mesh
                                    name="mesh_114"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_114.geometry}
                                    material={nodes.mesh_114.material}
                                />
                                <mesh
                                    name="mesh_114_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_114_1.geometry}
                                    material={nodes.mesh_114_1.material}
                                />
                                <mesh
                                    name="mesh_114_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_114_2.geometry}
                                    material={nodes.mesh_114_2.material}
                                />
                            </group>
                            <mesh
                                name="cube_82"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_82.geometry}
                                material={nodes.cube_82.material}
                                position={[0, -4, -1]}
                            />
                            <group name="cube_83" position={[0, -4, -8]}>
                                <mesh
                                    name="mesh_116"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_116.geometry}
                                    material={nodes.mesh_116.material}
                                />
                                <mesh
                                    name="mesh_116_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_116_1.geometry}
                                    material={nodes.mesh_116_1.material}
                                />
                                <mesh
                                    name="mesh_116_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_116_2.geometry}
                                    material={nodes.mesh_116_2.material}
                                />
                            </group>
                            <mesh
                                name="cube_84"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_84.geometry}
                                material={nodes.cube_84.material}
                                position={[4.875, -4, 3]}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="cube_85"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_85.geometry}
                                material={nodes.cube_85.material}
                                position={[8.063, -4, 3]}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="cube_86"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_86.geometry}
                                material={nodes.cube_86.material}
                                position={[7.25, -4, 3]}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="cube_87"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_87.geometry}
                                material={nodes.cube_87.material}
                                position={[4, -4, -3]}
                            />
                            <mesh
                                name="cube_88"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_88.geometry}
                                material={nodes.cube_88.material}
                                position={[0, -4, -7]}
                            />
                            <mesh
                                name="cube_89"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_89.geometry}
                                material={nodes.cube_89.material}
                                position={[0, -4, -5]}
                            />
                            <mesh
                                name="cube_90"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_90.geometry}
                                material={nodes.cube_90.material}
                                position={[7.25, -4, -8]}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="cube_91"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_91.geometry}
                                material={nodes.cube_91.material}
                                position={[4.875, -4, -8]}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="cube_92"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_92.geometry}
                                material={nodes.cube_92.material}
                                position={[8.063, -4, -8]}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="cube_93"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_93.geometry}
                                material={nodes.cube_93.material}
                                position={[4, 1, 3]}
                            />
                            <mesh
                                name="cube_94"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_94.geometry}
                                material={nodes.cube_94.material}
                                position={[4, 1, -3]}
                            />
                            <group name="RemovedWall" position={[8, -4, -3]}>
                                <mesh
                                    name="cube_95"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_95.geometry}
                                    material={nodes.cube_95.material}
                                    position={[0, 0, 6]}
                                />
                                <mesh
                                    name="cube_96"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_96.geometry}
                                    material={nodes.cube_96.material}
                                />
                                <mesh
                                    name="cube_97"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_97.geometry}
                                    material={nodes.cube_97.material}
                                    position={[0, 5, 6]}
                                />
                                <mesh
                                    name="cube_98"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_98.geometry}
                                    material={nodes.cube_98.material}
                                    position={[0, 5, 0]}
                                />
                                <mesh
                                    name="cube_99"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_99.geometry}
                                    material={nodes.cube_99.material}
                                    position={[1, 5, 6]}
                                />
                                <mesh
                                    name="cube_100"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_100.geometry}
                                    material={nodes.cube_100.material}
                                    position={[1, 5, 0]}
                                />
                                <mesh
                                    name="cube_101"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_101.geometry}
                                    material={nodes.cube_101.material}
                                    position={[-5, 5, 6]}
                                />
                                <mesh
                                    name="cube_102"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_102.geometry}
                                    material={nodes.cube_102.material}
                                    position={[-5, 5, 0]}
                                />
                            </group>
                            <group name="otherwall" position={[5, -4, -5]}>
                                <mesh
                                    name="cube_103"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_103.geometry}
                                    material={nodes.cube_103.material}
                                    position={[1, 0, 0]}
                                />
                                <mesh
                                    name="cube_104"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_104.geometry}
                                    material={nodes.cube_104.material}
                                    position={[1, 0, -2]}
                                />
                                <group name="cube_105" position={[1, 0, -3]}>
                                    <mesh
                                        name="mesh_138"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.mesh_138.geometry}
                                        material={nodes.mesh_138.material}
                                    />
                                    <mesh
                                        name="mesh_138_1"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.mesh_138_1.geometry}
                                        material={nodes.mesh_138_1.material}
                                    />
                                    <mesh
                                        name="mesh_138_2"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.mesh_138_2.geometry}
                                        material={nodes.mesh_138_2.material}
                                    />
                                </group>
                                <mesh
                                    name="cube_106"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_106.geometry}
                                    material={nodes.cube_106.material}
                                    position={[1, 0, 4]}
                                />
                                <group name="cube_107" position={[1, 0, 8]}>
                                    <mesh
                                        name="mesh_140"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.mesh_140.geometry}
                                        material={nodes.mesh_140.material}
                                    />
                                    <mesh
                                        name="mesh_140_1"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.mesh_140_1.geometry}
                                        material={nodes.mesh_140_1.material}
                                    />
                                    <mesh
                                        name="mesh_140_2"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.mesh_140_2.geometry}
                                        material={nodes.mesh_140_2.material}
                                    />
                                </group>
                            </group>
                            <group name="doors" position={[3.438, -3, 3.438]}>
                                <group name="door" position={[-0.6, 1.35, 0]}>
                                    <mesh
                                        name="cube_108"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_108.geometry}
                                        material={nodes.cube_108.material}
                                        position={[0.6, -1.35, 0]}
                                    />
                                    <mesh
                                        name="cube_109"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_109.geometry}
                                        material={nodes.cube_109.material}
                                        position={[0.6, -1.35, 0]}
                                    />
                                    <mesh
                                        name="cube_110"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_110.geometry}
                                        material={nodes.cube_110.material}
                                        position={[0.6, -1.315, -0.752]}
                                        rotation={[Math.PI / 4, 0, 0]}
                                    />
                                    <mesh
                                        name="cube_111"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_111.geometry}
                                        material={nodes.cube_111.material}
                                        position={[1.002, -0.787, 0.017]}
                                        rotation={[0, Math.PI / 4, 0]}
                                    />
                                    <mesh
                                        name="cube_112"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_112.geometry}
                                        material={nodes.cube_112.material}
                                        position={[-0.04, 0.15, -0.752]}
                                        rotation={[0, -Math.PI / 4, 0]}
                                    />
                                    <mesh
                                        name="cube_113"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_113.geometry}
                                        material={nodes.cube_113.material}
                                        position={[0.6, -0.26, -0.752]}
                                        rotation={[-Math.PI / 4, 0, 0]}
                                    />
                                    <mesh
                                        name="cube_114"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_114.geometry}
                                        material={nodes.cube_114.material}
                                        position={[0.6, 1.015, -0.752]}
                                        rotation={[-Math.PI / 4, 0, 0]}
                                    />
                                    <mesh
                                        name="cube_115"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_115.geometry}
                                        material={nodes.cube_115.material}
                                        position={[-0.04, 1.425, -0.752]}
                                        rotation={[0, -Math.PI / 4, 0]}
                                    />
                                    <mesh
                                        name="cube_116"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_116.geometry}
                                        material={nodes.cube_116.material}
                                        position={[0.6, -0.04, -0.752]}
                                        rotation={[Math.PI / 4, 0, 0]}
                                    />
                                    <mesh
                                        name="cube_117"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_117.geometry}
                                        material={nodes.cube_117.material}
                                        position={[1.002, 0.488, 0.017]}
                                        rotation={[0, Math.PI / 4, 0]}
                                    />
                                    <mesh
                                        name="cube_118"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_118.geometry}
                                        material={nodes.cube_118.material}
                                        position={[0.6, -0.075, 0]}
                                    />
                                    <mesh
                                        name="cube_119"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_119.geometry}
                                        material={nodes.cube_119.material}
                                        position={[0.6, -1.35, 0]}
                                    />
                                    <mesh
                                        name="cube_120"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_120.geometry}
                                        material={nodes.cube_120.material}
                                        position={[0.6, -0.128, 0.035]}
                                    />
                                    <mesh
                                        name="cube_121"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_121.geometry}
                                        material={nodes.cube_121.material}
                                        position={[0.6, -1.344, 0.035]}
                                    />
                                    <group name="handle" position={[1.016, -0.188, 0.15]}>
                                        <mesh
                                            name="cube_122"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_122.geometry}
                                            material={nodes.cube_122.material}
                                            position={[-0.416, -1.125, -0.15]}
                                        />
                                        <mesh
                                            name="cube_123"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_123.geometry}
                                            material={nodes.cube_123.material}
                                            position={[-0.416, -1.125, -0.15]}
                                        />
                                    </group>
                                    <group name="door_label" position={[0.3, 0.488, 0.127]}>
                                        <mesh
                                            name="cube_124"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_124.geometry}
                                            material={nodes.cube_124.material}
                                            position={[0.3, -1.838, -0.15]}
                                        />
                                        <mesh
                                            name="cube_125"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_125.geometry}
                                            material={nodes.cube_125.material}
                                            position={[0.525, 0.134, 0]}
                                            rotation={[0, 0, Math.PI / 4]}
                                        />
                                        <mesh
                                            name="cube_126"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_126.geometry}
                                            material={nodes.cube_126.material}
                                            position={[0.225, -1.838, -0.15]}
                                        />
                                        <mesh
                                            name="cube_127"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_127.geometry}
                                            material={nodes.cube_127.material}
                                            position={[0.526, -0.134, 0]}
                                            rotation={[0, 0, -Math.PI / 4]}
                                        />
                                        <mesh
                                            name="cube_128"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_128.geometry}
                                            material={nodes.cube_128.material}
                                            position={[0.074, -0.134, 0]}
                                            rotation={[0, 0, Math.PI / 4]}
                                        />
                                        <mesh
                                            name="cube_129"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_129.geometry}
                                            material={nodes.cube_129.material}
                                            position={[0.075, 0.134, 0]}
                                            rotation={[0, 0, -Math.PI / 4]}
                                        />
                                        <mesh
                                            name="cube_130"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_130.geometry}
                                            material={nodes.cube_130.material}
                                            position={[0.375, -1.838, -0.15]}
                                        />
                                        <mesh
                                            name="cube_131"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.cube_131.geometry}
                                            material={nodes.cube_131.material}
                                            position={[0.269, -0.353, 0.141]}
                                        />
                                    </group>
                                </group>
                                <group name="door_frame">
                                    <mesh
                                        name="cube_132"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_132.geometry}
                                        material={nodes.cube_132.material}
                                    />
                                    <mesh
                                        name="cube_133"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_133.geometry}
                                        material={nodes.cube_133.material}
                                    />
                                    <mesh
                                        name="cube_134"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_134.geometry}
                                        material={nodes.cube_134.material}
                                    />
                                    <mesh
                                        name="cube_135"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_135.geometry}
                                        material={nodes.cube_135.material}
                                    />
                                    <mesh
                                        name="cube_136"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_136.geometry}
                                        material={nodes.cube_136.material}
                                    />
                                </group>
                            </group>
                        </group>
                        <group name="group2" position={[-2, 2.688, 1.031]} rotation={[0, -Math.PI / 2, 0]}>
                            <mesh
                                name="cube_137"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_137.geometry}
                                material={nodes.cube_137.material}
                                position={[0, -0.25, 5.469]}
                            />
                            <mesh
                                name="cube_138"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_138.geometry}
                                material={nodes.cube_138.material}
                                position={[0, -0.25, 5.469]}
                            />
                            <mesh
                                name="cube_139"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_139.geometry}
                                material={nodes.cube_139.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_140"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_140.geometry}
                                material={nodes.cube_140.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_141"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_141.geometry}
                                material={nodes.cube_141.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[0, Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_142"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_142.geometry}
                                material={nodes.cube_142.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[0, -Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_143"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_143.geometry}
                                material={nodes.cube_143.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_144"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_144.geometry}
                                material={nodes.cube_144.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_145"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_145.geometry}
                                material={nodes.cube_145.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[0, Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_146"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_146.geometry}
                                material={nodes.cube_146.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_147"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_147.geometry}
                                material={nodes.cube_147.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_148"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_148.geometry}
                                material={nodes.cube_148.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[0, -Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_149"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_149.geometry}
                                material={nodes.cube_149.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_150"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_150.geometry}
                                material={nodes.cube_150.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_151"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_151.geometry}
                                material={nodes.cube_151.material}
                                position={[0, -0.25, 0.5]}
                            />
                            <mesh
                                name="cube_152"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_152.geometry}
                                material={nodes.cube_152.material}
                                position={[0, -0.25, 0.5]}
                            />
                        </group>
                        <group name="group5" position={[2, 2.688, 1.031]} rotation={[0, Math.PI / 2, 0]}>
                            <mesh
                                name="cube_153"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_153.geometry}
                                material={nodes.cube_153.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[0, -Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_154"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_154.geometry}
                                material={nodes.cube_154.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_155"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_155.geometry}
                                material={nodes.cube_155.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_156"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_156.geometry}
                                material={nodes.cube_156.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[0, Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_157"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_157.geometry}
                                material={nodes.cube_157.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_158"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_158.geometry}
                                material={nodes.cube_158.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_159"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_159.geometry}
                                material={nodes.cube_159.material}
                                position={[0, -0.25, 0.5]}
                            />
                            <mesh
                                name="cube_160"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_160.geometry}
                                material={nodes.cube_160.material}
                                position={[0, -0.25, 0.5]}
                            />
                        </group>
                        <group name="group3" position={[-2, 2.688, 1.031]} rotation={[0, -Math.PI / 2, 0]}>
                            <mesh
                                name="cube_161"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_161.geometry}
                                material={nodes.cube_161.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[0, Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_162"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_162.geometry}
                                material={nodes.cube_162.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_163"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_163.geometry}
                                material={nodes.cube_163.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_164"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_164.geometry}
                                material={nodes.cube_164.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[0, -Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_165"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_165.geometry}
                                material={nodes.cube_165.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_166"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_166.geometry}
                                material={nodes.cube_166.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_167"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_167.geometry}
                                material={nodes.cube_167.material}
                                position={[0, -0.25, 0.5]}
                            />
                            <mesh
                                name="cube_168"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_168.geometry}
                                material={nodes.cube_168.material}
                                position={[0, -0.25, 0.5]}
                            />
                            <mesh
                                name="cube_169"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_169.geometry}
                                material={nodes.cube_169.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[0, Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_170"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_170.geometry}
                                material={nodes.cube_170.material}
                                position={[0, -0.25, 5.469]}
                            />
                            <mesh
                                name="cube_171"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_171.geometry}
                                material={nodes.cube_171.material}
                                position={[0, -0.25, 5.469]}
                            />
                            <mesh
                                name="cube_172"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_172.geometry}
                                material={nodes.cube_172.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_173"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_173.geometry}
                                material={nodes.cube_173.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_174"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_174.geometry}
                                material={nodes.cube_174.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[0, -Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_175"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_175.geometry}
                                material={nodes.cube_175.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_176"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_176.geometry}
                                material={nodes.cube_176.material}
                                position={[0, -0.25, 5.469]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                        </group>
                        <group name="group4" position={[2, 2.688, 1.031]} rotation={[0, Math.PI / 2, 0]}>
                            <mesh
                                name="cube_177"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_177.geometry}
                                material={nodes.cube_177.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[0, -Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_178"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_178.geometry}
                                material={nodes.cube_178.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_179"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_179.geometry}
                                material={nodes.cube_179.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_180"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_180.geometry}
                                material={nodes.cube_180.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[0, Math.PI / 4, 0]}
                            />
                            <mesh
                                name="cube_181"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_181.geometry}
                                material={nodes.cube_181.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_182"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_182.geometry}
                                material={nodes.cube_182.material}
                                position={[0, -0.25, 0.5]}
                                rotation={[-Math.PI / 8, 0, 0]}
                            />
                            <mesh
                                name="cube_183"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_183.geometry}
                                material={nodes.cube_183.material}
                                position={[0, -0.25, 0.5]}
                            />
                            <mesh
                                name="cube_184"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_184.geometry}
                                material={nodes.cube_184.material}
                                position={[0, -0.25, 0.5]}
                            />
                        </group>
                        <group name="doors2" position={[0, 0, -8]}>
                            <group name="door2" position={[-0.6, 1.35, 0]}>
                                <mesh
                                    name="cube_185"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_185.geometry}
                                    material={nodes.cube_185.material}
                                    position={[0.6, -1.35, 0]}
                                />
                                <mesh
                                    name="cube_186"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_186.geometry}
                                    material={nodes.cube_186.material}
                                    position={[0.6, -1.35, 0]}
                                />
                                <mesh
                                    name="cube_187"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_187.geometry}
                                    material={nodes.cube_187.material}
                                    position={[0.6, -1.315, -0.752]}
                                    rotation={[Math.PI / 4, 0, 0]}
                                />
                                <mesh
                                    name="cube_188"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_188.geometry}
                                    material={nodes.cube_188.material}
                                    position={[1.002, -0.787, 0.017]}
                                    rotation={[0, Math.PI / 4, 0]}
                                />
                                <mesh
                                    name="cube_189"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_189.geometry}
                                    material={nodes.cube_189.material}
                                    position={[-0.04, 0.15, -0.752]}
                                    rotation={[0, -Math.PI / 4, 0]}
                                />
                                <mesh
                                    name="cube_190"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_190.geometry}
                                    material={nodes.cube_190.material}
                                    position={[0.6, -0.26, -0.752]}
                                    rotation={[-Math.PI / 4, 0, 0]}
                                />
                                <mesh
                                    name="cube_191"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_191.geometry}
                                    material={nodes.cube_191.material}
                                    position={[0.6, 1.015, -0.752]}
                                    rotation={[-Math.PI / 4, 0, 0]}
                                />
                                <mesh
                                    name="cube_192"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_192.geometry}
                                    material={nodes.cube_192.material}
                                    position={[-0.04, 1.425, -0.752]}
                                    rotation={[0, -Math.PI / 4, 0]}
                                />
                                <mesh
                                    name="cube_193"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_193.geometry}
                                    material={nodes.cube_193.material}
                                    position={[0.6, -0.04, -0.752]}
                                    rotation={[Math.PI / 4, 0, 0]}
                                />
                                <mesh
                                    name="cube_194"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_194.geometry}
                                    material={nodes.cube_194.material}
                                    position={[1.002, 0.488, 0.017]}
                                    rotation={[0, Math.PI / 4, 0]}
                                />
                                <mesh
                                    name="cube_195"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_195.geometry}
                                    material={nodes.cube_195.material}
                                    position={[0.6, -0.075, 0]}
                                />
                                <mesh
                                    name="cube_196"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_196.geometry}
                                    material={nodes.cube_196.material}
                                    position={[0.6, -1.35, 0]}
                                />
                                <mesh
                                    name="cube_197"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_197.geometry}
                                    material={nodes.cube_197.material}
                                    position={[0.6, -0.128, 0.035]}
                                />
                                <mesh
                                    name="cube_198"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_198.geometry}
                                    material={nodes.cube_198.material}
                                    position={[0.6, -1.344, 0.035]}
                                />
                                <group name="handle2" position={[1.016, -0.188, 0.15]}>
                                    <mesh
                                        name="cube_199"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_199.geometry}
                                        material={nodes.cube_199.material}
                                        position={[-0.416, -1.125, -0.15]}
                                    />
                                    <mesh
                                        name="cube_200"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_200.geometry}
                                        material={nodes.cube_200.material}
                                        position={[-0.416, -1.125, -0.15]}
                                    />
                                </group>
                                <group name="door_label2" position={[0.3, 0.488, 0.127]}>
                                    <mesh
                                        name="cube_201"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_201.geometry}
                                        material={nodes.cube_201.material}
                                        position={[0.3, -1.838, -0.15]}
                                    />
                                    <mesh
                                        name="cube_202"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_202.geometry}
                                        material={nodes.cube_202.material}
                                        position={[0.525, 0.134, 0]}
                                        rotation={[0, 0, Math.PI / 4]}
                                    />
                                    <mesh
                                        name="cube_203"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_203.geometry}
                                        material={nodes.cube_203.material}
                                        position={[0.225, -1.838, -0.15]}
                                    />
                                    <mesh
                                        name="cube_204"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_204.geometry}
                                        material={nodes.cube_204.material}
                                        position={[0.526, -0.134, 0]}
                                        rotation={[0, 0, -Math.PI / 4]}
                                    />
                                    <mesh
                                        name="cube_205"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_205.geometry}
                                        material={nodes.cube_205.material}
                                        position={[0.074, -0.134, 0]}
                                        rotation={[0, 0, Math.PI / 4]}
                                    />
                                    <mesh
                                        name="cube_206"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_206.geometry}
                                        material={nodes.cube_206.material}
                                        position={[0.075, 0.134, 0]}
                                        rotation={[0, 0, -Math.PI / 4]}
                                    />
                                    <mesh
                                        name="cube_207"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_207.geometry}
                                        material={nodes.cube_207.material}
                                        position={[0.375, -1.838, -0.15]}
                                    />
                                    <mesh
                                        name="cube_208"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.cube_208.geometry}
                                        material={nodes.cube_208.material}
                                        position={[0.247, -0.369, 0.141]}
                                    />
                                </group>
                            </group>
                            <group name="door_frame2">
                                <mesh
                                    name="cube_209"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_209.geometry}
                                    material={nodes.cube_209.material}
                                />
                                <mesh
                                    name="cube_210"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_210.geometry}
                                    material={nodes.cube_210.material}
                                />
                                <mesh
                                    name="cube_211"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_211.geometry}
                                    material={nodes.cube_211.material}
                                />
                                <mesh
                                    name="cube_212"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_212.geometry}
                                    material={nodes.cube_212.material}
                                />
                                <mesh
                                    name="cube_213"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_213.geometry}
                                    material={nodes.cube_213.material}
                                />
                            </group>
                        </group>
                        <group name="Rush" position={[0.063, 2, -2.125]} rotation={[0, Math.PI / 2, 0]}>
                            <mesh
                                name="cube_214"
                                castShadow
                                receiveShadow
                                geometry={nodes.cube_214.geometry}
                                material={nodes.cube_214.material}
                                position={[-0.063, -2, -1.938]}
                            />
                            <group name="RushParticles" position={[-0.183, 0, 0]}>
                                <mesh
                                    name="cube_215"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_215.geometry}
                                    material={nodes.cube_215.material}
                                    position={[0.12, -2, 0.063]}
                                />
                                <mesh
                                    name="cube_216"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_216.geometry}
                                    material={nodes.cube_216.material}
                                    position={[0.12, -1, 0.063]}
                                />
                                <mesh
                                    name="cube_217"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_217.geometry}
                                    material={nodes.cube_217.material}
                                    position={[0.12, 0, 0.063]}
                                />
                                <mesh
                                    name="cube_218"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_218.geometry}
                                    material={nodes.cube_218.material}
                                    position={[0.12, 1, 0.063]}
                                />
                                <mesh
                                    name="cube_219"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_219.geometry}
                                    material={nodes.cube_219.material}
                                    position={[0.12, 0, -0.938]}
                                />
                                <mesh
                                    name="cube_220"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_220.geometry}
                                    material={nodes.cube_220.material}
                                    position={[0.12, 1, -0.938]}
                                />
                                <mesh
                                    name="cube_221"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_221.geometry}
                                    material={nodes.cube_221.material}
                                    position={[0.12, -2, -0.938]}
                                />
                                <mesh
                                    name="cube_222"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_222.geometry}
                                    material={nodes.cube_222.material}
                                    position={[0.12, -1, -0.938]}
                                />
                                <mesh
                                    name="cube_223"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_223.geometry}
                                    material={nodes.cube_223.material}
                                    position={[-0.005, 0, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                                <mesh
                                    name="cube_224"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_224.geometry}
                                    material={nodes.cube_224.material}
                                    position={[-0.005, 0, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                                <mesh
                                    name="cube_225"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_225.geometry}
                                    material={nodes.cube_225.material}
                                    position={[-0.005, 0, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                                <mesh
                                    name="cube_226"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_226.geometry}
                                    material={nodes.cube_226.material}
                                    position={[-0.005, 0, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                                <mesh
                                    name="cube_227"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_227.geometry}
                                    material={nodes.cube_227.material}
                                    position={[-0.005, 0, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                                <mesh
                                    name="cube_228"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_228.geometry}
                                    material={nodes.cube_228.material}
                                    position={[-0.005, 0, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                                <mesh
                                    name="cube_229"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_229.geometry}
                                    material={nodes.cube_229.material}
                                    position={[-0.005, 0, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                                <mesh
                                    name="cube_230"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.cube_230.geometry}
                                    material={nodes.cube_230.material}
                                    position={[-0.005, 0, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </>
    )
}