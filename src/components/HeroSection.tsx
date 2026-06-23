import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection({ onJoin }: { onJoin?: () => void }) {
  return (
    <section className="relative px-4 pt-32 pb-20 overflow-hidden sm:px-6 md:pt-44 md:pb-28 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-5%] left-[10%] w-[750px] h-[750px] bg-brand-600/12 blur-[160px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 70, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] right-[0%] w-[700px] h-[700px] bg-accent-600/12 blur-[180px] rounded-full"
        />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_28%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 mb-10 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_24px_rgba(79,123,255,0.06)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-[0.05em] text-gray-300">
              +5 000 élèves formés · Formation #1 en francophonie
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold tracking-tight text-balance leading-[1.05]"
            style={{ fontSize: 'clamp(2.6rem, 7.5vw, 6.25rem)' }}
          >
            Lancez Votre Empire
            <br className="hidden sm:block" />{' '}
            <span className="bg-gradient-to-br from-brand-400 via-brand-500 to-accent-400 bg-clip-text text-transparent">
              E-Commerce Elite.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mt-7 text-base sm:text-lg md:text-xl leading-relaxed text-balance"
            style={{ color: '#8892A4' }}
          >
            La méthode <strong className="text-gray-100 font-semibold">Xpress E-com</strong> par Marcus Lawrence.
            Sourcez, lancez et scalez votre boutique ultra-rentable — sans y passer des mois.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-full gap-4 mt-10 sm:mt-12 sm:flex-row sm:w-auto sm:items-center"
          >
            {/* Primary CTA — solid gradient avec glow */}
            <button
              onClick={onJoin}
              className="group relative inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-xl text-base font-bold text-white overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #4F7BFF 0%, #8b5cf6 100%)',
                boxShadow: '0 0 0 0 rgba(79,123,255,0.5), 0 4px 24px rgba(79,123,255,0.35)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 6px rgba(79,123,255,0.18), 0 8px 32px rgba(79,123,255,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 0 rgba(79,123,255,0.5), 0 4px 24px rgba(79,123,255,0.35)';
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Rejoindre le cercle élite</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => document.getElementById('resultats')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center h-14 gap-2.5 px-7 text-base font-medium border rounded-xl text-gray-300 border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.1] hover:text-white transition-all duration-200 backdrop-blur-sm focus:outline-none"
            >
              <Play className="w-4 h-4 text-brand-400 fill-brand-400" />
              Voir les résultats
            </button>
          </motion.div>

          {/* Social proof mini bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-2.5 mt-8"
            style={{ color: '#6B7280', fontSize: '0.8rem' }}
          >
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4, 5].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/32?u=hero${i}`}
                  alt=""
                  className="w-6 h-6 rounded-full border-2 object-cover"
                  style={{ borderColor: '#080B14' }}
                />
              ))}
            </div>
            <span>
              Rejoignez <strong className="text-gray-300">5 000+</strong> entrepreneurs actifs
            </span>
            <span className="flex text-amber-400">
              {'★★★★★'.split('').map((s, i) => <span key={i} style={{ fontSize: '0.7rem' }}>{s}</span>)}
            </span>
          </motion.div>
        </div>

        {/* Video preview */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl mx-auto mt-20 lg:mt-28 group"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-brand-500/30 via-accent-500/15 to-transparent rounded-[2rem] blur-xl opacity-55 group-hover:opacity-85 transition duration-700" />

          <div className="relative aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/[0.08] bg-gray-950 shadow-2xl flex flex-col ring-1 ring-white/[0.04] group/player">
            {/* Browser chrome */}
            <div className="flex items-center h-10 px-5 gap-3 border-b border-white/[0.05] bg-gray-900/70 backdrop-blur-sm shrink-0 z-20">
              <div className="flex gap-1.5">
                {['bg-red-500/60', 'bg-amber-500/60', 'bg-green-500/60'].map((c, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${c} opacity-60 group-hover/player:opacity-100 transition-opacity duration-300`}
                  />
                ))}
              </div>
              <div className="flex-1 h-5 rounded-md bg-white/[0.04] flex items-center px-3">
                <span className="text-[10px] tracking-wide" style={{ color: '#4B5563' }}>
                  xpress-ecom.com
                </span>
              </div>
            </div>

            <div className="flex-1 w-full bg-black relative">
              <div className="absolute inset-0 bg-brand-500/[0.03] mix-blend-screen pointer-events-none z-20" />
              <iframe
                className="w-full h-full relative z-10"
                src="https://www.youtube.com/embed/wwWnS08BqeY?controls=1&rel=0&modestbranding=1"
                title="Présentation Xpress E-com"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
