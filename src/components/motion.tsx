/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { forwardRef } from 'react'

// Lightweight passthrough components to replace framer-motion wrappers.
// These maintain refs and accept className/children so existing imports still work
export const MotionHeader = forwardRef<HTMLDivElement, any>(function MotionHeader(props, ref) {
	return <header ref={ref} {...props} />
})

export const MotionDiv = forwardRef<HTMLDivElement, any>(function MotionDiv(props, ref) {
	return <div ref={ref} {...props} />
})

export const MotionLink = forwardRef<HTMLAnchorElement, any>(function MotionLink(props, ref) {
	return <a ref={ref} {...props} />
})

export const MotionButton = forwardRef<HTMLButtonElement, any>(function MotionButton(props, ref) {
	return <button ref={ref} {...props} />
})