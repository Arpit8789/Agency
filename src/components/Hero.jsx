import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const projectImages = [
  '/projects/docsbolt.png',
  '/projects/sbpl.png',
  '/projects/gpnursing.png',
  '/projects/gopaldairy.png',
  '/projects/krishisahayak.png',
]

// Word-by-word stagger animation
const wordVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function AnimatedWord({ word, index, className = '' }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        custom={index}
        variants={wordVariants}
        initial="hidden"
        animate="visible"
        className={`inline-block ${className}`}
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Giant faint "T" in background */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="font-serif text-[40vw] leading-none font-bold text-heading/[0.03]">
          T
        </span>
      </div>

      {/* Content — asymmetric split */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">

          {/* Left — 60% text */}
          <div className="lg:col-span-3">
            {/* Badge — top left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 border border-orange/25 animate-badge-float">
                <Zap size={13} className="text-orange" />
                <span className="text-orange text-xs font-semibold tracking-wider uppercase">
                  48–72 Hr Delivery
                </span>
              </div>
            </motion.div>

            {/* Headline — serif + cursive mix */}
            <h1 className="mb-8 leading-[1.05]">
              <div className="overflow-hidden">
                <div className="flex flex-wrap gap-x-4">
                  <AnimatedWord word="Your" index={0} className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl text-heading" />
                  <AnimatedWord word="Business" index={1} className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl text-heading" />
                  <AnimatedWord word="Deserves" index={2} className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl text-heading" />
                </div>
              </div>
              <div className="overflow-hidden mt-1">
                <div className="flex flex-wrap gap-x-4 items-baseline">
                  <AnimatedWord word="More Than" index={3} className="font-cursive text-5xl sm:text-6xl md:text-7xl text-gold" />
                  <AnimatedWord word="a" index={5} className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl text-heading" />
                  <AnimatedWord word="Template." index={6} className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl text-heading" />
                </div>
              </div>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-body text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
            >
              We build custom websites & apps — delivered in 48 to 72 hours.{' '}
              <span className="text-heading font-medium">You own everything.</span>
            </motion.p>

            {/* CTAs — one filled, one underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-8"
            >
              <a
                href="https://wa.me/917814122826?text=Hi%20TestLeap!%20I%27d%20like%20a%20free%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber flex items-center gap-2 cursor-pointer group"
              >
                Get Free Quote
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-link cursor-pointer"
              >
                See Our Work →
              </a>
            </motion.div>
          </div>

          {/* Right — 40% floating card mockup */}
          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Floating card with project screenshots */}
              <div className="relative w-full max-w-[420px] mx-auto">
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-3xl" />

                {/* Card frame */}
                <div className="relative bg-card border border-gold/15 rounded-lg overflow-hidden shadow-2xl shadow-black/40">
                  {/* Browser bar */}
                  <div className="browser-bar">
                    <div className="browser-dot bg-red-500/50" />
                    <div className="browser-dot bg-yellow-500/50" />
                    <div className="browser-dot bg-green-500/50" />
                    <div className="flex-1 flex justify-center">
                      <div className="bg-white/5 rounded px-3 py-0.5 text-[10px] text-body/40 font-mono">
                        testleap.com
                      </div>
                    </div>
                  </div>
                  {/* Screenshot cycling */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {projectImages.map((img, i) => (
                      <motion.img
                        key={img}
                        src={img}
                        alt="Project preview"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                        initial={false}
                        animate={{
                          opacity: currentImage === i ? 1 : 0,
                          scale: currentImage === i ? 1 : 1.05,
                        }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating mini cards around main card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 bg-card border border-gold/20 px-3 py-2 rounded-lg shadow-lg"
                >
                  <span className="text-gold text-xs font-semibold">100% Ownership</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-3 -left-3 bg-card border border-orange/20 px-3 py-2 rounded-lg shadow-lg"
                >
                  <span className="text-orange text-xs font-semibold">⚡ 48hr Delivery</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-body/30 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  )
}
