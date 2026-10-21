import React from 'react';
import { ArrowDown, Navigation, ArrowRight } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData.ts';
import { SageLeaf, CitrusSlice } from './BotanicalIllustrations.tsx';

interface VisitCTAProps {
  onPlanVisit: () => void;
}

export const VisitCTA: React.FC<VisitCTAProps> = ({ onPlanVisit }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F0] border-t border-[#234735]/10 relative overflow-hidden text-center">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#858F65]/20 pointer-events-none">
        <CitrusSlice className="w-40 h-40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <SageLeaf className="w-6 h-6 text-[#234735]" />
          <span className="text-xs uppercase font-sans tracking-[0.24em] font-semibold text-[#858F65]">
            Table Awaits
          </span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl text-[#234735] font-normal leading-[1.1] mb-6">
          Make a little room <br />
          <span className="italic text-[#C77B52]">for good things.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#252A24]/80 max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          Come for a coffee, stay for something delicious. Whether solo with a notebook or gathered with your favorite people, find your seat at SAGE.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#234735] hover:bg-[#18382B] rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Explore Menu</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href={CAFE_DETAILS.locations.jubileeHills.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#234735] bg-[#F5F0E5] hover:bg-white border border-[#234735]/20 rounded-full transition-all shadow-xs cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 text-[#858F65]" />
            <span>Get Directions</span>
          </a>

          <button
            type="button"
            onClick={onPlanVisit}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#234735] bg-[#C9D3B8]/30 hover:bg-[#C9D3B8]/50 border border-[#234735]/20 rounded-full transition-all cursor-pointer"
          >
            <span>Plan Your Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
