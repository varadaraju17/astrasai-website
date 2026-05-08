"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}


const Scene = () => {
    const pointsRef = useRef<THREE.Points>(null);

    const particlesCount = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 4;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.008}
                color="#00f0ff"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
};

export default Scene;
