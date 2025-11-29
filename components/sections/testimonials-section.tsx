"use client"

import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "CEO, TechVentures",
    avatar: "/professional-man-tech-ceo.jpg",
    quote: "NeuroFlowOS helped me improve my focus by 40%. It's like having a personal cognitive coach.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Product Designer",
    avatar: "/professional-woman-designer.jpg",
    quote: "My digital life finally feels organized. The AI Habit Engine understands my workflow perfectly.",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Researcher",
    avatar: "/professional-man-researcher.jpg",
    quote: "This is the future of productivity tools. It's not just software, it's a cognitive partner.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              High Performers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals already transforming their productivity
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 group h-full flex flex-col justify-between"
            >
              {/* Quote */}
              <p className="text-lg text-foreground leading-relaxed mb-8 italic">"{testimonial.quote}"</p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-cyan-500/30">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
