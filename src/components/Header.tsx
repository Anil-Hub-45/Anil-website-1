import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, ArrowRight } from 'lucide-react';
import { SageLeaf } from './BotanicalIllustrations.tsx';

interface HeaderProps {
  onPlanVisit: () => void;
  onOpenKokapetModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onPlanVisit, onOpenKokapetModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'The Space', href: '#space' },
    { label: 'Locations', href: '#locations' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F0E5]/95 backdrop-blur-md shadow-xs border-b border-[#234735]/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-[#234735] group whitespace-nowrap shrink-0"
              aria-label="SAGE Farm Cafe Home"
            >
              <SageLeaf className="w-6 h-6 text-[#234735] transition-transform duration-300 group-hover:rotate-12" />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl sm:text-2xl font-bold tracking-wider text-[#234735]">
                  SAGE
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#858F65] font-semibold">
                  Farm Cafe
                </span>
              </div>
              <span className="hidden sm:inline-block text-xs font-telugu text-[#858F65] font-normal pl-1 border-l border-[#234735]/15 ml-1">
                సేజ్ ఫార్మ్ కేఫ్
              </span>
            </a>

            {/* Zone 2: Navigation Links (Clean single line typography) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#252A24]/85">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#234735] transition-colors whitespace-nowrap shrink-0 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#234735] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <button
                type="button"
                onClick={onOpenKokapetModal}
                className="inline-flex items-center gap-1.5 text-xs text-[#C77B52] font-semibold hover:text-[#B06740] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C77B52]" />
                Kokapet Preview
              </button>
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onPlanVisit}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#234735] hover:bg-[#18382B] rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Plan Your Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#234735] hover:bg-[#234735]/5 rounded-lg transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#F5F0E5] flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-[#234735]/10 pb-4">
            <div className="flex items-center gap-2">
              <SageLeaf className="w-6 h-6 text-[#234735]" />
              <span className="font-serif text-xl font-bold text-[#234735]">SAGE Farm Cafe</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#234735] hover:bg-[#234735]/10 rounded-full"
              aria-label="Close Navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#234735] hover:text-[#C77B52] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenKokapetModal();
              }}
              className="flex items-center gap-2 text-left text-sm font-medium text-[#C77B52]"
            >
              <MapPin className="w-4 h-4 text-[#C77B52]" />
              <span>Sage Kokapet (Launch Updates)</span>
            </button>
          </nav>

          <div className="space-y-4 pt-6 border-t border-[#234735]/10">
            <div className="text-xs text-[#77786E]">
              <p className="font-semibold text-[#252A24]">Jubilee Hills, Hyderabad</p>
              <p>Road 62A · 8:00 AM – 10:30 PM (Tue–Sun)</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onPlanVisit();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs uppercase tracking-widest font-semibold text-white bg-[#234735] rounded-full hover:bg-[#18382B]"
            >
              <span>Plan Your Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
