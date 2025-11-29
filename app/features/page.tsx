"use client"

import { Cpu, Radar, TrendingUp, Zap, Shield, Brain } from "lucide-react"
import Footer from "@/components/sections/footer"

const detailedFeatures = [
  {
    id: 1,
    title: "AI Habit Engine",
    description:
      "Our proprietary AI learns your daily patterns and creates personalized habit loops that build consistency over time.",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
    benefits: ["Pattern recognition", "Personalized coaching", "Progress tracking"],
  },
  {
    id: 2,
    title: "NeuroFocus Mode",
    description:
      "Intelligently block digital distractions and maintain deep focus by analyzing your cognitive state in real-time.",
    icon: Radar,
    color: "from-purple-500 to-pink-500",
    benefits: ["Distraction blocking", "Flow state detection", "Smart notifications"],
  },
  {
    id: 3,
    title: "Cognitive Dashboard",
    description:
      "Real-time visualization of your mood, energy levels, focus quality, and productivity metrics in one elegant interface.",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    benefits: ["Real-time metrics", "Trend analysis", "Performance insights"],
  },
  {
    id: 4,
    title: "Energy Optimization",
    description:
      "Automatically suggest optimal times for deep work based on your personal energy patterns and historical data.",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    benefits: ["Time optimization", "Energy prediction", "Schedule suggestions"],
  },
  {
    id: 5,
    title: "Privacy & Security",
    description:
      "Your data stays yours. All processing happens locally with military-grade encryption for sensitive information.",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    benefits: ["Local processing", "End-to-end encryption", "Privacy controls"],
  },
  {
    id: 6,
    title: "Neural Insights",
    description:
      "Deep learning algorithms provide actionable insights about your cognitive patterns and wellness trends.",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    benefits: ["Pattern insights", "Wellness alerts", "Personalized recommendations"],
  },
]

export default function Features() {
  return (
    <main className="min-h-screen bg-background overflow-hidden pt-16">
      {/* Header section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
            Powerful{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every feature is designed with cognitive science and user wellness in mind
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.id}
                  className="glass rounded-3xl p-8 hover:glow-animation transition-all duration-500 group"
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title and description */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
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

      <Footer />
    </main>
  )
}
