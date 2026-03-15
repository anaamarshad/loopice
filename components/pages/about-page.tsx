"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Globe } from "lucide-react"

export function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-16 lg:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Loopice Engineering
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Building excellence through innovation and expertise
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-[#375B6D] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative engineering solutions that drive sustainable growth and operational excellence for our clients in the oil & gas, petrochemical, and industrial sectors.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-[#375B6D] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a leading engineering consulting firm, known for technical excellence, integrity, and our commitment to delivering exceptional value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: Award, title: "Excellence" },
              { icon: Globe, title: "Integrity" },
              { icon: Target, title: "Innovation" },
              { icon: Eye, title: "Safety" },
            ].map((value) => (
              <div key={value.title} className="bg-card rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#375B6D] flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-foreground">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
