import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Star } from 'lucide-react';
import { SageLeaf, StampBadge } from './BotanicalIllustrations.tsx';
import { CAFE_IMAGES } from '../assets/images/index.ts';
import { SafeImage } from './SafeImage.tsx';

interface HeroSectionProps {
  onPlanVisit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlanVisit }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background organic contour accents */}
      <div className="absolute top-10 right-0 -z-10 w-96 h-96 rounded-full bg-[#C9D3B8]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 rounded-full bg-[#C77B52]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Sub-label kicker */}
            <div className="inline-flex items-center gap-2 mb-4 text-[#858F65]">
              <span className="text-xs uppercase font-sans tracking-[0.22em] font-semibold">
                Jubilee Hills · Hyderabad
              </span>
              <span className="text-[#858F65]/40" aria-hidden="true">·</span>
              <span className="font-telugu text-xs text-[#234735]/80 font-medium">సేజ్ ఫార్మ్ కేఫ్</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] text-[#234735] font-normal leading-[1.08] tracking-tight text-balance mb-6">
              Rooted in nature. <br />
              <span className="italic font-serif text-[#C77B52] font-normal">
                Made for the table.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#252A24]/80 max-w-xl leading-relaxed mb-8 font-normal">
              Thoughtfully made food, vibrant flavors, and a greener kind of gathering. From nourishing bowls and fermented sips to comforting classics, find your natural pace at SAGE.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#234735] hover:bg-[#18382B] rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Explore the Menu</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={onPlanVisit}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#234735] bg-[#C9D3B8]/30 hover:bg-[#C9D3B8]/50 border border-[#234735]/20 rounded-full transition-all duration-200 cursor-pointer"
              >
                <span>Plan Your Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Metadata Proof Strip (Adjacency principle) */}
            <div className="pt-6 border-t border-[#234735]/15 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#77786E]">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-[#C77B52] text-[#C77B52]" />
                <span className="font-semibold text-[#252A24] tabular-nums">4.3 / 5</span>
                <span>(920+ Google reviews)</span>
              </div>
              <span className="hidden sm:inline text-[#234735]/25" aria-hidden="true">·</span>
              <div>
                <span className="text-[#252A24] font-medium">Indicative Spend:</span>{' '}
                <span className="tabular-nums">₹400 – ₹1,200</span> / person
              </div>
              <span className="hidden sm:inline text-[#234735]/25" aria-hidden="true">·</span>
              <div className="text-[#858F65] font-medium">
                Dine-in · Kerbside Pickup · Delivery
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Botanical Elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Frame Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/11] border border-[#234735]/10 bg-[#FAF7F0]">
                <SafeImage
                  src={CAFE_IMAGES.heroTable}
                  fallbackSrc={CAFE_IMAGES.fallbacks.heroTable}
                  alt="Farm-to-table lunch spread at SAGE Farm Cafe with fresh greens, sourdough pizza and vibrant seasonal grain bowl"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  categoryLabel="Farm-to-Table Gathering"
                />
                {/* Subtle gradient vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/95 text-xs backdrop-blur-xs bg-[#18382B]/60 py-2 px-3 rounded-lg border border-white/10">
                  <span className="font-medium tracking-wide">Seasonal Bowls & Hearth Sourdough</span>
                  <span className="text-[11px] text-[#C9D3B8]">Jubilee Hills Garden</span>
                </div>
              </div>

              {/* Overlapping botanical leaf accent */}
              <div className="absolute -top-6 -left-6 z-10 pointer-events-none animate-sway">
                <SageLeaf className="w-16 h-16 text-[#234735] drop-shadow-sm" />
              </div>

              {/* Rotating Circular Stamp Badge */}
              <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 z-20 pointer-events-none">
                <StampBadge className="w-28 h-28 sm:w-32 sm:h-32 bg-[#FAF7F0] rounded-full shadow-lg border border-[#234735]/10 p-1" rotating />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
