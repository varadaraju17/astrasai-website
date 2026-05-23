"use client";

import React from "react";

const Background3D = () => {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden bg-black">
            {/* Cyber Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Glowing Nebulas / Hologram Auras */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] animate-drift-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-drift-reverse" />
            <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse-slow" />

            {/* Dynamic CSS Particle Field */}
            <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_30px,#fff,transparent),radial-gradient(1.5px_1.5px_at_40px_70px,#00f0ff,transparent),radial-gradient(1px_1px_at_50px_160px,#fff,transparent),radial-gradient(2px_2px_at_90px_40px,#a855f7,transparent),radial-gradient(1.5px_1.5px_at_130px_80px,#00f0ff,transparent),radial-gradient(1px_1px_at_160px_120px,#fff,transparent)] bg-[size:200px_200px] opacity-[0.25]" />

            {/* Top and Bottom Fades */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

            {/* Custom Embedded Keyframe Styles for Maximum Performance & Portability */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes driftSlow {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(4%, 3%) scale(1.15); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                @keyframes driftReverse {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-3%, -4%) scale(1.1); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                @keyframes pulseSlow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                .animate-drift-slow {
                    animation: driftSlow 25s infinite ease-in-out;
                }
                .animate-drift-reverse {
                    animation: driftReverse 30s infinite ease-in-out;
                }
                .animate-pulse-slow {
                    animation: pulseSlow 15s infinite ease-in-out;
                }
            `}} />
        </div>
    );
};

export default Background3D;
