import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const features = [
  "Accès à vie aux 6 modules complets",
  "Mises à jour gratuites de la formation",
  "Templates Shopify ultra-performants inclus",
  "Processus de scaling publicitaire exact",
  "Ressources et documents légaux téléchargeables",
  "Accès à la communauté privée Discord",
];

export default function PricingSection({ onJoin }: { onJoin?: () => void }) {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:py-24 lg:px-8 mt-12 overflow-hidden">
      {/* Background glow specific to pricing */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-2xl h-[500px] bg-brand-600/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-100 leading-tight mb-4 text-balance">
            Prêt à lancer votre boutique ?
          </h2>
          <p className="text-lg font-display font-light text-gray-400">
            Rejoignez Xpress E-com aujourd'hui et commencez à construire votre liberté.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-lg relative group/pricing"
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] pointer-events-none" />
          {/* Subtle inside gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent rounded-3xl pointer-events-none opacity-80" />
          {/* Top glowing line */}
          <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-brand-400/80 to-transparent pointer-events-none" />
          
          <div className="relative z-10 p-8 sm:p-10 rounded-3xl overflow-hidden">
            <CountdownTimer />

          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-gray-100">Xpress E-com</h3>
              <p className="text-sm text-gray-400 mt-1">Programme d'excellence complet</p>
            </div>
            <div className="px-3 py-1 text-xs font-semibold text-brand-400 uppercase tracking-widest bg-brand-500/10 rounded-full border border-brand-500/20">
              Populaire
            </div>
          </div>

          <div className="mb-8 flex items-baseline gap-2">
            <span className="text-5xl font-display font-black text-gray-100">297€</span>
            <span className="text-lg text-gray-500 line-through decoration-gray-500/50">997€</span>
          </div>

          <button 
            onClick={onJoin}
            className="w-full relative group overflow-hidden flex items-center justify-center gap-2 px-8 py-4 mb-8 text-base font-semibold text-white transition-all duration-300 rounded-xl bg-brand-600 hover:bg-brand-500 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            <Zap className="w-5 h-5 text-brand-200" />
            <span className="relative z-10">Rejoindre le programme</span>
            {/* Hover reflection */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>

          <ul className="space-y-4 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-brand-400" />
                </div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4" />
            Paiement 100% sécurisé via Stripe
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
