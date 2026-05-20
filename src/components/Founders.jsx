import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Code2, ArrowUpRight } from 'lucide-react'

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const founders = [
  {
    name: 'Arpit Anand',
    role: 'Co-Founder & Tech Lead',
    bio: 'Full-stack architect obsessed with building premium, high-performance web applications. Turns complex business problems into elegant digital solutions.',
    linkedin: 'https://www.linkedin.com/in/arpit-anand-614583288',
    image: '/founders/arpit.png',
  },
  {
    name: 'Manas Sanskrityayan',
    role: 'Co-Founder & Business Strategist',
    bio: 'Tech-driven business strategist who bridges the gap between client vision and engineering execution. Ensures every project delivers measurable ROI.',
    linkedin: 'https://www.linkedin.com/in/manash-sanskrityayayn-186a37289/',
    image: '/founders/manas.jpeg',
  },
]

export default function Founders() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="founders" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative section-glow"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 size={16} className="text-gold" />
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em]">The Team</p>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-heading mb-4 leading-tight">
            Built by developers.
            <br />
            <span className="font-cursive text-gold">Not designers pretending to code.</span>
          </h2>
        </motion.div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <div className="card-gold p-6 sm:p-8 text-center hover:-translate-y-1 transition-all duration-500 group">
                {/* Photo */}
                <div className="relative inline-flex mb-5">
                  <div className="w-28 h-28 border border-gold/20 overflow-hidden group-hover:border-gold/40 transition-colors duration-500">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  {/* Corner accent */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold/40" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold/40" />
                </div>

                {/* Info */}
                <h3 className="font-serif font-bold text-xl text-heading mb-1">{founder.name}</h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">{founder.role}</p>
                <p className="text-body text-sm leading-relaxed mb-5">{founder.bio}</p>

                {/* LinkedIn */}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gold/15 text-body hover:text-gold hover:border-gold/30 transition-all duration-300 text-sm cursor-pointer"
                >
                  <LinkedinIcon />
                  LinkedIn
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
