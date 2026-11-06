import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export type ActivePage = 'home' | 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer' | 'guides';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: ActivePage, sectionId?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);

    if (page === 'home' && sectionId && onScrollToSection) {
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            {/* Logo Mark */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition duration-200">
              <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" opacity="0.6"/>
                <path d="M12 7V17M12 17L8 13M12 17L16 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Logo Text & Tagline */}
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition">
                Opti<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Press</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-tight">
                Compress Smarter. Save More.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                activePage === 'home'
                  ? 'text-blue-600 bg-blue-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Compressor
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'how-it-works')}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              How It Works
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'benefits')}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              Benefits
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'faq')}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
            >
              FAQ
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('guides')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                activePage === 'guides'
                  ? 'text-blue-600 bg-blue-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Guides
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                activePage === 'about'
                  ? 'text-blue-600 bg-blue-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                activePage === 'contact'
                  ? 'text-blue-600 bg-blue-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Right Header Badges & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% In-Browser Privacy</span>
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'compressor-tool')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg transition active:scale-95"
            >
              Compress Images
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
              activePage === 'home' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Compressor
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('home', 'how-it-works')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            How It Works
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('home', 'benefits')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Benefits
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('home', 'faq')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            FAQ
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('guides')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
              activePage === 'guides' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Guides & Resources
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
              activePage === 'about' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            About Us
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
              activePage === 'contact' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Contact Us
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('privacy')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
              activePage === 'privacy' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('terms')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
              activePage === 'terms' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Terms of Use
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('disclaimer')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
              activePage === 'disclaimer' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Disclaimer
          </button>
        </div>
      )}
    </header>
  );
};
