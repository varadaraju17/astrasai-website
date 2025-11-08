'use client'
import { ReactNode } from 'react'

export function Grid({ children }: { children: ReactNode }) {
	return <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{children}</div>
}

export function Card({ children }: { children: ReactNode }) {
	return (
		<div className="transition-transform transform hover:-translate-y-1 hover:scale-105">
			<div className="card">{children}</div>
		</div>
	)
}
