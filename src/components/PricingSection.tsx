import { motion } from 'motion/react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const features = [
  'Accès à vie aux 6 modules complets',
  'Mises à jour gratuites de la formation',
  'Templates Shopify ultra-performants inclus',
  'Processus de scaling publicitaire exact (Meta/TikTok)',
  'Ressources et documents légaux téléchargeables',
  'Accès à la communauté privée Discord',
];

export default function PricingSection({ onJoin }: { onJoin?: () => void }) {
  return (
    <section id="pricing" className="relative px-4 py-20 sm:px-6 md:py-28 lg:px-8 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-full max-w-2xl h-[500px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse, rgba(79,123,255,0.12) 0%, rgba(139,92,246,0.06) 50%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2
            className="font-display font-extrabold text-white leading-tight mb-4 text-balance"
            style={{ fontSize: 'clamp(1.9rem, 5vw, 3.5rem)' }}
          >
            Prêt à lancer votre boutique ?
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#6B7280' }}>
            Rejoignez Xpress E-com et commencez à construire votre liberté financière.
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-lg relative"
        >
          {/* Gradient border */}
          <div
            className="absolute -inset-[1.5px] rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(79,123,255,0.4), rgba(139,92,246,0.2), rgba(255,255,255,0.04))' }}
          />

          {/* Card body */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ background: '#0D1117', backdropFilter: 'blur(20px)' }}
          >
            {/* Top gradient bar */}
            <div
              className="h-px w-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(79,123,255,0.7), rgba(139,92,246,0.5), transparent)' }}
            />

            <div className="p-8 sm:p-10">
              <CountdownTimer />

              {/* Card header */}
              <div className="flex items-start justify-between mb-7">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">Xpress E-com</h3>
                  <p className="text-sm mt-1" style={{ color: '#6B7280' }}>Programme d'excellence complet</p>
                </div>
                <span
                  className="px-3 py-1.5 text-xs font-bold tracking-[0.1em] uppercase rounded-full"
                  style={{ color: '#6B9FFF', background: 'rgba(79,123,255,0.1)', border: '1px solid rgba(79,123,255,0.25)' }}
                >
                  Populaire
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display font-extrabold text-5xl text-white">297€</span>
                <div className="flex flex-col">
                  <span className="text-lg line-through" style={{ color: '#4B5563', textDecorationColor: '#4B5563' }}>997€</span>
                  <span className="text-xs font-medium" style={{ color: '#22c55e' }}>-70% aujourd'hui</span>
                </div>
              </div>

              {/* CTA button */}
              <button
                onClick={onJoin}
                className="group w-full relative flex items-center justify-center gap-2 px-8 py-4 mb-8 rounded-xl text-base font-bold text-white overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                style={{
                  background: 'linear-gradient(135deg, #4F7BFF, #8b5cf6)',
                  boxShadow: '0 0 0 0 rgba(79,123,255,0.4)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 8px rgba(79,123,255,0.12), 0 8px 32px rgba(79,123,255,0.3)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 0 rgba(79,123,255,0.4)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Rejoindre le programme</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>

              {/* Features */}
              <ul className="space-y-3.5 mb-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(79,123,255,0.15)' }}
                    >
                      <Check className="w-3 h-3" style={{ color: '#6B9FFF' }} />
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Security badge */}
              <div
                className="flex items-center justify-center gap-2 pt-6 text-xs"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#4B5563' }}
              >
                <ShieldCheck className="w-4 h-4" />
                Paiement 100% sécurisé · Stripe · Satisfait ou remboursé 30j
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
