'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface HolographicIconProps {
    icon: LucideIcon
    color?: 'cyan' | 'purple' | 'pink' | 'white'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
}

const HolographicIcon: React.FC<HolographicIconProps> = ({
    icon: Icon,
    color = 'cyan',
    size = 'lg',
    className = ''
}) => {
    const colors = {
        cyan: {
            main: 'text-hologram-cyan',
            border: 'border-hologram-cyan/30',
            glow: 'shadow-[0_0_15px_rgba(0,240,255,0.3)]',
            bg: 'bg-hologram-cyan/10',
            gradient: 'from-hologram-cyan/20'
        },
        purple: {
            main: 'text-hologram-purple',
            border: 'border-hologram-purple/30',
            glow: 'shadow-[0_0_15px_rgba(147,51,234,0.3)]',
            bg: 'bg-hologram-purple/10',
            gradient: 'from-hologram-purple/20'
        },
        pink: {
            main: 'text-hologram-pink',
            border: 'border-hologram-pink/30',
            glow: 'shadow-[0_0_15px_rgba(236,72,153,0.3)]',
            bg: 'bg-hologram-pink/10',
            gradient: 'from-hologram-pink/20'
        },
        white: {
            main: 'text-white',
            border: 'border-white/30',
            glow: 'shadow-[0_0_15px_rgba(255,255,255,0.3)]',
            bg: 'bg-white/10',
            gradient: 'from-white/20'
        }
    }

    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
    }

    const theme = colors[color]

    return (
        <div className={`relative ${sizes[size]} ${className} flex items-center justify-center group/icon`}>
            {/* Outer Rotating Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-0 rounded-full border ${theme.border} border-t-transparent border-l-transparent opacity-60`}
            />

            {/* Inner Counter-Rotating Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-1 rounded-full border ${theme.border} border-b-transparent border-r-transparent opacity-40`}
            />

            {/* Pulsing Core Background */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute inset-2 rounded-full ${theme.bg} blur-sm`}
            />

            {/* The Icon */}
            <div className={`relative z-10 ${theme.main} drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
                <Icon className="w-1/2 h-1/2 mx-auto" strokeWidth={1.5} />
            </div>

            {/* Floating Particles */}
            <motion.div
                animate={{ y: [-2, 2, -2], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`absolute top-0 right-0 w-1 h-1 rounded-full ${theme.main} blur-[1px]`}
            />
            <motion.div
                animate={{ y: [2, -2, 2], opacity: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute bottom-0 left-0 w-1 h-1 rounded-full ${theme.main} blur-[1px]`}
            />
        </div>
    )
}

export default HolographicIcon
