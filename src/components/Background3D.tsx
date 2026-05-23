// Pure CSS animated background — replaces Three.js to eliminate 16,000ms TBT
// Visually equivalent: animated glowing orbs + star field via CSS only
const Background3D = () => {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black">
            {/* Star field — pure CSS dots */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                    radial-gradient(1px 1px at 10% 15%, rgba(0,240,255,0.6) 0%, transparent 100%),
                    radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.4) 0%, transparent 100%),
                    radial-gradient(1px 1px at 40% 70%, rgba(0,240,255,0.5) 0%, transparent 100%),
                    radial-gradient(1px 1px at 55% 20%, rgba(255,255,255,0.3) 0%, transparent 100%),
                    radial-gradient(1px 1px at 70% 55%, rgba(0,240,255,0.4) 0%, transparent 100%),
                    radial-gradient(1px 1px at 80% 85%, rgba(255,255,255,0.5) 0%, transparent 100%),
                    radial-gradient(1px 1px at 90% 35%, rgba(0,240,255,0.3) 0%, transparent 100%),
                    radial-gradient(1.5px 1.5px at 15% 65%, rgba(139,92,246,0.5) 0%, transparent 100%),
                    radial-gradient(1px 1px at 35% 90%, rgba(255,255,255,0.4) 0%, transparent 100%),
                    radial-gradient(1.5px 1.5px at 60% 45%, rgba(0,240,255,0.6) 0%, transparent 100%),
                    radial-gradient(1px 1px at 75% 10%, rgba(139,92,246,0.4) 0%, transparent 100%),
                    radial-gradient(1px 1px at 85% 60%, rgba(255,255,255,0.3) 0%, transparent 100%),
                    radial-gradient(2px 2px at 5% 50%, rgba(0,240,255,0.5) 0%, transparent 100%),
                    radial-gradient(1px 1px at 45% 5%, rgba(255,255,255,0.6) 0%, transparent 100%),
                    radial-gradient(1.5px 1.5px at 95% 75%, rgba(139,92,246,0.5) 0%, transparent 100%)
                `,
            }} />

            {/* Animated orb 1 — cyan */}
            <div style={{
                position: 'absolute',
                top: '20%', left: '20%',
                width: '40vw', height: '40vw',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                animation: 'orbFloat1 18s ease-in-out infinite',
            }} />

            {/* Animated orb 2 — purple */}
            <div style={{
                position: 'absolute',
                bottom: '20%', right: '20%',
                width: '35vw', height: '35vw',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                animation: 'orbFloat2 22s ease-in-out infinite',
            }} />

            {/* Animated orb 3 — blue center */}
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '45vw', height: '45vw',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
                filter: 'blur(80px)',
                animation: 'orbFloat3 25s ease-in-out infinite',
            }} />

            {/* Subtle grid */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
            }} />

            {/* Bottom fade */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8) 100%)',
            }} />

            <style>{`
                @keyframes orbFloat1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(6vw, -4vh) scale(1.1); }
                    66% { transform: translate(-4vw, 5vh) scale(0.95); }
                }
                @keyframes orbFloat2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-5vw, 4vh) scale(1.05); }
                    66% { transform: translate(4vw, -6vh) scale(0.9); }
                }
                @keyframes orbFloat3 {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); }
                    50% { transform: translate(-50%, -50%) scale(1.15); }
                }
            `}</style>
        </div>
    );
};

export default Background3D;

