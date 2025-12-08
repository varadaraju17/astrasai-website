'use client'

export default function HeroCanvas() {
  return (
    <div className="w-full h-full relative overflow-hidden" aria-hidden>
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-glow [animation-delay:1s]"></div>

      {/* Animated Particles (CSS Implementation) */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * -5}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 2 === 0 ? '#00F0FF' : '#7000FF'}`
            }}
          />
        ))}
      </div>

      {/* Connecting Lines (Simulated Network) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ filter: 'drop-shadow(0 0 5px #00F0FF)' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(112, 0, 255, 0)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 5 }).map((_, i) => (
          <path
            key={i}
            d={`M ${Math.random() * 1000} ${Math.random() * 1000} Q ${500 + Math.random() * 200} ${500 + Math.random() * 200} ${Math.random() * 1000} ${Math.random() * 1000}`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: `${Math.random() * 5 + 3}s` }}
          />
        ))}
      </svg>
    </div>
  )
}
