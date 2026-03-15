"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  TrendingUp 
} from "lucide-react"

const benefits = [
  {
    icon: Briefcase,
    title: "Challenging Projects",
    description: "Work on complex, industry-leading projects that push the boundaries of engineering."
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Continuous learning opportunities and career advancement programs."
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and comprehensive benefits package."
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career paths and opportunities to grow within the organization."
  },
]

export function CareerPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-16 lg:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/8278877/pexels-photo-8278877.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Build your career with Loopice Engineering
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Join Loopice Engineering?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to creating an environment where talented engineers can thrive and make a real impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit) => (
              <Card 
                key={benefit.title}
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-[#375B6D] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented engineers to join our growing team. Send us your resume to explore opportunities.
          </p>
          <Button 
            size="lg" 
            className="bg-[#375B6D] text-white hover:bg-[#2d4a58] font-semibold px-8"
          >
            Send Your Resume
          </Button>
        </div>
      </section>
    </div>
  )
}
