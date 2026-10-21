import React from 'react';
import { HerbStem, TomatoBranch, SeedPod } from './BotanicalIllustrations.tsx';
import { CAFE_IMAGES } from '../assets/images/index.ts';
import { SafeImage } from './SafeImage.tsx';

export const BrandIntroduction: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#FAF7F0] relative overflow-hidden border-y border-[#234735]/10">
      {/* Decorative botanical element drifting on the margin */}
      <div className="absolute -left-6 top-1/3 text-[#858F65]/50 pointer-events-none animate-sway-delayed hidden md:block">
        <HerbStem className="w-24 h-48" />
      </div>
      <div className="absolute right-4 bottom-8 text-[#234735]/30 pointer-events-none hidden lg:block">
        <SeedPod className="w-16 h-28" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative and Brand Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#858F65]" />
              <span className="text-xs uppercase font-sans tracking-[0.24em] font-semibold text-[#858F65]">
                A Different Kind of Everyday
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl text-[#234735] font-normal leading-[1.15] text-balance">
              Food that brings us a little closer to nature.
            </h2>

            <p className="text-base sm:text-lg text-[#252A24]/85 leading-relaxed font-normal">
              From nourishing bowls and comforting classics to thoughtfully made coffee and refreshing kombucha, SAGE brings different flavors together in a space made for slowing down, sharing, and savoring.
            </p>

            <div className="space-y-4 pt-4 text-sm text-[#77786E] border-t border-[#234735]/10">
              <p className="leading-relaxed">
                Whether you arrive for an unhurried morning pour-over, a wholesome mid-day grain bowl, or a relaxed evening pizza under the trees, every plate is crafted to celebrate texture, freshness, and the joy of honest company.
              </p>
            </div>

            {/* Handwritten style quote note */}
            <div className="pt-2 flex items-center gap-4">
              <span className="font-serif italic text-2xl text-[#C77B52]">
                "Made to be savored."
              </span>
              <span className="text-xs font-telugu text-[#858F65]">
                ప్రకృతి ఒడిలో ఒక మంచి భోజనం
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Visual with Framing & Botanical Accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Photo Frame */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#234735]/10 bg-white">
                <SafeImage
                  src={CAFE_IMAGES.pumpkinRisotto}
                  fallbackSrc={CAFE_IMAGES.fallbacks.pumpkinRisotto}
                  alt="Creamy Pumpkin Risotto with crispy sage leaves in a speckled ceramic bowl at SAGE Farm Cafe"
                  className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 hover:scale-102"
                  loading="lazy"
                  categoryLabel="Signature Risotto"
                />
              </div>

              {/* Overlapping botanical illustration */}
              <div className="absolute -bottom-6 -left-6 z-10 pointer-events-none">
                <TomatoBranch className="w-20 h-20 text-[#234735] drop-shadow-sm" />
              </div>

              {/* Caption pill */}
              <div className="absolute bottom-4 right-4 bg-[#F5F0E5]/95 backdrop-blur-xs py-2 px-3.5 rounded-lg border border-[#234735]/15 text-xs text-[#234735] shadow-xs">
                <span className="font-semibold">Pumpkin Risotto</span>
                <span className="text-[#858F65] ml-1.5 font-normal">· Crispy Fried Sage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
