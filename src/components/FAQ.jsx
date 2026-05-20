import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Do I own the website after delivery?',
    answer: 'Absolutely. You get the complete source code, domain access, and hosting credentials. It\'s 100% yours — we don\'t hold anything hostage. No lock-in, no recurring platform fees.',
  },
  {
    question: 'What if I need changes after delivery?',
    answer: 'We offer maintenance packages. Small tweaks? We\'ll often do those free. Bigger changes are quoted transparently — no surprises, no hidden costs. You always know what you\'re paying for.',
  },
  {
    question: 'Can you build for my industry?',
    answer: 'Yes. We\'ve built for Healthcare, Education, Agriculture, Energy, and E-Commerce. Whatever your industry, we\'ll research it and build something that fits perfectly. Every project is custom — never a template.',
  },
  {
    question: 'Why not just use Wix or a free AI tool?',
    answer: 'You don\'t own what they give you. They can change pricing, shut down, or limit features anytime. With us, you own the code, the data, and the future of your website. No platform dependency.',
  },
  {
    question: 'How does the 48-72hr delivery work?',
    answer: 'Simple: You share requirements → we send a design preview in 24 hours → once you approve, your site goes live within 48-72 hours. Most clients are shocked by how fast it is.',
  },
  {
    question: 'Is my data and customer information secure?',
    answer: 'Yes. We implement SSL encryption, secure authentication, and your data stays on your own server — not on a shared platform you don\'t control. Your customers\' data is protected.',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-white/5 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
      >
        <div className="flex items-center gap-4 flex-1 pr-4">
          {/* Accent bar */}
          <div className={`w-[2px] h-6 transition-all duration-300 shrink-0 ${
            isOpen ? 'bg-gold' : 'bg-white/10'
          }`} />
          <h3 className={`font-serif text-base sm:text-lg transition-colors duration-300 ${
            isOpen ? 'text-heading font-semibold' : 'text-body-light group-hover:text-heading'
          }`}>
            {faq.question}
          </h3>
        </div>
        <div className={`w-7 h-7 flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen ? 'text-gold' : 'text-body group-hover:text-heading'
        }`}>
          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pl-6 pb-6 ml-[2px] border-l border-gold/15">
              <p className="text-body text-sm sm:text-base leading-relaxed pl-4">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative section-glow"
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">FAQ</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-heading mb-4">
            Got Questions?{' '}
            <span className="font-cursive text-gold">We've Got Answers.</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="card-gold px-5 sm:px-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
