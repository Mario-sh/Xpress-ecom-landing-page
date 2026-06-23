import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header({ onJoin }: { onJoin?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-4xl relative pointer-events-auto">
        {/* Glowing border effect */}
        <div className="absolute -inset-px rounded-full bg-gradient-to-r from-brand-500/20 via-accent-500/10 to-brand-500/20 blur-sm opacity-60" />

        <div className="relative bg-gray-950/80 backdrop-blur-xl border border-white/[0.06] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-20">
          <div className="flex items-center justify-between h-[60px] px-4 sm:px-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              {/* XE monogram */}
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #4F7BFF, #8b5cf6)',
                  boxShadow: '0 0 14px rgba(79,123,255,0.35)',
                }}
              >
                <span
                  className="font-display font-extrabold text-white leading-none select-none"
                  style={{ fontSize: '0.85rem', letterSpacing: '-0.03em' }}
                >
                  XE
                </span>
              </div>
              <span className="font-display font-bold text-[1.1rem] text-white tracking-tight">
                Xpress E-com
              </span>
            </div>

            {/* Nav links — desktop */}
            <nav className="hidden sm:flex items-center gap-7">
              <a href="#programme" className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 tracking-wide">
                Programme
              </a>
              <a href="#resultats" className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 tracking-wide">
                Résultats
              </a>
              <a href="#marcus" className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 tracking-wide">
                Marcus
              </a>
            </nav>

            {/* CTA — desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onJoin}
                className="relative px-5 py-2 text-sm font-semibold text-white rounded-full bg-brand-500 hover:bg-brand-400 transition-all duration-200 shadow-[0_0_0_0_rgba(79,123,255,0.4)] hover:shadow-[0_0_0_6px_rgba(79,123,255,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                Accès Membre
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex sm:hidden items-center justify-center w-9 h-9 rounded-full text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/10 focus:outline-none"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 mt-3 p-5 bg-gray-950/95 backdrop-blur-xl border border-white/[0.06] rounded-3xl shadow-2xl flex flex-col gap-1 sm:hidden z-10"
            >
              {[
                { href: '#programme', label: 'Programme' },
                { href: '#resultats', label: 'Résultats' },
                { href: '#marcus', label: 'Marcus Lawrence' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/[0.06]">
                <button
                  onClick={() => { setIsOpen(false); onJoin?.(); }}
                  className="w-full px-5 py-3 text-sm font-semibold text-white rounded-2xl bg-brand-500 hover:bg-brand-400 transition-colors duration-200 focus:outline-none"
                >
                  Accès Membre
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
