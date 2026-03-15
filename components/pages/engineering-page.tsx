"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  PenTool,
  Gauge,
  Box,
  Flame,
  Wrench,
  RotateCcw
} from "lucide-react"

const services = [
  {
    icon: PenTool,
    title: "Detailed Design and Engineering",
    description: "Comprehensive engineering design services covering all disciplines, from concept to construction-ready documentation."
  },
  {
    icon: Gauge,
    title: "Stress Analysis",
    description: "Advanced structural and piping stress analysis ensuring system integrity and compliance with industry codes."
  },
  {
    icon: Box,
    title: "2D Drafting and 3D Modeling",
    description: "State-of-the-art CAD services utilizing the latest software for precise technical drawings and immersive 3D models."
  },
  {
    icon: Flame,
    title: "Process & Safety Engineering",
    description: "Process flow optimization, HAZOP studies, and safety system design meeting the highest international standards."
  },
  {
    icon: Wrench,
    title: "Piping, Civil & Structural, Mechanical, Electrical & Instrumentation",
    description: "Full spectrum multidisciplinary engineering services integrating all technical aspects of your project."
  },
  {
    icon: RotateCcw,
    title: "Reverse Engineering",
    description: "Recreating legacy systems and components through detailed analysis and modern documentation techniques."
  },
]

export function EngineeringPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-16 lg:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/586103/pexels-photo-586103.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Engineering Services
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Delivering innovative engineering solutions across all disciplines with precision and expertise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Card 
                key={service.title}
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-[#375B6D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            International Standards & Compliance
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            All our engineering deliverables comply with internationally recognized standards and codes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["ASME", "API", "IEC", "ISA", "ATEX", "ISO", "NFPA", "NACE"].map((standard) => (
              <div 
                key={standard}
                className="px-6 py-3 bg-[#375B6D] text-white font-semibold rounded-lg text-sm"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
