"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Engineering Boulevard", "Industrial District", "City, Country 12345"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@loopice-engineering.com", "projects@loopice-engineering.com"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"]
  },
]

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you for your message. We will get back to you shortly.")
    setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" })
  }

  return (
    <div>
      {/* Header */}
      <section className="relative py-16 lg:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/7688335/pexels-photo-7688335.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Let's discuss how we can help with your next project
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="name">Full Name *</FieldLabel>
                        <Input 
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          placeholder="John Doe"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email Address *</FieldLabel>
                        <Input 
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          placeholder="john@company.com"
                        />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="company">Company</FieldLabel>
                        <Input 
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Your Company"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                        <Input 
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+1 (555) 000-0000"
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="subject">Subject *</FieldLabel>
                      <Input 
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required
                        placeholder="How can we help?"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message">Message *</FieldLabel>
                      <Textarea 
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        placeholder="Tell us about your project..."
                        rows={5}
                      />
                    </Field>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#375B6D] text-white hover:bg-[#2d4a58] font-semibold mt-4"
                    >
                      Send Message
                    </Button>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              {contactInfo.map((info) => (
                <Card key={info.title} className="border-0 shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#375B6D] flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
