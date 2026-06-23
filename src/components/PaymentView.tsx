import { CreditCardForm } from "./ui/payment-card"
import { ArrowLeft } from "lucide-react"
import { motion } from "motion/react"

interface PaymentViewProps {
  onBack: () => void;
}

export default function PaymentView({ onBack }: PaymentViewProps) {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] opacity-15 blur-[150px] bg-gradient-to-br from-brand-500 to-accent-500 rounded-full mix-blend-screen" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg z-10 relative"
      >
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour</span>
        </button>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-display font-bold text-white mb-2">Finaliser l'inscription</h1>
          <p className="text-gray-400">Rejoindre Xpress E-com aujourd'hui.</p>
        </div>

        <CreditCardForm />
      </motion.div>
    </div>
  )
}
