import { motion } from 'motion/react';

const sampleTestimonials = [
  { text: "J'ai atteint 10k€/mois après seulement 2 mois avec ce programme ! Les stratégies Facebook Ads sont un game-changer absolu.", name: 'Alex M.', role: 'E-commerçant', avatar: 1 },
  { text: "La structure est excellente. Plus besoin de passer des mois à deviner, l'exécution est claire. J'ai fait mes premières ventes hier !", name: 'Sarah K.', role: 'Dropshipper', avatar: 2 },
  { text: "Je partais de zéro. Marcus explique de façon très chirurgicale. Mon shop a fait 3k€ ce mois-ci, inimaginable !", name: 'Thomas D.', role: 'Entrepreneur', avatar: 3 },
  { text: "J'hésitais avant d'investir, c'est de loin le meilleur ROI de ma vie. Je quitte mon travail dans 2 semaines.", name: 'Julie R.', role: 'Ex-salariée', avatar: 4 },
  { text: "Le sourcing est dingue. Des produits ultra rentables, une marge nette de 35%. Jamais vu ça ailleurs.", name: 'Kevin L.', role: 'E-commerçant', avatar: 5 },
  { text: "Le module de copywriting... une pépite. Mes conversions ont doublé sur ma boutique existante. Impressionnant.", name: 'Marie P.', role: 'Shopify Owner', avatar: 6 },
  { text: "Pour ceux qui en ont marre des vendeurs de rêve, formez-vous ici. C'est brut, direct, et les chiffres tombent.", name: 'Lucas B.', role: 'Membre Premium', avatar: 7 },
  { text: "L'énergie de Marcus me motive au quotidien ! Une communauté très carrée. Le scaling devient une évidence.", name: 'Sophie T.', role: 'Dropshipper', avatar: 8 },
  { text: "On va à l'essentiel. C'est ce qui manque dans l'éco-système français. Merci Marcus !", name: 'Hugo C.', role: 'E-commerçant', avatar: 9 },
  { text: "Je stagnais depuis 4 mois. La stratégie de scaling rapide a débloqué mon compte TikTok Ads. Mes profits explosent.", name: 'Manon V.', role: 'Influenceuse', avatar: 10 },
];

const row1 = [...sampleTestimonials, ...sampleTestimonials];
const row2 = [...sampleTestimonials.slice(5), ...sampleTestimonials.slice(0, 5), ...sampleTestimonials.slice(5), ...sampleTestimonials.slice(0, 5)];

function TestimonialCard({ name, role, avatar, text }: { name: string; role: string; avatar: number; text: string }) {
  return (
    <div className="w-[290px] sm:w-[340px] shrink-0 mx-3 flex flex-col">
      {/* Gradient border wrapper */}
      <div
        className="relative rounded-2xl p-[1px]"
        style={{ background: 'linear-gradient(135deg, rgba(79,123,255,0.2), rgba(255,255,255,0.04), rgba(139,92,246,0.1))' }}
      >
        <div className="relative flex flex-col gap-4 p-5 rounded-2xl h-full" style={{ background: '#0D1117' }}>
          {/* Stars */}
          <div className="flex gap-0.5">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} className="text-amber-400" style={{ fontSize: '0.75rem' }}>{s}</span>
            ))}
          </div>

          <p className="text-sm leading-relaxed flex-1" style={{ color: '#9CA3AF' }}>
            "{text}"
          </p>

          <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <img
              src={`https://i.pravatar.cc/64?u=tm${avatar}`}
              alt={name}
              className="w-9 h-9 rounded-full object-cover border"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              loading="lazy"
            />
            <div>
              <p className="text-sm font-semibold text-white">{name}</p>
              <p className="text-xs" style={{ color: '#4B5563' }}>{role}</p>
            </div>
            <div className="ml-auto">
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ color: '#6B9FFF', background: 'rgba(79,123,255,0.1)', border: '1px solid rgba(79,123,255,0.2)' }}>
                ✓ Vérifié
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 overflow-hidden relative" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14 sm:mb-18 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#4F7BFF' }}>
            Témoignages
          </p>
          <h2 className="font-display font-extrabold text-white leading-tight mb-4 text-balance" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Ceux qui l'ont fait.
          </h2>
          <p className="text-base sm:text-lg mx-auto max-w-xl" style={{ color: '#6B7280' }}>
            Rejoignez plus de <strong className="text-white">5 000+ membres</strong> qui ont transformé leur boutique avec nos méthodes.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="relative select-none">
        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 w-24 sm:w-48 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #080B14, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 sm:w-48 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #080B14, transparent)' }}
        />

        {/* Row 1 — left */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] mb-4">
          <div className="flex min-w-full">
            {row1.map((item, i) => <TestimonialCard key={`r1a-${i}`} {...item} />)}
          </div>
          <div className="flex min-w-full" aria-hidden>
            {row1.map((item, i) => <TestimonialCard key={`r1b-${i}`} {...item} />)}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused]" style={{ animationDuration: '50s' }}>
          <div className="flex min-w-full">
            {row2.map((item, i) => <TestimonialCard key={`r2a-${i}`} {...item} />)}
          </div>
          <div className="flex min-w-full" aria-hidden>
            {row2.map((item, i) => <TestimonialCard key={`r2b-${i}`} {...item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
