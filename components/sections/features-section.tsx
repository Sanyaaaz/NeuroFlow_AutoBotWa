"use client"

import { Cpu, Radar, TrendingUp } from "lucide-react"

const features = [
  {
    id: 1,
    title: "AI Habit Engine",
    description: "Learns your routines and boosts long term consistency.",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "NeuroFocus Mode",
    description: "Blocks digital noise and keeps you in flow.",
    icon: Radar,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Cognitive Dashboard",
    description: "A real time graph of your mood, energy, focus and productivity.",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
            Designed to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Think With You
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced AI features that adapt to your unique cognitive patterns
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="glass rounded-3xl p-8 hover:glow-animation transition-all duration-500 group cursor-pointer hover:border-cyan-400/50"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl transition-opacity duration-500" />

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title and description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
