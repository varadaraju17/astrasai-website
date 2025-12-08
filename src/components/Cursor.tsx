'use client'

import { useEffect, useState } from 'react'

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })

            const target = e.target as HTMLElement
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <div
                className="cursor-dot"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
            <div
                className={`cursor-outline ${isPointer ? 'scale-150 bg-white/10 border-transparent' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
        </>
    )
}
