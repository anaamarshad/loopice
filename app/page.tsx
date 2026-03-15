"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HomePage } from "@/components/pages/home-page"
import { ProjectManagementPage } from "@/components/pages/project-management-page"
import { EngineeringPage } from "@/components/pages/engineering-page"
import { ProcurementPage } from "@/components/pages/procurement-page"
import { AboutPage } from "@/components/pages/about-page"
import { CommissioningPage } from "@/components/pages/commissioning-page"
import { CareerPage } from "@/components/pages/career-page"
import { ContactPage } from "@/components/pages/contact-page"
import { Footer } from "@/components/footer"

export type PageType = 
  | "home" 
  | "about" 
  | "project-management" 
  | "engineering" 
  | "procurement" 
  | "commissioning" 
  | "career" 
  | "contact"

export default function Page() {
  const [activePage, setActivePage] = useState<PageType>("home")

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage onNavigate={setActivePage} />
      case "about":
        return <AboutPage />
      case "project-management":
        return <ProjectManagementPage />
      case "engineering":
        return <EngineeringPage />
      case "procurement":
        return <ProcurementPage />
      case "commissioning":
        return <CommissioningPage />
      case "career":
        return <CareerPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage onNavigate={setActivePage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setActivePage} />
    </div>
  )
}
