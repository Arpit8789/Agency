import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ClipboardList, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Share your requirements',
    description: 'WhatsApp or form, 10 minutes. Tell us what you need.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Get a design preview in 24 hrs',
    description: 'We show you before we build. No surprises.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Go live in 48–72 hrs',
    description: 'Your website, your domain, fully yours.',
  },
]

export default function HowItWorks() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 relative section-glow"
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">Process</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-heading mb-4">
            From Idea to Live —{' '}
            <span className="font-cursive text-gold">in 3 Steps</span>
          </h2>
          <p className="text-body text-base max-w-xl mx-auto">
            No meetings, no bureaucracy. Just results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting dashed line — desktop */}
          <div className="hidden md:block absolute top-[48px] left-[16.66%] right-[16.66%] h-px border-t border-dashed border-gold/15" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="text-center relative"
              >
                {/* Connecting line — mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-[96px] h-[calc(100%)] w-px border-l border-dashed border-gold/15" />
                )}

                {/* Number badge */}
                <div className="relative inline-flex mb-6">
                  <div className="w-[64px] h-[64px] border border-gold/30 bg-gold/5 flex items-center justify-center relative z-10">
                    <span className="text-gold font-serif font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="absolute inset-0 bg-gold/10 blur-xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-serif font-bold text-lg text-heading mb-2">{step.title}</h3>
                  <p className="text-body text-sm max-w-[240px] mx-auto">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
