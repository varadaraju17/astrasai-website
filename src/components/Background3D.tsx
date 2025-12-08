"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Scene = () => {
    return (
        <>
            {/* <ambientLight intensity={0.2} /> */}
            <Stars radius={100} depth={50} count={1000} factor={6} saturation={0} fade />
        </>
    );
};

const Background3D = () => {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none h-full w-full">
            <Canvas gl={{ antialias: false, alpha: true }} camera={{ position: [0, 0, 1] }}>
                <Scene />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
        </div>
    );
};

export default Background3D;
