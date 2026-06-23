import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

const results = [
  { id: 1, src: '/result-1.jpg', alt: 'Shopify Dashboard 1' },
  { id: 2, src: '/result-2.jpg', alt: 'Shopify Dashboard 2' },
  { id: 3, src: '/result-3.jpg', alt: 'Shopify Dashboard 3' },
  { id: 4, src: '/result-4.jpg', alt: 'Shopify Dashboard 4' },
  { id: 5, src: '/result-5.jpg', alt: 'Shopify Dashboard 5' },
  { id: 6, src: '/result-6.jpg', alt: 'Shopify Dashboard 6' }
];

export default function ResultsSection() {
  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32 lg:px-8 bg-gray-950 border-y border-white/5 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-500/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border rounded-full bg-gray-900/40 border-gray-700/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
            <h2 className="text-gray-300 text-xs sm:text-sm font-display font-medium tracking-widest uppercase">
              La preuve en direct
            </h2>
          </div>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            L'excellence validée par <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">les chiffres.</span>
          </h3>
          <p className="max-w-3xl mx-auto font-display font-light text-gray-400 text-lg sm:text-xl leading-relaxed">
            Ces captures d'écran proviennent directement des tableaux de bord Shopify. De vrais magasins, de vraies ventes, pas de fausses promesses.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-3xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl break-inside-avoid mb-6 lg:mb-8 ring-1 ring-white/5"
            >
              <img 
                src={result.src} 
                alt={result.alt}
                className="w-full h-auto block transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />
              
              {/* Optional verification badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  Résultat Élève
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
           <LiquidButton size="xxl" className="bg-brand-600/20 border border-brand-500/30 text-white font-bold tracking-wide group" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Je veux générer ces résultats
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
           </LiquidButton>
        </motion.div>
      </div>
    </section>
  );
}
