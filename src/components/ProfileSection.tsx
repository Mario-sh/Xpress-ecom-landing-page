import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  "Expert E-commerce & Dropshipping",
  "Créateur de plusieurs marques à succès",
  "Spécialiste de l'acquisition payante (Meta/Tiktok)",
  "Top créateur de contenu E-com en France"
];

export default function ProfileSection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 relative group">
              <img 
                src="/marcus.png" 
                alt="Marcus Lawrence" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 inset-x-0 p-8 z-20">
                <h3 className="font-display font-black text-3xl sm:text-4xl text-gray-100 tracking-tight">Marcus Lawrence</h3>
                <p className="text-brand-400 mt-2 font-medium tracking-wide">Directeur de Xpress E-com</p>
              </div>

              {/* Decorative glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/20 blur-[80px] z-0 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-brand-400 text-sm font-display font-light tracking-wide uppercase mb-3">Votre Instructeur</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-100 leading-tight mb-6">
              De débutant à des millions générés.
            </h3>
            
            <div className="space-y-6 font-display font-light text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              <p>
                J'ai commencé de zéro. Après de nombreux échecs, j'ai fini par craquer le code du dropshipping 
                et de l'e-commerce moderne. Plus besoin de passer 6 mois à créer une marque imparfaite.
              </p>
              <p>
                Aujourd'hui, à travers ma chaîne YouTube et mes marques, j'ai documenté l'intégralité de mon parcours. 
                <strong className="font-semibold text-gray-200">Xpress E-com</strong> n'est pas qu'une simple théorie. C'est la cristallisation de mes 
                méthodes exactes pour lancer vite, tester intelligemment, et scaler agressivement.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <div>
              <a 
                href="https://www.youtube.com/channel/UClAgJK-XLuUsjVsqw1eQyLQ" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-colors duration-200 border rounded-lg text-gray-200 border-gray-700 bg-gray-900/50 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 backdrop-blur-sm"
              >
                Découvrir ma chaîne YouTube
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
