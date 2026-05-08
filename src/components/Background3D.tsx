"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import Three.js components with no SSR
const ThreeCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />
});

// Scene components should also be dynamic to keep them out of the mobile bundle
const Scene = dynamic(() => import("./ThreeScene"), { ssr: false });

const Background3D = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // On desktop, we want to render after a delay
            if (!mobile) {
                const timer = setTimeout(() => setShouldRender(true), 1500);
                return () => clearTimeout(timer);
            }
        };
        
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // ZERO impact on mobile: No Three.js code will even be parsed
    if (isMobile) {
        return (
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden bg-void">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20 opacity-40" />
            </div>
        );
    }

    if (!shouldRender) return <div className="absolute inset-0 bg-black -z-10" />;

    return (
        <div className="absolute inset-0 -z-10 pointer-events-none h-full w-full overflow-hidden">
            <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
                <ThreeCanvas 
                    gl={{ 
                        antialias: false, 
                        alpha: true, 
                        powerPreference: "high-performance",
                        preserveDrawingBuffer: false
                    }} 
                    camera={{ position: [0, 0, 1] }}
                    dpr={[1, 1.2]}
                >
                    <Scene />
                </ThreeCanvas>
            </Suspense>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
        </div>
    );
};

export default Background3D;
