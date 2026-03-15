"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Settings, 
  CheckSquare, 
  PlayCircle, 
  FileText 
} from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Pre-Commissioning",
    description: "System verification, equipment checks, and preparation activities to ensure readiness for operation."
  },
  {
    icon: CheckSquare,
    title: "Commissioning Support",
    description: "On-site technical support during system commissioning, loop checking, and functional testing."
  },
  {
    icon: PlayCircle,
    title: "Start-Up Assistance",
    description: "Expert guidance during initial operation phases to ensure smooth system performance."
  },
  {
    icon: FileText,
    title: "Documentation & Handover",
    description: "Complete documentation packages and comprehensive handover procedures."
  },
]

export function CommissioningPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-16 lg:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/2965258/pexels-photo-2965258.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Commissioning Services
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Ensuring successful project handover and operational readiness
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Commissioning Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive commissioning services to ensure your project operates safely and efficiently from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <Card 
                key={service.title}
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-[#375B6D] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
