"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationFrameId: number

    const particles: Array<{
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      opacity: number
    }> = []

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(8, 15, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background canvas for particle effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 float-animation" />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl opacity-30 float-animation"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight tracking-tight">
                <span className="text-foreground">Meet</span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  NeuroFlowOS
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Your mind, productivity, and digital life finally in sync.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full px-8 glow-animation"
              >
                Get Early Access
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 rounded-full px-8 glow-border bg-transparent"
              >
                ▶ Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-cyan-400">40%</p>
                <p className="text-sm text-muted-foreground">Focus Boost</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-purple-400">10K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-blue-400">99%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right - Floating dashboard mockup */}
          <div className="relative h-96 lg:h-full flex items-center justify-center lg:justify-end">
            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-40 float-animation"
              style={{ animationDelay: "0.5s" }}
            />

            {/* Mock dashboard cards */}
            <div className="relative space-y-4 w-full max-w-sm">
              {/* Card 1 */}
              <div className="glass rounded-3xl p-6 float-animation">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold">🧠</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">AI Focus Mode</p>
                    <p className="text-xs text-muted-foreground">Active</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass rounded-3xl p-6 float-animation" style={{ animationDelay: "0.7s" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold">📊</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Cognitive Load</p>
                      <p className="text-xs text-muted-foreground">Optimal</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-purple-400">72%</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass rounded-3xl p-6 float-animation" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                    <span className="text-white font-bold">❤️</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Wellness Score</p>
                    <p className="text-xs text-muted-foreground">Excellent</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-pink-400">A+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
