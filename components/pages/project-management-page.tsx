"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import {
  Lightbulb,
  FileSearch,
  Cog,
  ClipboardCheck,
  CheckCircle2
} from "lucide-react"

const lifecycleSteps = [
  {
    step: 1,
    title: "Initiation",
    description: "Project charter and stakeholder identification"
  },
  {
    step: 2,
    title: "Planning",
    description: "Scope definition and resource allocation"
  },
  {
    step: 3,
    title: "Execution",
    description: "Implementation and team coordination"
  },
  {
    step: 4,
    title: "Monitoring & Control",
    description: "Progress tracking and quality assurance"
  },
  {
    step: 5,
    title: "Closure",
    description: "Documentation and project handover"
  },
]

const expertisePhases = [
  {
    id: "pre-feasibility",
    icon: Lightbulb,
    title: "PRE-FEASIBILITY / FEASIBILITY STUDY",
    items: [
      "Conducted high-level technical assessments to evaluate project concepts in oil & gas, utilities, and industrial automation sectors.",
      "Developed preliminary process flow diagrams, instrumentation concepts, and control system outlines to support early-stage decision-making.",
      "Provided initial CAPEX and OPEX estimates based on benchmark data and scalable engineering assumptions.",
      "Assessed regulatory, environmental, and site-specific constraints to identify potential risks and mitigation strategies.",
      "Delivered concise pre-feasibility reports to guide client investment decisions and prioritize viable project options.",
      "Executed detailed engineering evaluations including P&IDs, loop diagrams, and instrument datasheets to validate project viability.",
      "Performed cost-benefit analysis and ROI modeling using refined CAPEX/OPEX data and lifecycle cost projections.",
      "Collaborated with multidisciplinary teams to ensure alignment of technical, financial, and regulatory aspects.",
      "Produced comprehensive feasibility reports supporting client approvals, funding applications, and project execution planning."
    ]
  },
  {
    id: "conceptual",
    icon: FileSearch,
    title: "CONCEPTUAL ENGINEERING DESIGN",
    items: [
      "Defines the Project Vision: Establishes the overall technical concept, system boundaries, and high-level functionality before detailed design begins.",
      "Identifies Core Requirements: Captures client needs, operational goals, and regulatory constraints to guide engineering direction.",
      "Generates Design Alternatives: Explores multiple technical solutions (e.g., process configurations, control strategies) for feasibility and optimization.",
      "Evaluates Technical Viability: Assesses each concept for performance, safety, scalability, and compliance using preliminary simulations and analysis.",
      "Supports Cost Estimation: Provides rough CAPEX/OPEX estimates to inform investment decisions and risk assessments.",
      "Facilitates Stakeholder Alignment: Serves as a communication tool to align engineering teams, clients, and decision-makers on project direction.",
      "Feeds into FEED Stage: Delivers essential inputs like block flow diagrams, conceptual layouts, and functional specifications for Front-End Engineering Design (FEED)."
    ]
  },
  {
    id: "feed",
    icon: Cog,
    title: "FRONT END ENGINEERING DESIGN  (FEED)",
    items: [
      "Defines Project Scope: Establishes a clear technical and operational framework to guide detailed engineering and execution.",
      "Develops Core Design Documents: Includes Process Flow Diagrams (PFDs), P&IDs, equipment layouts, and control system architecture.",
      "Refines Cost Estimates: Provides robust CAPEX and OPEX projections based on preliminary engineering and vendor inputs.",
      "Specifies Equipment & Instruments: Prepares datasheets and specifications for major equipment, instruments, and control systems.",
      "Supports Procurement Strategy: Generates bid packages and technical specifications for vendor selection and contracting.",
      "Aligns Stakeholders: Facilitates coordination among engineering teams, clients, and regulatory bodies for unified project vision.",
      "Establishes Execution Roadmap: Develops Level 2 project schedules, resource plans, and milestone tracking for EPC readiness.",
      "Ensures Regulatory Compliance: Integrates environmental, safety, and permitting requirements into the design basis.",
      "Feeds into Detailed Engineering: Serves as the foundation for procurement, construction, commissioning, and operational planning."
    ]
  },
  {
    id: "detail",
    icon: ClipboardCheck,
    title: "DETAIL ENGINEERING",
    items: [
      "Finalizes Technical Designs: Converts FEED and basic engineering concepts into precise, construction-ready drawings and specifications.",
      "Develops Detailed Documentation: Includes P&IDs, loop diagrams, wiring schematics, instrument datasheets, and control system layouts.",
      "Performs Engineering Calculations: Conducts stress analysis, hydraulic calculations, cable sizing, and load assessments to ensure design integrity.",
      "Integrates Multidisciplinary Inputs: Coordinates mechanical, electrical, civil, and instrumentation disciplines for seamless system integration.",
      "Prepares 3D Models & Layouts: Uses CAD tools to visualize plant layouts, detect clashes, and optimize spatial planning.",
      "Ensures Standards Compliance: Aligns all designs with international codes (e.g., ASME, IEC, ISA, API) and project-specific specifications.",
      "Supports Procurement & Construction: Generates material take-offs (MTOs), bill of materials (BOMs), and installation guidelines for execution teams.",
      "Conducts Design Reviews & Approvals: Facilitates internal and client reviews, HAZOP sessions, and final design validation.",
      "Manages Engineering Deliverables: Implements document control systems to track revisions, approvals, and issue logs.",
      "Enables Smooth Project Execution: Provides the technical backbone for procurement, fabrication, installation, and commissioning phases"
    ]
  },
]

export function ProjectManagementPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-16 lg:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Project Management & Execution
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Delivering complex projects on time, within budget, and to the highest quality standards
          </p>
        </div>
      </section>

      {/* Project Execution Lifecycle */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Project Execution Lifecycle
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our project execution services cover the entire project lifecycle. Loopice Engineering ensures seamless project delivery through meticulous planning, effective implementation, continuous monitoring, and stringent quality control, guaranteeing projects are completed on time, within budget, and to the highest standards.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-[#375B6D]/20" />
                <div className="absolute top-8 left-0 w-full h-1">
                  <div className="h-full bg-[#375B6D] w-full" />
                </div>

                {lifecycleSteps.map((item, index) => (
                  <div key={item.step} className="relative flex flex-col items-center w-1/5">
                    <div className="w-16 h-16 rounded-full bg-[#375B6D] flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
                      {item.step}
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-semibold text-foreground text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground max-w-[140px]">
                        {item.description}
                      </p>
                    </div>
                    {index < lifecycleSteps.length - 1 && (
                      <div className="absolute top-8 left-1/2 w-full h-0.5 bg-[#375B6D]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-6">
              {lifecycleSteps.map((item, index) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#375B6D] flex items-center justify-center text-white font-bold text-lg z-10">
                      {item.step}
                    </div>
                    {index < lifecycleSteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-[#375B6D]/30 mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Phases */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Expertise Phases
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering services across all project phases
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {expertisePhases.map((phase) => (
              <AccordionItem
                key={phase.id}
                value={phase.id}
                className="bg-card border border-border rounded-lg overflow-hidden px-0"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#375B6D] flex items-center justify-center flex-shrink-0">
                      <phase.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-foreground text-left">
                      {phase.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <ul className="space-y-3 ml-14">
                    {phase.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#375B6D] flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
