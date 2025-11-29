"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    id: 1,
    name: "Free",
    price: "0",
    description: "Get started with essential features",
    features: ["Basic AI tasks", "Focus timer", "Limited habit insights", "Core dashboard"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "29",
    description: "Unlock your full potential",
    features: [
      "Full Neuro AI suite",
      "Deep analytics",
      "Personalized workflows",
      "Priority support",
      "Advanced habit tracking",
      "Custom integrations",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
]

export default function PricingSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Flow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Simple, transparent pricing for every level</p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl transition-all duration-500 ${
                plan.highlighted
                  ? "glass-sm border-2 border-transparent bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 ring-2 ring-cyan-400/50 relative overflow-hidden lg:scale-105 md:col-span-2 lg:col-span-1"
                  : "glass"
              }`}
            >
              {/* Glow effect for pro plan */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div className="relative p-8 space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full rounded-full font-semibold py-6 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white glow-animation"
                      : "bg-white/10 border border-white/20 text-foreground hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features list */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlighted ? "bg-cyan-500/30" : "bg-white/10"
                        }`}
                      >
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
