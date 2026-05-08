"use client";

import React, { useState, useEffect, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Scene = memo(() => {
    return (
        <Stars radius={100} depth={50} count={1000} factor={6} saturation={0} fade />
    );
});

Scene.displayName = "Scene";

const Background3D = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) return <div className="absolute inset-0 bg-void -z-10" />;

    return (
        <div className="absolute inset-0 -z-10 pointer-events-none h-full w-full overflow-hidden">
            <Canvas 
                gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }} 
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]} // Optimize pixel ratio
            >
                <Scene />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
        </div>
    );
};

export default memo(Background3D);

