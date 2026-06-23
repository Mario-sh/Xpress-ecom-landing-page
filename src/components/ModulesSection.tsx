import { motion } from 'motion/react';
import { Layers, Rocket, Search, MousePointerClick, RefreshCcw, LayoutDashboard, ChevronRight } from 'lucide-react';
import { LiquidCard, CardContent } from './ui/liquid-glass-card';

const modules = [
  {
    id: '01',
    title: 'Mindset & Fondations',
    description: 'Préparez votre mental et vos structures légales pour accueillir le succès sans blocages. La base incontournable.',
    icon: Layers
  },
  {
    id: '02',
    title: 'Le Produit Gagnant Xpress',
    description: 'Mes méthodes de sourcing secrètes pour trouver des produits à forte marge et faible concurrence en moins de 48h.',
    icon: Search
  },
  {
    id: '03',
    title: 'Machine à Vendre (Shopify)',
    description: 'Créez une boutique optimisée pour la conversion. Zéro technique requise, templates haute performance inclus.',
    icon: LayoutDashboard
  },
  {
    id: '04',
    title: 'Créatifs & Angles',
    description: 'La guerre se gagne sur les visuels. Apprenez à réaliser des publicités (Meta/TikTok) qui arrêtent le scroll.',
    icon: MousePointerClick
  },
  {
    id: '05',
    title: 'Trafic & Acquisition Scalable',
    description: 'Le blueprint complet pour lancer vos pubs, interpréter les datas, et dépenser intelligemment pour maximiser le ROAS.',
    icon: Rocket
  },
  {
    id: '06',
    title: 'Opérations & Automatisation',
    description: 'Sortez de l\'opérationnel. Comment gérer le SAV, les fournisseurs, et automatiser pour vivre la vraie liberté.',
    icon: RefreshCcw
  }
];

export default function ModulesSection() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:py-32 lg:px-8 bg-gray-950 overflow-hidden">
      {/* Premium ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-full max-w-lg h-[600px] opacity-10 blur-[150px] bg-accent-500 rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 left-0 w-full max-w-lg h-[600px] opacity-10 blur-[150px] bg-brand-500 rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border rounded-full bg-gray-900/40 border-brand-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <h2 className="text-brand-400 text-xs sm:text-sm font-display font-medium tracking-widest uppercase">
              La Roadmap Complète
            </h2>
          </div>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Votre ascension étape <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">par étape.</span>
          </h3>
          <p className="text-lg sm:text-xl font-display font-light text-gray-400 text-balance leading-relaxed">
            Six modules intensifs conçus pour vous faire passer de zéro à une boutique qui encaisse ses premières ventes, puis scale sans limites.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/50 to-brand-500/0 sm:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-24">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={mod.id} className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-brand-400 sm:-translate-x-1/2 ring-4 ring-gray-950 shadow-[0_0_15px_rgba(37,99,235,0.5)] z-20"
                  />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full sm:w-1/2 pl-12 pr-4 sm:px-12 ${isEven ? 'sm:text-left' : 'sm:text-right'}`}
                  >
                    <LiquidCard className="group hover:-translate-y-1 transition-transform duration-500">
                      <CardContent className="p-8">
                        <div className={`flex items-center gap-4 mb-6 ${isEven ? 'flex-row' : 'flex-row sm:flex-row-reverse'}`}>
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-lg flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform duration-500 group-hover:text-brand-300">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="font-display font-black text-4xl text-gray-800/40 group-hover:text-brand-500/20 transition-colors duration-500">
                            {mod.id}
                          </span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 tracking-tight">
                          {mod.title}
                        </h4>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                          {mod.description}
                        </p>
                      </CardContent>
                    </LiquidCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
