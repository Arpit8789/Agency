import { ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#founders' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top golden line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="inline-block mb-3 cursor-pointer"
            >
              <span className="font-serif font-bold text-2xl text-heading">
                Test<span className="text-gold">Leap</span>
              </span>
            </a>
            <p className="text-body text-sm max-w-xs italic">
              "We don't rent you a shop. We build you one."
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-body hover:text-heading text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917814122826"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-body hover:text-gold transition-colors text-sm cursor-pointer"
          >
            <span>+91-7814122826</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-body/30 text-[11px] uppercase tracking-wider">
            © {new Date().getFullYear()} TestLeap. All rights reserved.
          </p>
          <p className="text-body/30 text-[11px]">
            Made with <span className="text-gold/60">purpose</span> by TestLeap
          </p>
        </div>
      </div>
    </footer>
  )
}
