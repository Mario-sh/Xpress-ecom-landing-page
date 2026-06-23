import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const credentials = [
  { value: '+10M€', label: 'générés en e-commerce' },
  { value: '400k', label: 'abonnés YouTube' },
  { value: '5 000+', label: 'élèves formés' },
];

const tags = [
  'Expert E-commerce & Dropshipping',
  'Créateur de marques à succès',
  'Spécialiste Meta & TikTok Ads',
  'Top créateur e-com France',
];

export default function ProfileSection() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Gradient border frame */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-brand-500/40 via-accent-500/20 to-transparent blur-sm" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-900 border border-white/10 group">
              <img
                src="/marcus.png"
                alt="Marcus Lawrence"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Photo overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent opacity-70" />

              {/* Name plate */}
              <div className="absolute bottom-0 inset-x-0 p-7 z-10">
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  Marcus Lawrence
                </h3>
                <p className="mt-1.5 text-sm font-medium tracking-wide" style={{ color: '#6B9FFF' }}>
                  Fondateur · Xpress E-com
                </p>
              </div>
            </div>

            {/* Floating credential cards */}
            <div className="absolute -right-4 top-8 flex flex-col gap-3 hidden lg:flex">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col px-4 py-3 rounded-xl border border-white/10 bg-gray-950/90 backdrop-blur-xl shadow-xl"
                >
                  <span className="font-display font-extrabold text-xl text-white">{c.value}</span>
                  <span className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{c.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: '#4F7BFF' }}>
              Votre Instructeur
            </p>

            <h2 className="font-display font-extrabold text-white leading-tight text-balance mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              De zéro à plusieurs millions.{' '}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                Sans bullshit.
              </span>
            </h2>

            <div className="space-y-5 text-base leading-relaxed mb-8" style={{ color: '#8892A4' }}>
              <p>
                J'ai commencé de zéro. Après de nombreux échecs, j'ai fini par craquer le code du dropshipping
                et de l'e-commerce moderne. Plus besoin de passer 6 mois à créer une marque imparfaite.
              </p>
              <p>
                Aujourd'hui, à travers ma chaîne YouTube et mes marques,{' '}
                <strong className="text-gray-100 font-semibold">Xpress E-com</strong> n'est pas une simple théorie.
                C'est la cristallisation de mes méthodes exactes — lancer vite, tester intelligemment, scaler agressivement.
              </p>
            </div>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 bg-white/[0.04] text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <a
                href="https://www.youtube.com/channel/UClAgJK-XLuUsjVsqw1eQyLQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border rounded-xl text-gray-200 border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all duration-200 backdrop-blur-sm focus:outline-none"
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
