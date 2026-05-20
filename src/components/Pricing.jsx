import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Check, Star, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '7,000',
    description: 'Perfect for getting your business online fast.',
    features: [
      'Your own domain (1 year)',
      'Mobile-ready responsive website',
      'WhatsApp chat button',
      'Yours forever, no monthly fees',
      'SSL security included',
      'Basic SEO setup',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: '20,000',
    description: 'Everything you need to manage and grow online.',
    features: [
      'Everything in Starter',
      'Admin panel to manage content',
      'Customer & staff login system',
      'Small online shop setup',
      'Server hosting for 1 year',
      'Performance optimized',
    ],
    popular: true,
    badge: 'Most Popular',
  },
  {
    name: 'Pro',
    price: '25,000',
    description: 'A powerful system to run your entire business.',
    features: [
      'Everything in Business',
      'Powerful management system',
      'Fees, attendance, roles & modules',
      'Professional business email',
      'you@yourbusiness.com',
      'Priority support',
    ],
    popular: false,
  },
  {
    name: 'Elite',
    price: '30,000',
    description: 'The ultimate solution for ambitious businesses.',
    features: [
      'Everything in Pro',
      'AI chatbot that works 24/7',
      'Multilingual website support',
      'Full payment gateway',
      'UPI, cards & wallet support',
      'Dedicated account manager',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative section-glow"
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">Pricing</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-heading mb-4">
            Simple Pricing.{' '}
            <span className="font-cursive text-gold">No Surprises.</span>
          </h2>
          <p className="text-body text-base max-w-xl mx-auto">
            One-time payment. Full ownership. No hidden costs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12
          max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:grid-cols-none max-sm:flex max-sm:gap-4 max-sm:-mx-4 max-sm:px-4 max-sm:pb-4"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`relative max-sm:min-w-[280px] max-sm:snap-center
                ${plan.popular
                  ? 'border border-gold/40 animate-gold-pulse lg:-translate-y-3'
                  : 'card-gold hover:-translate-y-1'
                }
                bg-card transition-all duration-500
              `}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1 bg-gold shadow-lg shadow-gold/20">
                    <Star size={11} className="text-primary fill-primary" />
                    <span className="text-primary text-[10px] font-bold uppercase tracking-wider">{plan.badge}</span>
                  </div>
                </div>
              )}

              <div className="p-6 h-full flex flex-col">
                <h3 className="font-serif font-bold text-lg text-heading mb-1">{plan.name}</h3>
                <p className="text-body text-xs mb-5">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-body text-sm">₹</span>
                    <span className="font-serif font-bold text-4xl text-heading">{plan.price}</span>
                  </div>
                  <span className="text-body/50 text-[10px] uppercase tracking-wider">one-time</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      <span className="text-body-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/917814122826?text=Hi!%20I'm%20interested%20in%20the%20${plan.name}%20plan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 font-semibold text-sm transition-all duration-300 cursor-pointer
                    ${plan.popular
                      ? 'btn-amber'
                      : 'border border-gold/20 text-gold hover:bg-gold/5 hover:border-gold/40'
                    }
                  `}
                >
                  Get Started
                  <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center text-body/50 text-xs sm:text-sm max-w-3xl mx-auto"
        >
          Maintenance & future updates quoted separately. All plans include: mobile responsive, fast loading, SSL security, SEO basics, and{' '}
          <span className="text-gold font-medium">full code ownership</span>.
        </motion.p>
      </div>
    </section>
  )
}
