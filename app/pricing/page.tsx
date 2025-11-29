"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Basic habit tracking",
      "Focus timer (up to 4 hours/day)",
      "Limited insights",
      "Mobile app access",
      "Community support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "For serious productivity enthusiasts",
    features: [
      "Full AI Habit Engine",
      "Unlimited focus time",
      "Advanced analytics",
      "Cognitive dashboard",
      "Priority support",
      "Integration with tools",
      "Weekly insights report",
      "Custom workflows",
    ],
    highlighted: true,
    cta: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "Everything in Professional",
      "Team management",
      "Centralized analytics",
      "Advanced security",
      "Dedicated support",
      "SSO integration",
      "Custom integrations",
      "SLA guarantee",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
]

export default function Pricing() {
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
            Choose Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Flow</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent pricing. Start free, upgrade anytime.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-3xl transition-all duration-500 ${
                  tier.highlighted
                    ? "glass glow-border relative ring-1 ring-cyan-400/50 md:scale-105"
                    : "glass hover:glow-animation"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-foreground">{tier.price}</span>
                      {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mb-8 font-semibold rounded-full ${
                      tier.highlighted
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white glow-animation"
                        : "bg-white/10 text-foreground hover:bg-white/20 border border-white/10"
                    }`}
                  >
                    {tier.cta}
                  </Button>

                  {/* Features */}
                  <div className="flex-1 space-y-4">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
