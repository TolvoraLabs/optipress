import React from 'react';
import { ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { ActivePage } from './Navbar';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (page: ActivePage, sectionId?: string) => {
    onNavigate(page);
    if (page === 'home' && sectionId && onScrollToSection) {
      setTimeout(() => onScrollToSection(sectionId), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" opacity="0.6"/>
                  <path d="M12 7V17M12 17L8 13M12 17L16 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Opti<span className="text-blue-400">Press</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              <strong className="text-slate-200">OptiPress: Compress Smarter. Save More.</strong> A free, modern online image compression tool that reduces JPG, PNG, and WebP files directly in your web browser.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-xl px-3 py-1.5 w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>100% In-Browser Canvas Processing</span>
            </div>
          </div>

          {/* Col 2: Compressor Tools */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Image Compressor</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('home', 'compressor-tool')}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Compress Images
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('home', 'how-it-works')}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  How Compression Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('home', 'benefits')}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  Benefits & Features
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('home', 'faq')}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Information Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">About & Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('about')}
                  className="hover:text-white transition flex items-center gap-1.5 font-medium"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('contact')}
                  className="hover:text-white transition flex items-center gap-1.5 font-medium"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  Contact Us
                </button>
              </li>
            </ul>
            <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
              OptiPress is a free, web-native utility created to provide private image compression without account walls or fees.
            </p>
          </div>

          {/* Col 4: Legal & Privacy Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Privacy & Terms</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('privacy')}
                  className="hover:text-white transition flex items-center gap-1.5 font-medium"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('terms')}
                  className="hover:text-white transition flex items-center gap-1.5 font-medium"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                  Terms of Use
                </button>
              </li>
            </ul>
            <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
              Transparent, honest policies accurately reflecting our client-side, zero-tracking web architecture.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {currentYear} OptiPress. Free online image compressor. Accessible worldwide, including India.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-blue-400" /> Global Data Saver
            </span>
            <span>•</span>
            <span>No Cookies or Trackers</span>
            <span>•</span>
            <span>Client-Side Execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
