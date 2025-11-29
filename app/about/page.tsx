"use client"

import { Users, Lightbulb, Heart, Award } from "lucide-react"
import Footer from "@/components/sections/footer"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Founder",
    bio: "Neuroscientist with 15 years of cognitive research",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Chief Technology Officer",
    bio: "AI expert previously at leading tech companies",
    avatar: "MJ",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Design",
    bio: "Design leader focused on user wellness",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "VP of Research",
    bio: "Behavioral scientist and productivity expert",
    avatar: "DK",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push the boundaries of what's possible in cognitive enhancement",
  },
  {
    icon: Heart,
    title: "Well-being",
    description: "User health and digital wellness are at the core of everything we build",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in collective growth and shared knowledge",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in quality and performance",
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-background overflow-hidden pt-16">
      {/* Hero section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform how humans work with technology. By combining neuroscience, artificial
              intelligence, and thoughtful design, we're creating tools that enhance rather than distract, that empower
              rather than overwhelm.
            </p>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="glass rounded-3xl p-8 hover:glow-animation transition-all duration-500 group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exceptional people working together to build the future of productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass rounded-3xl p-8 hover:glow-animation transition-all duration-500 group">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{member.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-cyan-400 font-semibold">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
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
