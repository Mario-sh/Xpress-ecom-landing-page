import { motion, useInView, animate } from 'motion/react';
import { useRef, useEffect } from 'react';

const stats = [
  {
    numValue: 400,
    prefix: '+',
    suffix: 'k',
    label: 'Abonnés YouTube',
    description: 'Une communauté soudée de passionnés',
    color: 'from-brand-500/20 to-brand-600/5',
    glow: 'rgba(79,123,255,0.15)',
  },
  {
    numValue: 10,
    prefix: '>',
    suffix: 'M€',
    label: 'Générés en E-com',
    description: 'De CA cumulé par nos élèves',
    color: 'from-accent-500/20 to-accent-600/5',
    glow: 'rgba(139,92,246,0.15)',
  },
  {
    numValue: 5000,
    prefix: '+',
    suffix: '',
    label: 'Élèves formés',
    description: 'Qui ont suivi nos méthodes avec succès',
    color: 'from-brand-500/20 to-accent-500/10',
    glow: 'rgba(79,123,255,0.12)',
  },
  {
    numValue: 98,
    prefix: '',
    suffix: '%',
    label: 'Taux de satisfaction',
    description: 'Évalué par nos membres premium',
    color: 'from-green-500/20 to-green-600/5',
    glow: 'rgba(34,197,94,0.12)',
  },
];

function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 2.5,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString('fr-FR')}${suffix}`;
          }
        },
      });
    }
  }, [isInView, value, duration, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28 lg:px-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[250px] rounded-full blur-[180px]"
          style={{ background: 'radial-gradient(ellipse, rgba(79,123,255,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#4F7BFF' }}>
            L'impact en chiffres
          </p>
          <h2 className="font-display font-extrabold text-white text-balance leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Des résultats concrets,{' '}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              une expertise prouvée.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{ background: `radial-gradient(ellipse, ${stat.glow} 0%, transparent 70%)` }}
              />

              <div
                className="relative flex flex-col p-6 sm:p-8 rounded-2xl overflow-hidden h-full transition-all duration-500 group-hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 2px 24px rgba(0,0,0,0.35)',
                }}
              >
                {/* Top gradient tint */}
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${stat.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-60`} />

                <div className="font-display font-extrabold leading-none tracking-tight mb-3 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                  <CountUp value={stat.numValue} prefix={stat.prefix} suffix={stat.suffix} />
                </div>

                <div className="text-sm sm:text-base font-semibold text-gray-100 mb-1.5 leading-snug">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm leading-relaxed mt-auto" style={{ color: '#6B7280' }}>
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
