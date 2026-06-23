import { motion, useInView, animate } from 'motion/react';
import { Users, Youtube, Trophy, Target } from 'lucide-react';
import { LiquidCard, CardContent } from './ui/liquid-glass-card';
import { useRef, useEffect } from 'react';

const stats = [
  {
    id: 1,
    name: 'Abonnés sur YouTube',
    numValue: 400,
    prefix: '+',
    suffix: 'k',
    icon: Youtube,
    description: 'Une communauté soudée de passionnés'
  },
  {
    id: 2,
    name: 'Générés en E-com',
    numValue: 10,
    prefix: '>',
    suffix: 'M€',
    icon: Trophy,
    description: 'De chiffre d\'affaires cumulé par nos élèves'
  },
  {
    id: 3,
    name: 'Élèves formés',
    numValue: 5000,
    prefix: '+',
    suffix: '',
    icon: Users,
    description: 'Qui ont suivi nos méthodes avec succès'
  },
  {
    id: 4,
    name: 'Taux de satisfaction',
    numValue: 98,
    prefix: '',
    suffix: '%',
    icon: Target,
    description: 'Evalué par nos membres premium'
  }
];

function CountUp({ 
  value, 
  prefix = "", 
  suffix = "", 
  duration = 2.5 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  duration?: number; 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          if (ref.current) {
            const formatted = Math.floor(latest).toLocaleString('en-US');
            ref.current.textContent = `${prefix}${formatted}${suffix}`;
          }
        }
      });
    }
  }, [isInView, value, duration, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:py-24 lg:px-8 bg-gray-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[300px] opacity-10 blur-[150px] bg-brand-500 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-sm font-display font-medium tracking-widest uppercase text-brand-400 mb-2">L'Impact en chiffres</h2>
          <p className="mt-2 text-3xl font-display font-bold text-white sm:text-4xl md:text-5xl text-balance">
            Des résultats concrets, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">une expertise prouvée.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <LiquidCard className="h-full group hover:-translate-y-1 transition-transform duration-500 bg-gray-900/30">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
                    <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-lg text-brand-400 group-hover:scale-110 transition-transform duration-500 group-hover:text-brand-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="font-display font-black text-4xl sm:text-5xl text-white mb-3 tracking-tight">
                      <CountUp value={stat.numValue} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-gray-200 mb-2">
                      {stat.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.description}
                    </div>
                  </CardContent>
                </LiquidCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
