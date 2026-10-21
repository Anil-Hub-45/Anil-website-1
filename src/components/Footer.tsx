import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ArrowUp } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData.ts';
import { SageLeaf, BotanicalEngraving } from './BotanicalIllustrations.tsx';

interface FooterProps {
  onPlanVisit: () => void;
  onOpenKokapetModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPlanVisit, onOpenKokapetModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18382B] text-[#FAF7F0] relative overflow-hidden pt-20 pb-12 border-t border-[#234735]">
      {/* Large delicate botanical engraving on the right */}
      <div className="absolute right-0 bottom-0 text-[#C9D3B8] pointer-events-none translate-x-20 translate-y-16 hidden lg:block">
        <BotanicalEngraving className="w-[500px] h-[500px]" opacity={0.12} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <SageLeaf className="w-8 h-8 text-[#C9D3B8]" />
              <div>
                <span className="font-serif text-3xl font-bold tracking-wider text-white block">
                  SAGE
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9D3B8] font-semibold">
                  Farm Cafe · Jubilee Hills
                </span>
              </div>
            </div>

            <p className="font-telugu text-lg text-[#C9D3B8] font-normal">
              సేజ్ ఫార్మ్ కేఫ్
            </p>

            <p className="text-sm text-[#FAF7F0]/80 max-w-sm leading-relaxed font-normal">
              Good food. Grown from a greener point of view. A botanical cafe and gathering table for Hyderabad.
            </p>

            <div className="pt-2 text-xs text-[#FAF7F0]/60 space-y-1">
              <p>Indicative spend: ₹400 – ₹1,200 per guest</p>
              <p>Rated 4.3 / 5 from ~920 verified guest reviews</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-sans tracking-[0.24em] font-semibold text-[#C9D3B8]">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-[#FAF7F0]/80">
              <li>
                <a href="#story" className="hover:text-white transition-colors">Our Story & Ethos</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Signature Offerings</a>
              </li>
              <li>
                <a href="#space" className="hover:text-white transition-colors">The Botanical Space</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">Jubilee Hills Flagship</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenKokapetModal}
                  className="text-[#C77B52] hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Kokapet (Now Expanding)</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-sans tracking-[0.24em] font-semibold text-[#C9D3B8]">
              Sanctuary Details
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF7F0]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9D3B8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">1227, Road Number 62A</p>
                  <p>Jubilee Hills, Hyderabad, Telangana 500033</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C9D3B8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Tuesday – Sunday</p>
                  <p>8:00 AM – 10:30 PM (Mondays Closed)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C9D3B8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Inquiries & Desk</p>
                  <a href={`tel:${CAFE_DETAILS.locations.jubileeHills.phone}`} className="hover:text-[#C77B52] transition-colors">
                    {CAFE_DETAILS.locations.jubileeHills.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CAFE_DETAILS.locations.jubileeHills.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9D3B8] hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F0]/60">
          <p>© 2026 SAGE Farm Cafe (సేజ్ ఫార్మ్ కేఫ్). All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#FAF7F0]/50">
              Farm-to-Table Hospitality · Hyderabad
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#C9D3B8] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
