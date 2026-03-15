"use client"

import type { PageType } from "@/app/page"
import { Linkedin, Mail, Phone } from "lucide-react"

interface FooterProps {
  onNavigate: (page: PageType) => void
}

const quickLinks: { label: string; page: PageType }[] = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Project Management", page: "project-management" },
  { label: "Engineering", page: "engineering" },
]

const services: { label: string; page: PageType }[] = [
  { label: "Procurement", page: "procurement" },
  { label: "Commissioning", page: "commissioning" },
  { label: "Career", page: "career" },
  { label: "Contact Us", page: "contact" },
]

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: PageType) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#375B6D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loopice-Logo0-2-dlzF7rQaR3Wi1huYcaShy9ysDVAtnB.jpeg" 
                alt="Loopice Engineering Logo" 
                className="h-10 w-10 rounded object-cover"
              />
              <span className="font-bold text-lg tracking-wide">
                LOOPICE
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Providing expert engineering consulting services for the Oil & Gas, Petrochemical, and Industrial sectors.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:info@loopice-engineering.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="tel:+15551234567" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>123 Engineering Boulevard</li>
              <li>Industrial District</li>
              <li>City, Country 12345</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@loopice-engineering.com" className="hover:text-white transition-colors">
                  info@loopice-engineering.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Loopice Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
