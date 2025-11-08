'use client'

// Lightweight client-only decorative background to avoid importing heavy
// three/fiber/maath modules at runtime. This prevents the React reconciler
// runtime error seen on some environments. If you want the 3D scene back,
// reintroduce the previous HeroCanvas implementation after resolving
// dependency/version mismatches for @react-three/fiber and related libs.

export default function HeroCanvas() {
  return (
    <div className="w-full h-full relative overflow-hidden" aria-hidden>
      {/* Sacred Geometry Patterns */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="glow1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 20, 147, 0.2)" />
              <stop offset="50%" stopColor="rgba(123, 97, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 245, 255, 0.2)" />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          
          {/* Chakra (Wheel) Pattern */}
          <g className="animate-chakra-spin origin-center" style={{ transformBox: 'fill-box' }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 500 500)`}>
                <path
                  d="M 500 100 L 500 200"
                  stroke="url(#glow1)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="500"
                  cy="150"
                  r="5"
                  fill="url(#glow1)"
                />
              </g>
            ))}
            <circle
              cx="500"
              cy="500"
              r="300"
              stroke="url(#glow1)"
              strokeWidth="1"
              fill="none"
            />
          </g>

          {/* Sri Yantra Pattern */}
          <g transform="translate(500 500) scale(0.8)">
            {Array.from({ length: 9 }).map((_, i) => (
              <polygon
                key={i}
                points={`
                  ${Math.cos((Math.PI * 2 * i) / 9) * 200},${Math.sin((Math.PI * 2 * i) / 9) * 200}
                  ${Math.cos((Math.PI * 2 * (i + 1)) / 9) * 200},${Math.sin((Math.PI * 2 * (i + 1)) / 9) * 200}
                  0,0
                `}
                stroke="url(#glow1)"
                strokeWidth="1"
                fill="none"
                className="animate-cosmic-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.2})`,
              filter: 'blur(1px)',
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * -10}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-trishul-500/10 via-mystic-500/5 to-chakra-500/10 animate-cosmic-pulse" />
      <div className="absolute inset-0 bg-gradient-to-tr from-mystic-900/50 via-transparent to-transparent" />
    </div>
  )
}
