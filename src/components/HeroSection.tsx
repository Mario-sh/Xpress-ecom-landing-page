import { motion } from 'motion/react';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export default function HeroSection({ onJoin }: { onJoin?: () => void }) {
  return (
    <section className="relative px-4 pt-32 pb-20 overflow-hidden sm:px-6 md:pt-40 md:pb-28 lg:px-8">
      {/* Abstract Animated Premium Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated glowing orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-500/20 blur-[120px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-accent-500/20 blur-[150px] rounded-full mix-blend-screen" 
        />
        
        {/* Fading geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_40%,#000_20%,transparent_100%)] opacity-70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border rounded-full bg-gray-900/40 border-gray-700/50 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <div className="flex text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-300">
              La formation la plus réputée en francophonie
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-extrabold tracking-tight font-display sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-balance drop-shadow-2xl"
          >
            Lancez Votre Empire <br className="hidden lg:block" />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-brand-200 to-gray-100">E-Commerce Elite.</span>
              <span className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-brand-500/0 via-brand-500/50 to-brand-500/0 blur-sm" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mt-8 text-lg font-display font-light text-gray-400 md:text-xl lg:text-2xl text-balance leading-relaxed"
          >
            Découvrez la méthode <strong className="font-semibold text-gray-200">Xpress E-com</strong> par Marcus Lawrence. 
            Apprenez à sourcer, créer, lancer et scaler votre boutique ultra-rentable 
            sans y passer des mois.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-full gap-5 mt-10 sm:mt-14 sm:flex-row sm:w-auto"
          >
            <LiquidButton 
              size="xxl" 
              onClick={onJoin}
              className="text-white bg-brand-600/20 border border-brand-500/30 font-bold tracking-wide"
            >
              Rejoindre le cercle élite
              <ArrowRight className="w-5 h-5 ml-2" />
            </LiquidButton>
            
            <button className="inline-flex items-center justify-center h-14 gap-2 px-8 text-base font-semibold transition-all duration-300 border rounded-lg text-gray-200 border-gray-700 bg-gray-900/40 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 backdrop-blur-md hover:border-gray-600 shadow-xl">
              <PlayCircle className="w-5 h-5 text-brand-400" />
              Voir les résultats
            </button>
          </motion.div>
        </div>

        {/* Video / Dashboard preview placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl mx-auto mt-20 lg:mt-28 group"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-b from-brand-500/30 to-accent-500/10 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 bg-gray-950 shadow-2xl flex flex-col ring-1 ring-white/5 group/player">
            <div className="flex items-center justify-between w-full h-10 gap-2 px-6 border-b border-white/5 bg-gray-900/80 backdrop-blur-sm z-20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-700/50 group-hover/player:bg-red-500/80 transition-colors duration-300" />
                <div className="w-3 h-3 rounded-full bg-gray-700/50 group-hover/player:bg-yellow-500/80 transition-colors duration-300" />
                <div className="w-3 h-3 rounded-full bg-gray-700/50 group-hover/player:bg-green-500/80 transition-colors duration-300" />
              </div>
            </div>
            <div className="flex-1 w-full bg-black relative group/iframe">
              <div className="absolute inset-0 bg-brand-500/5 mix-blend-screen pointer-events-none z-20" />
              <iframe 
                className="w-full h-full relative z-10"
                src="https://www.youtube.com/embed/wwWnS08BqeY?controls=1&rel=0&modestbranding=1" 
                title="Présentation Xpress E-com" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
