import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import AnimatedCounter from './AnimatedCounter'
import { Rocket, Globe, Clock, Shield } from 'lucide-react'

const stats = [
  { icon: Rocket, end: 6, suffix: '+', label: 'Projects Delivered' },
  { icon: Globe, end: 4, suffix: '', label: 'Industries Served' },
  { icon: Clock, end: 48, suffix: '-72 Hr', label: 'Avg Delivery' },
  { icon: Shield, end: 100, suffix: '%', label: 'Ownership Guaranteed' },
]

export default function StatsBar() {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Top/bottom amber lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-3">
                <div className="w-11 h-11 flex items-center justify-center border border-gold/15 bg-gold/5 group-hover:border-gold/30 transition-colors">
                  <stat.icon size={18} className="text-gold" />
                </div>
              </div>
              <div className="font-serif font-bold text-3xl sm:text-4xl text-heading mb-1">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-body text-xs uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
