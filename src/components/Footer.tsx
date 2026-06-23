import { Store, Youtube, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-900 bg-gray-950/50 mt-16 lg:mt-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-gray-900 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Store className="w-5 h-5 text-brand-400" />
              <span className="font-display font-bold text-xl text-gray-100">Xpress E-com</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              La formation de référence par Marcus Lawrence. Apprenez à construire et scaler des business e-commerce rentables et pérennes.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.youtube.com/channel/UClAgJK-XLuUsjVsqw1eQyLQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">Liens Utiles</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Connexion Membre</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Le Programme</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Témoignages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">Légal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Politique de Confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear} Xpress E-com. Tous droits réservés. Les résultats présentés ne sont pas garantis et dépentent de votre investissement personnel.
          </p>
          <p>
            Marcus Lawrence &bull; E-commerce & Dropshipping
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
