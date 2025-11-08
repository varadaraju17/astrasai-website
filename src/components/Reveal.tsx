'use client'
import { ReactNode } from 'react'

// Simple Reveal replacement: static wrapper. If you want scroll-based reveal later,
// we can reintroduce an intersection observer to add classes.
export default function Reveal({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}
