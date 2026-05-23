"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

const ThreeCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black -z-10" />
});

const Scene = dynamic(() => import("./ThreeScene"), { ssr: false });

const Background3D = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Initial check
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        
        if (!mobile) {
            const timer = setTimeout(() => setShouldRender(true), 6000);
            return () => clearTimeout(timer);
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Static background for mobile - zero JS overhead
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
                        powerPreference: "high-performance"
                    }} 
                    camera={{ position: [0, 0, 1] }}
                    dpr={[1, 1]}
                >
                    <Scene />
                </ThreeCanvas>
            </Suspense>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
        </div>
    );
};

export default Background3D;
