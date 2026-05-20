import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#founders' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'nav-frosted py-4' : 'nav-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo — serif, no box */}
          <a
            href="#"
            className="cursor-pointer group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <span className="font-serif font-bold text-2xl text-heading tracking-tight group-hover:text-gold transition-colors duration-300">
              Test<span className="text-gold">Leap</span>
            </span>
          </a>

          {/* Desktop Links — dot indicator on hover */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="nav-dot text-body hover:text-heading transition-colors duration-300 text-[13px] font-medium tracking-wide uppercase cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp — amber text, draw-border on hover */}
          <a
            href="https://wa.me/917814122826"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-gold text-[13px] font-semibold tracking-wide cursor-pointer group relative px-4 py-2"
          >
            <span className="relative z-10">WhatsApp</span>
            <ArrowUpRight size={14} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            {/* Border that draws itself on hover */}
            <span className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-500 ease-out" />
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-heading p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-50 bg-primary/95 backdrop-blur-xl border-l border-gold/10 p-8 flex flex-col"
            >
              <button
                className="self-end mb-10 text-body hover:text-heading transition-colors cursor-pointer"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>

              <div className="flex flex-col gap-7">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="font-serif text-heading text-2xl font-semibold hover:text-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href="https://wa.me/917814122826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 border border-gold/30 text-gold text-sm font-semibold w-full cursor-pointer hover:bg-gold/5 transition-colors"
                >
                  WhatsApp Us
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
