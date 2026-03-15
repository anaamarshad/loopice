"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Package,
  Handshake,
  ClipboardCheck,
  Truck
} from "lucide-react"

const features = [
  {
    icon: Package,
    title: "Material Sourcing",
    description: "Procuring high-quality materials from reliable suppliers meeting industry standards."
  },
  {
    icon: Handshake,
    title: "Vendor Management",
    description: "Managing relationships to secure the best prices and timely delivery."
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description: "Rigorous inspection and testing of procured materials."
  },
  {
    icon: Truck,
    title: "Logistics and Supply Chain",
    description: "Efficient planning to ensure timely delivery and minimize delays."
  },
]

export function ProcurementPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-16 lg:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/10396413/pexels-photo-10396413.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Procurement Services
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Strategic procurement solutions ensuring quality, value, and reliability
          </p>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our procurement services include material sourcing, vendor management, quality assurance, and logistics. Loopice Engineering ensures high-quality materials and timely delivery, managing supplier relationships to secure optimal prices. Rigorous inspection and testing guarantee compliance with quality and safety standards, ensuring the successful completion of all projects.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Procurement Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature) => (
              <Card 
                key={feature.title}
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-[#375B6D] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-24 bg-[#375B6D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Our Procurement Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Requirement Analysis", "Vendor Selection", "Order Placement", "Delivery & Inspection"].map((step, index) => (
              <div key={step} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-white text-[#375B6D] font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-white font-medium text-sm">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
