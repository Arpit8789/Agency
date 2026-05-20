import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      href="https://wa.me/917814122826?text=Hi%20TestLeap!%20I%27d%20like%20to%20know%20more."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg cursor-pointer group animate-whatsapp-pulse hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-white fill-white" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-card border border-white/10 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </div>
    </motion.a>
  )
}
