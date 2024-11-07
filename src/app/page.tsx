'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Send } from 'lucide-react'
import React from 'react'

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('resize', updateWindowSize)

    updateWindowSize()

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', updateWindowSize)
    }
  }, [])

  const calculateTilt = () => {
    if (windowSize.width === 0 || windowSize.height === 0) return 'none'

    const centerX = windowSize.width / 2
    const centerY = windowSize.height / 2
    const maxTilt = 15

    const tiltX = ((mousePosition.y - centerY) / centerY) * maxTilt
    const tiltY = ((mousePosition.x - centerX) / centerX) * -maxTilt

    return `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Enhanced esoteric background */}
      <div className="absolute inset-0 bg-[#050211] transition-all duration-1000">
        {/* Improved star field with smoother animation */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJzdGFyIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiIGZ4PSI1MCUiIGZ5PSI1MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz4KICA8ZyBmaWxsPSJ1cmwoI3N0YXIpIj4KICAgIDxjaXJjbGUgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMXB4IiBvcGFjaXR5PSIwLjMiLz4KICAgIDxjaXJjbGUgY3g9IjMwJSIgY3k9IjMwJSIgcj0iMXB4IiBvcGFjaXR5PSIwLjMiLz4KICAgIDxjaXJjbGUgY3g9IjcwJSIgY3k9IjcwJSIgcj0iMXB4IiBvcGFjaXR5PSIwLjMiLz4KICAgIDxjaXJjbGUgY3g9IjIwJSIgY3k9IjgwJSIgcj0iMXB4IiBvcGFjaXR5PSIwLjMiLz4KICAgIDxjaXJjbGUgY3g9IjgwJSIgY3k9IjIwJSIgcj0iMXB4IiBvcGFjaXR5PSIwLjMiLz4KICA8L2c+Cjwvc3ZnPg==')] bg-repeat opacity-50" />
        
        {/* Smoother nebula effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-green-900/20 animate-gradient transition-all duration-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,200,150,0.05),transparent_80%)] transition-all duration-1000" />
        
        {/* Enhanced mystical glow with smoother animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,200,150,0.08),transparent_60%)] animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_60%)] animate-pulse-slower" />
        </div>
      </div>
      <div className="absolute top-10 text-white text-4xl font-bold z-20" style={{ fontFamily: 'Cinzel, sans-serif' }}>
          HEALING SOL
        </div>
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-64 h-64 mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-11-07_16-05-12.jpg-Tz3p6zHd0xve5SFOAtqWb5xrKrGwca.jpeg"
            alt="Cosmic Healing Cat"
            width={256}
            height={256}
            className="w-full h-full transition-transform duration-300 ease-out rounded-full"
            style={{
              transform: calculateTilt(),
            }}
          />
          {/* Enhanced aura effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-2xl -z-10 animate-pulse-slow" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse-slower" />
        </div>

        {/* Social buttons */}
        <div className="flex gap-4 mb-12">
          <Link
            href="https://dexscreener.com/solana/5a4364sg6mjsxaoghetjgbwv4ux6nfma1iafgojfxnaf"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600/20 hover:bg-purple-600/30 transition-all duration-300"
          >
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dex-screener-logo-png_seeklogo-527276-GRpDsOTkasyo2ZU1XFnToVPCFhNUeM.png"
              alt="DexScreener"
              width={24}
              height={24}
              className="invert brightness-0"
            />
          </Link>
          <Link
            href="https://pump.fun/9HHLHtTh5ZreNi7jZKYu3ZjHWGE76JNupzvn18Qdpump"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-300"
          >
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-kxd5Jv2hktt1vNp9H2RyJEyEUhDOLP.webp"
              alt="PumpFun"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="#twitter"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600/20 hover:bg-green-600/30 transition-all duration-300"
          >
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social-media-x-logo-black-and-white-free-png-xEOKtdmLfIl2fy372PVsVvNVkWCjon.png"
              alt="X (Twitter)"
              width={18}
              height={18}
              className="brightness-0 invert"
            />
          </Link>
          <Link
            href="https://t.me/healctoportal"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600/20 hover:bg-cyan-600/30 transition-all duration-300"
          >
            <Send className="w-6 h-6 text-cyan-400" />
          </Link>
        </div>
        <div className="text-center text-white text-sm mb-4">
          9HHLHtTh5ZreNi7jZKYu3ZjHWGE76JNupzvn18Qdpump
        </div>
      </div>

      {/* Enhanced marquee */}
      <div className="absolute bottom-0 w-full h-12 bg-purple-900/20 backdrop-blur-sm overflow-hidden">
      <div className="marquee-outer flex items-center relative">
      <div className="animate-marquee whitespace-nowrap flex gap-8">
          <span className="text-3xl font-bold text-green-400/90 mx-4">$HEAL</span>
          <span className="text-3xl font-bold text-purple-400/90 mx-4">$HEAL</span>
          <span className="text-3xl font-bold text-cyan-400/90 mx-4">$HEAL</span>
          <span className="text-3xl font-bold text-green-400/90 mx-4">$HEAL</span>
          <span className="text-3xl font-bold text-purple-400/90 mx-4">$HEAL</span>
          <span className="text-3xl font-bold text-cyan-400/90 mx-4">$HEAL</span> 

          <span className="text-3xl font-bold text-green-400/90 mx-4">$HEAL</span>
        <span className="text-3xl font-bold text-purple-400/90 mx-4">$HEAL</span>
        <span className="text-3xl font-bold text-cyan-400/90 mx-4">$HEAL</span>
        <span className="text-3xl font-bold text-green-400/90 mx-4">$HEAL</span>
        <span className="text-3xl font-bold text-purple-400/90 mx-4">$HEAL</span>
        <span className="text-3xl font-bold text-cyan-400/90 mx-4">$HEAL</span>
        <span className="text-3xl font-bold text-cyan-400/90 mx-4">$HEAL</span>
        <span className="text-3xl font-bold text-green-400/90 mx-4">$HEAL</span>
        <span className="text-3xl font-bold text-purple-400/90 mx-4">$HEAL</span>
        <span className="text-3xl font-bold text-cyan-400/90 mx-4">$HEAL</span>
    </div>
  </div>
</div>
    </div>
  )
}