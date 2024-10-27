import * as THREE from 'three';
import { Html, useProgress } from "@react-three/drei";
import { easing } from "maath";
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function CameraRig({ elementId }: { elementId: string }) {
    const hovering = useRef(false);

    // Constants to avoid recreating values every frame
    const HOVER_Z = 1.5;
    const DEFAULT_Z = 4.2;
    const X_SENSITIVITY = 1.5;
    const Y_SENSITIVITY = 0.5;
    const EASING_FACTOR = 0.5;

    // Setup event listeners using useEffect to prevent memory leaks
    useEffect(() => {
        const item = document.getElementById(elementId);
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

export function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress.toFixed(2)}% loaded...</Html>
}