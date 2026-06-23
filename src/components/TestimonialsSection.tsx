import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const sampleTestimonials = [
  "J'ai atteint 10k€/mois après seulement 2 mois avec ce programme ! Les stratégies Facebook Ads sont un game-changer absolu.",
  "La structure est excellente. Plus besoin de passer des mois à deviner, l'exécution est claire. J'ai fait mes premières ventes hier !",
  "Je partais de zéro. Marcus explique de façon très chirurgicale. Mon shop a fait 3k€ ce mois-ci, inimaginable !",
  "J'hésitais avant d'investir, c'est de loin le meilleur ROI de ma vie. Je quitte mon travail dans 2 semaines.",
  "Le sourcing est dingue. Des produits ultra rentables, une marge nette de 35%. Jamais vu ça ailleurs.",
  "Le module de copywriting... une pépite. Mes conversions ont doublé sur ma boutique existante. Impressionnant.",
  "Pour ceux qui en ont marre des vendeurs de rêve, formez-vous ici. C'est brut, direct, et les chiffres tombent.",
  "L'énergie de Marcus me motive au quotidien ! Une communauté très carrée. Le scaling devient une évidence.",
  "On va à l'essentiel. C'est ce qui manque dans l'éco-système français. Merci Marcus !",
  "Je stagnais depuis 4 mois. La stratégie de scaling rapide a débloqué mon compte Tiktok Ads. Mes profits explosent."
];

const names = [
  'Alex M.', 'Sarah K.', 'Thomas D.', 'Julie R.', 'Kevin L.', 
  'Marie P.', 'Lucas B.', 'Sophie T.', 'Hugo C.', 'Manon V.'
];

// Generate 10 cards for row 1 and 10 for row 2 to give a good loop feel
const row1 = Array.from({ length: 10 }, (_, i) => ({
  name: names[i % names.length],
  testimonial: sampleTestimonials[i % sampleTestimonials.length],
  avatar: `https://i.pravatar.cc/200?u=row1${i}`
}));

const row2 = Array.from({ length: 10 }, (_, i) => ({
  name: names[(i + 5) % names.length], // Shift names logic
  testimonial: sampleTestimonials[(i + 5) % sampleTestimonials.length],
  avatar: `https://i.pravatar.cc/200?u=row2${i}`
}));

function TestimonialCard({ name, avatar, text }: { name: string, avatar: string, text: string }) {
  return (
    <div className="w-[300px] sm:w-[350px] shrink-0 p-6 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl flex flex-col gap-4 mx-3 hover:bg-gray-800/80 transition-colors duration-300">
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed flex-1">"{text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover border-2 border-gray-700" loading="lazy" />
        <div>
          <p className="font-bold text-gray-100 flex items-center gap-1.5">
            {name}
            <CheckCircle className="w-3.5 h-3.5 text-brand-400" />
          </p>
          <p className="text-xs text-gray-500">Membre Vérifié</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 border-y border-gray-900 bg-gray-950 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-brand-400 text-sm font-display font-medium tracking-widest uppercase mb-3 text-center">
            Témoignages
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4 text-center">
            Ceux qui l'ont fait.
          </h3>
          <p className="mt-2 text-base sm:text-lg font-display text-gray-400 mx-auto max-w-2xl text-center">
            Rejoignez plus de <span className="font-semibold text-white">300+ membres</span> qui ont transformé leur boutique en ligne de façon concrète.
          </p>
        </motion.div>
      </div>

      <div className="relative font-display">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
        
        {/* Row 1 - Left */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] mb-6">
          <div className="flex min-w-full">
            {row1.map((item, i) => <TestimonialCard key={`r1-a-${i}`} name={item.name} text={item.testimonial} avatar={item.avatar} />)}
          </div>
          <div className="flex min-w-full" aria-hidden="true">
            {row1.map((item, i) => <TestimonialCard key={`r1-b-${i}`} name={item.name} text={item.testimonial} avatar={item.avatar} />)}
          </div>
        </div>

        {/* Row 2 - Right */}
        <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused]" style={{ animationDuration: '45s' }}>
          <div className="flex min-w-full">
            {row2.map((item, i) => <TestimonialCard key={`r2-a-${i}`} name={item.name} text={item.testimonial} avatar={item.avatar} />)}
          </div>
          <div className="flex min-w-full" aria-hidden="true">
            {row2.map((item, i) => <TestimonialCard key={`r2-b-${i}`} name={item.name} text={item.testimonial} avatar={item.avatar} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
