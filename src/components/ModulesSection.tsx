import { motion } from 'motion/react';
import { Layers, Rocket, Search, MousePointerClick, RefreshCcw, LayoutDashboard } from 'lucide-react';

const modules = [
  {
    id: '01',
    title: 'Mindset & Fondations',
    description: 'Préparez votre mental et vos structures légales pour accueillir le succès sans blocages. La base incontournable.',
    icon: Layers,
    accent: '#4F7BFF',
  },
  {
    id: '02',
    title: 'Le Produit Gagnant Xpress',
    description: 'Mes méthodes de sourcing secrètes pour trouver des produits à forte marge et faible concurrence en moins de 48h.',
    icon: Search,
    accent: '#8b5cf6',
  },
  {
    id: '03',
    title: 'Machine à Vendre (Shopify)',
    description: 'Créez une boutique optimisée pour la conversion. Zéro technique requise, templates haute performance inclus.',
    icon: LayoutDashboard,
    accent: '#4F7BFF',
  },
  {
    id: '04',
    title: 'Créatifs & Angles Publicitaires',
    description: 'La guerre se gagne sur les visuels. Apprenez à réaliser des publicités Meta/TikTok qui arrêtent le scroll.',
    icon: MousePointerClick,
    accent: '#8b5cf6',
  },
  {
    id: '05',
    title: 'Trafic & Acquisition Scalable',
    description: 'Le blueprint complet pour lancer vos pubs, interpréter les datas, et dépenser intelligemment pour maximiser le ROAS.',
    icon: Rocket,
    accent: '#4F7BFF',
  },
  {
    id: '06',
    title: 'Opérations & Automatisation',
    description: 'Sortez de l\'opérationnel. Gérez le SAV, les fournisseurs, et automatisez pour vivre la vraie liberté.',
    icon: RefreshCcw,
    accent: '#8b5cf6',
  },
];

export default function ModulesSection() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:py-32 lg:px-8 bg-gray-950 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[600px] bg-accent-600/8 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[600px] bg-brand-600/8 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border rounded-full border-brand-500/30 bg-brand-500/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium tracking-[0.12em] uppercase" style={{ color: '#6B9FFF' }}>
              La Roadmap Complète
            </span>
          </div>

          <h2 className="font-display font-extrabold text-white leading-tight mb-6 text-balance" style={{ fontSize: 'clamp(1.9rem, 5vw, 3.75rem)' }}>
            Votre ascension{' '}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              étape par étape.
            </span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-balance" style={{ color: '#6B7280' }}>
            Six modules intensifs pour passer de zéro à une boutique qui encaisse ses premières ventes, puis scale sans limites.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px sm:-translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-10 sm:space-y-16">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={mod.id}
                  className={`relative flex items-start sm:items-center ${isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-col`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full sm:-translate-x-1/2 z-20 ring-4 ring-gray-950"
                    style={{ background: mod.accent, boxShadow: `0 0 12px ${mod.accent}60` }}
                  />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full sm:w-[calc(50%-2rem)] pl-12 pr-4 sm:px-0 ${isEven ? 'sm:pl-10' : 'sm:pr-10'}`}
                  >
                    <div className="group relative p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-white/[0.1]">
                      {/* Top accent line */}
                      <div
                        className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
                        style={{ background: `linear-gradient(90deg, transparent, ${mod.accent}50, transparent)` }}
                      />

                      <div className="flex items-center gap-4 mb-4">
                        {/* Icon */}
                        <div
                          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-400"
                          style={{ background: `${mod.accent}15`, color: mod.accent }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        {/* Module number */}
                        <span
                          className="font-display font-extrabold text-4xl leading-none select-none transition-colors duration-400"
                          style={{ color: `${mod.accent}18` }}
                        >
                          {mod.id}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 tracking-tight">
                        {mod.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#6B7280' }}>
                        {mod.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Spacer for the other half */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
