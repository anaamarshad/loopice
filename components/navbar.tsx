"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PageType } from "@/app/page"

interface NavbarProps {
  activePage: PageType
  onNavigate: (page: PageType) => void
}

const navItems: { label: string; page: PageType }[] = [
  { label: "HOME", page: "home" },
  { label: "ABOUT US", page: "about" },
  { label: "PROJECT MANAGEMENT", page: "project-management" },
  { label: "ENGINEERING", page: "engineering" },
  { label: "PROCUREMENT", page: "procurement" },
  { label: "COMMISSIONING", page: "commissioning" },
  { label: "CAREER", page: "career" },
  { label: "CONTACT US", page: "contact" },
]

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (page: PageType) => {
    onNavigate(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#375B6D] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => handleNavigate("home")}>
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loopice-Logo0-2-dlzF7rQaR3Wi1huYcaShy9ysDVAtnB.jpeg" 
              alt="Loopice Engineering Logo" 
              className="h-10 w-10 lg:h-12 lg:w-12 rounded object-cover"
            />
            <span className="text-white font-bold text-lg lg:text-xl tracking-wide">
              LOOPICE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-3 py-2 text-xs font-medium tracking-wide transition-colors rounded ${
                  activePage === item.page
                    ? "text-white bg-white/20"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#375B6D] border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium tracking-wide rounded transition-colors ${
                  activePage === item.page
                    ? "text-white bg-white/20"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
