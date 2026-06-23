import { Youtube, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

const links = {
  programme: [
    { label: 'Le Programme', href: '#programme' },
    { label: 'Résultats élèves', href: '#resultats' },
    { label: 'Marcus Lawrence', href: '#marcus' },
    { label: 'Témoignages', href: '#' },
  ],
  legal: [
    { label: 'CGV', href: '#' },
    { label: 'Mentions légales', href: '#' },
    { label: 'Confidentialité', href: '#' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden mt-16 lg:mt-24">
      {/* Gradient separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(79,123,255,0.3) 30%, rgba(139,92,246,0.2) 70%, transparent 100%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                style={{ background: 'linear-gradient(135deg, #4F7BFF, #8b5cf6)', boxShadow: '0 0 12px rgba(79,123,255,0.3)' }}
              >
                <span
                  className="font-display font-extrabold text-white leading-none select-none"
                  style={{ fontSize: '0.85rem', letterSpacing: '-0.03em' }}
                >
                  XE
                </span>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">Xpress E-com</span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#6B7280' }}>
              La formation de référence par Marcus Lawrence. Construisez et scalez des business e-commerce rentables et pérennes.
            </p>

            <div className="flex items-center gap-4 mt-6">
              {[
                { href: 'https://www.youtube.com/channel/UClAgJK-XLuUsjVsqw1eQyLQ', icon: Youtube },
                { href: '#', icon: Instagram },
                { href: '#', icon: Twitter },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#6B7280' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F0F2F7'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programme links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: '#F0F2F7' }}>
              Programme
            </h4>
            <ul className="space-y-3">
              {links.programme.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors duration-200" style={{ color: '#6B7280' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B9FFF'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280'; }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: '#F0F2F7' }}>
              Légal
            </h4>
            <ul className="space-y-3">
              {links.legal.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors duration-200" style={{ color: '#6B7280' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B9FFF'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280'; }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: '#4B5563' }}>
          <p>
            &copy; {year} Xpress E-com. Tous droits réservés. Les résultats présentés ne sont pas garantis.
          </p>
          <p>Marcus Lawrence · E-commerce & Dropshipping</p>
        </div>
      </motion.div>
    </footer>
  );
}
