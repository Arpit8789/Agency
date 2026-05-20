import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ShieldCheck, ShieldX } from 'lucide-react'

const comparisons = [
  { label: 'You own the code', free: false, testleap: true },
  { label: 'Custom features anytime', free: false, testleap: true },
  { label: 'Your data, your server', free: false, testleap: true },
  { label: 'Looks unique, not like 1000 others', free: false, testleap: true },
  { label: 'No shutdown risk', free: false, testleap: true },
]

export default function ObjectionKiller() {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <section id="objection" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative section-glow"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-heading mb-4 leading-tight">
            Free platforms rent you a shop.
            <br />
            <span className="text-gold-gradient">We build you </span>
            <span className="font-cursive text-gold">your own.</span>
          </h2>
          <p className="text-body text-base max-w-xl mx-auto">
            See the real difference between "free" tools and a purpose-built solution.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="card-gold rounded-none overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-5 sm:p-6 border-b border-white/5">
            <div className="text-body text-sm font-medium uppercase tracking-wider">Feature</div>
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/8 border border-red-500/15">
                <ShieldX size={13} className="text-red-400" />
                <span className="text-red-400 text-xs font-semibold">Free Tools</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/8 border border-gold/20">
                <ShieldCheck size={13} className="text-gold" />
                <span className="text-gold text-xs font-semibold">TestLeap</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className={`grid grid-cols-3 gap-4 p-5 sm:p-6 items-center ${
                i < comparisons.length - 1 ? 'border-b border-white/5' : ''
              } hover:bg-white/[0.015] transition-colors`}
            >
              <div className="text-heading text-sm sm:text-base font-medium">{item.label}</div>
              <div className="flex justify-center">
                <span className="glow-cross text-lg sm:text-xl">✕</span>
              </div>
              <div className="flex justify-center">
                <span className="glow-check text-lg sm:text-xl">✓</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
