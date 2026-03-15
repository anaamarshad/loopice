"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Droplets, 
  Zap, 
  Factory, 
  Building2,
  Target,
  BarChart3,
  Ruler,
  Shield,
  FileCheck,
  DollarSign,
  Users
} from "lucide-react"
import type { PageType } from "@/app/page"

interface HomePageProps {
  onNavigate: (page: PageType) => void
}

const sectors = [
  { 
    icon: Droplets, 
    title: "OIL & GAS",
    description: "Comprehensive upstream and downstream solutions"
  },
  { 
    icon: Zap, 
    title: "ENERGY",
    description: "Power generation and renewable energy systems"
  },
  { 
    icon: Factory, 
    title: "PETROCHEMICAL",
    description: "Chemical processing and refinery operations"
  },
  { 
    icon: Building2, 
    title: "INDUSTRIAL",
    description: "Manufacturing and industrial facility solutions"
  },
]

const whyChooseUs = [
  {
    icon: Target,
    title: "Planning & Coordination",
    description: "Define project scope, set objectives, allocate resources, and develop timelines to ensure all tasks align with strategic goals."
  },
  {
    icon: BarChart3,
    title: "Execution & Monitoring",
    description: "Lead teams, manage risks, track progress, and adjust plans as needed to deliver results on time and within budget."
  },
  {
    icon: Ruler,
    title: "Precision in Design",
    description: "We deliver high-quality engineering documents tailored to project needs."
  },
  {
    icon: Shield,
    title: "Compliance & Safety",
    description: "Designs adhere to international standards (ASME, API, IEC, ISA, ATEX) and hazardous area classifications."
  },
  {
    icon: FileCheck,
    title: "Vendor-Ready Deliverables",
    description: "Our engineering packages are optimized for procurement and vendor engagement, reducing lead times."
  },
  {
    icon: DollarSign,
    title: "Value Engineering",
    description: "We identify cost-saving opportunities without compromising performance or safety."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our engineers bring deep domain expertise in oil & gas, petrochemical, and industrial automation sectors."
  },
]

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/10407692/pexels-photo-10407692.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert Engineering Solutions
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              Providing top-tier consulting services for the Oil & Gas industry. Our team specializes in delivering innovative engineering solutions, ensuring sustainability and compliance in every project we undertake.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#375B6D] hover:bg-white/90 font-semibold px-8 py-6 text-base"
              onClick={() => onNavigate("engineering")}
            >
              Discover Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Sectors We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence across multiple industries with specialized expertise
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector) => (
              <Card 
                key={sector.title} 
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#375B6D] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <sector.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 tracking-wide">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-[#375B6D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the engineering consulting industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our team of experts help you achieve your engineering goals with precision and excellence.
          </p>
          <Button 
            size="lg" 
            className="bg-[#375B6D] text-white hover:bg-[#2d4a58] font-semibold px-8"
            onClick={() => onNavigate("contact")}
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  )
}
