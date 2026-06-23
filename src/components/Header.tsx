import { useState } from 'react';
import { Store, Youtube, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header({ onJoin }: { onJoin?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-4xl relative pointer-events-auto">
        <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-full shadow-2xl relative z-20">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-brand-500/10 rounded-lg border border-brand-500/20">
                <Store className="w-5 h-5 text-brand-400" />
              </div>
              <span className="font-display font-bold text-xl text-gray-100 tracking-tight">Xpress E-com</span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <a href="#programme" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Le Programme</a>
              <a href="#marcus" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Marcus Lawrence</a>
              <a href="https://youtube.com/@marcuslawrence" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors ml-2">
                <Youtube className="w-5 h-5" />
              </a>
              <button 
                onClick={onJoin}
                className="px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Accès Membre
              </button>
            </div>
            <div className="flex sm:hidden items-center gap-3">
              <a href="https://youtube.com/@marcuslawrence" target="_blank" rel="noopener noreferrer" className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 text-gray-300 hover:text-white transition-colors focus:outline-none rounded-full bg-gray-800/50 border border-gray-700/50"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-3 p-5 bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl flex flex-col gap-4 sm:hidden z-10 origin-top"
            >
              <a href="#programme" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-300 hover:text-white transition-colors px-2 py-1">Le Programme</a>
              <a href="#marcus" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-300 hover:text-white transition-colors px-2 py-1">Marcus Lawrence</a>
              <div className="pt-4 mt-2 border-t border-gray-800">
                <button 
                  onClick={() => { setIsOpen(false); onJoin?.(); }}
                  className="w-full px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 rounded-full bg-brand-500 hover:bg-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
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
