import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink, ChevronLeft, ChevronRight, X, Zap, Target, Lightbulb, ArrowRight } from 'lucide-react'

const projects = [
  {
    name: 'DocsBolt',
    description: 'AI-Powered Document Processing & File Conversion SaaS',
    industry: 'SaaS',
    techStack: ['Next.js', 'FastAPI', 'Google GenAI', 'Tailwind'],
    link: 'https://www.docsbolt.com',
    image: '/projects/docsbolt.png',
    tilt: -1.5,
    detail: {
      problem: 'Most free online converters destroy document formatting, are bloated with ads, and require using multiple scattered tools for different file operations. Users also face privacy risks uploading sensitive documents to unknown third-party sites.',
      solution: 'We engineered an all-in-one document intelligence platform with pixel-perfect conversions using specialized Python engines, integrated Google GenAI for smart document analysis, and built a blazing-fast async backend that processes heavy files in fractions of a second.',
      impact: [
        'Pixel-perfect PDF, DOCX, PPTX, XLSX conversions',
        'AI-powered document summarization & content generation',
        'Drag-and-drop interface with real-time preview',
        'Secure processing — no third-party data exposure',
      ],
    },
  },
  {
    name: 'NextGen School ERP',
    description: 'Multi-role Education Management Platform with Admin, Teacher & Student Portals',
    industry: 'Education',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: '#',
    image: null,
    tilt: 1.5,
    detail: {
      problem: 'Schools use fragmented systems — one software for accounting, another for attendance, Excel for grading, and WhatsApp for communication. This causes administrative bottlenecks, communication gaps, and data security risks.',
      solution: 'We built a unified, modern web platform with role-based access for Administrators, Teachers, and Students. Real-time dashboards, automated fee tracking, digital attendance, and seamless grading — all in one place.',
      impact: [
        'Real-time analytics dashboard for admins',
        'One-click digital attendance for teachers',
        'Transparent fee & grade tracking for parents',
        'Automated report card generation',
      ],
    },
  },
  {
    name: 'SBPL',
    description: 'Renewable Energy Franchise & Investment Platform with Premium Visuals',
    industry: 'Energy',
    techStack: ['React', 'Framer Motion', 'Tailwind'],
    link: 'https://www.sbplcbg.com/',
    image: '/projects/sbpl.png',
    tilt: -2,
    detail: {
      problem: 'SBPL was offering a highly lucrative investment opportunity (50-65% ROI) in the energy sector but struggled to communicate complex, high-ticket investment plans while building instant trust and authority through traditional brochures and basic corporate websites.',
      solution: 'We engineered a visually stunning, immersive web application that acts as a 24/7 digital salesperson — with dynamic video backgrounds, conversion-optimized architecture, and strategically placed CTAs that funnel investors into SBPL\'s sales pipeline.',
      impact: [
        'Premium visual storytelling with dark-mode aesthetics',
        'Conversion-optimized investor funnel',
        'Frictionless lead generation system',
        'Interactive investment plan sections with micro-animations',
      ],
    },
  },
  {
    name: 'GP Nursing Care',
    description: 'Healthcare Facility Platform with Seamless Appointment Booking System',
    industry: 'Healthcare',
    techStack: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://gpnurshinghome.netlify.app/',
    image: '/projects/gpnursing.png',
    tilt: 2,
    detail: {
      problem: 'Healthcare websites suffer from outdated designs, clunky navigation, and frustrating booking processes. Patients in distress struggle to find emergency contacts, verify doctor credentials, or book appointments seamlessly — leading to poor patient experience and lost business.',
      solution: 'We designed a high-performance React application prioritizing accessibility, trust-building, and frictionless conversion. A global floating CTA, custom booking modal, and prominent emergency access transforms a standard website into a powerful patient-acquisition engine.',
      impact: [
        'Instant appointment booking from any page',
        'Trust badges & real patient testimonials',
        'Virtual tour for facility showcase',
        'Emergency-ready accessibility — always one tap away',
      ],
    },
  },
  {
    name: 'Gopala Dairy',
    description: 'Farm-fresh Dairy E-Commerce with Mobile-first Shopping Experience',
    industry: 'E-Commerce',
    techStack: ['React', 'Vite', 'Tailwind'],
    link: 'https://gopaldairy.vercel.app/',
    image: '/projects/gopaldairy.png',
    tilt: -1.5,
    detail: {
      problem: 'Today\'s consumers expect digital convenience from local dairy farms like they get from massive delivery apps. Gopala Dairy needed a way for customers to quickly order daily essentials on mobile without navigating clunky, unresponsive websites.',
      solution: 'We designed a lightning-fast, mobile-first web application with sticky bottom navigation, dynamic slide-out cart, and micro-animations that create a native app-like shopping experience — optimized for the morning rush of daily orders.',
      impact: [
        'Mobile-first design — order with your thumb',
        'Same-day delivery integration',
        'Instant cart with tactile micro-animations',
        'Fresh, vibrant branding aligned with farm identity',
      ],
    },
  },
  {
    name: 'Krishi Sahayak',
    description: 'AI-Powered Multilingual Farming Advisory & B2B Marketplace Platform',
    industry: 'AgriTech',
    techStack: ['React', 'Node.js', 'Google GenAI', 'MongoDB'],
    link: 'https://sih-2025-phi-one.vercel.app/',
    image: '/projects/krishisahayak.png',
    tilt: 2,
    detail: {
      problem: 'Farmers consistently struggle with unpredictable crop diseases, lack of real-time market data, exploitative middlemen, and language barriers that prevent them from accessing vital resources and government schemes worth millions.',
      solution: 'We architected a full-stack AI ecosystem with instant crop disease detection from photos, a multilingual voice-enabled AI chatbot, a real-time B2B marketplace with live APMC prices, and predictive crop/soil intelligence — all accessible in regional languages.',
      impact: [
        'AI crop disease detection from a single photo',
        'Voice-enabled chatbot in native languages',
        'Direct-to-buyer marketplace — no middlemen',
        'Live weather alerts & government scheme finder',
      ],
    },
  },
]

const industryColors = {
  SaaS: 'text-gold border-gold/25 bg-gold/8',
  Education: 'text-blue-400 border-blue-400/25 bg-blue-400/8',
  Energy: 'text-orange border-orange/25 bg-orange/8',
  Healthcare: 'text-emerald-400 border-emerald-400/25 bg-emerald-400/8',
  'E-Commerce': 'text-green-400 border-green-400/25 bg-green-400/8',
  AgriTech: 'text-yellow-400 border-yellow-400/25 bg-yellow-400/8',
}

/* ===== PROJECT DETAIL MODAL ===== */
function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card border border-gold/15 shadow-2xl shadow-black/50 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-body hover:text-heading border border-white/10 hover:border-gold/30 transition-all cursor-pointer z-20"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Screenshot header */}
        {project.image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-gold/10">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* Title + Industry */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-heading">{project.name}</h3>
            <span className={`px-2.5 py-1 text-[10px] font-semibold border shrink-0 ${industryColors[project.industry]}`}>
              {project.industry}
            </span>
          </div>
          <p className="text-body mb-6">{project.description}</p>

          {/* Problem */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Target size={16} className="text-red-400" />
              <h4 className="font-serif font-semibold text-lg text-heading">The Problem</h4>
            </div>
            <p className="text-body text-sm leading-relaxed pl-6 border-l border-red-400/20">
              {project.detail.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={16} className="text-gold" />
              <h4 className="font-serif font-semibold text-lg text-heading">Our Solution</h4>
            </div>
            <p className="text-body text-sm leading-relaxed pl-6 border-l border-gold/20">
              {project.detail.solution}
            </p>
          </div>

          {/* Impact */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Zap size={16} className="text-orange" />
              <h4 className="font-serif font-semibold text-lg text-heading">Key Impact</h4>
            </div>
            <ul className="space-y-2.5 pl-6">
              {project.detail.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-gold text-xs mt-1.5">▸</span>
                  <span className="text-body-light text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-gold/5 border border-gold/15 text-gold text-[11px] font-medium">
                  {tech}
                </span>
              ))}
            </div>
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber flex items-center gap-2 text-xs cursor-pointer"
              >
                View Live
                <ArrowRight size={13} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ===== PROJECT CARD ===== */
function ProjectCard({ project, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="shrink-0 w-[320px] sm:w-[360px] group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div
        className="project-card-tilt card-gold h-full flex flex-col overflow-hidden"
        style={{ transform: `rotate(${project.tilt}deg)` }}
      >
        {/* Screenshot — landscape ratio for full page visibility */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-card flex items-center justify-center">
              <span className="font-serif text-6xl text-heading/10">{project.name[0]}</span>
            </div>
          )}

          {/* Subtle overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* "Click to explore" hint on hover */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-card/90 backdrop-blur-sm border border-gold/20 text-gold text-[10px] font-semibold uppercase tracking-wider">
              <Zap size={10} />
              Click to explore
            </div>
          </div>

          {/* Industry tag */}
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-1 text-[10px] font-semibold border ${industryColors[project.industry]}`}>
              {project.industry}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-serif font-bold text-lg text-heading mb-2 group-hover:text-gold transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-body text-xs leading-relaxed mb-4 flex-1">{project.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-gold text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
              View Details
              <ArrowRight size={11} />
            </span>
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-heading text-[11px] flex items-center gap-1 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live
                <ExternalLink size={10} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ===== PROJECTS SECTION ===== */
export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const scrollRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 390
      scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
    }
  }

  return (
    <>
      <section id="projects" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14"
          >
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">Portfolio</p>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-heading">
                What We've <span className="font-cursive text-gold">Built</span>
              </h2>
              <p className="text-body text-sm mt-3 max-w-md">
                Click any project to see the full case study — the problem, our solution, and the impact.
              </p>
            </div>
            {/* Scroll controls */}
            <div className="hidden sm:flex items-center gap-3 mt-6 sm:mt-0">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 px-6 sm:px-8 lg:px-12 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <style>{`.flex::-webkit-scrollbar { display: none; }`}</style>
          {projects.map((project, i) => (
            <div key={project.name} className="snap-start">
              <ProjectCard project={project} index={i} onSelect={setSelectedProject} />
            </div>
          ))}
          <div className="shrink-0 w-8" />
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
