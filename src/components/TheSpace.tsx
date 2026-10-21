import React from 'react';
import { Sun, Coffee, Users, Leaf, ArrowRight } from 'lucide-react';
import { CAFE_IMAGES } from '../assets/images/index.ts';
import { SafeImage } from './SafeImage.tsx';

interface TheSpaceProps {
  onPlanVisit: () => void;
}

export const TheSpace: React.FC<TheSpaceProps> = ({ onPlanVisit }) => {
  return (
    <section id="space" className="py-20 sm:py-28 bg-[#F5F0E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#858F65]" />
            <span className="text-xs uppercase font-sans tracking-[0.24em] font-semibold text-[#858F65]">
              Come As You Are
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#234735] font-normal leading-[1.14] mb-4">
            A space to pause, connect, and stay awhile.
          </h2>

          <p className="text-base sm:text-lg text-[#252A24]/85 leading-relaxed font-normal">
            Whether it’s a slow coffee, a nourishing lunch, or a long conversation over good food, find your own pace at SAGE.
          </p>
        </div>

        {/* Gallery Architecture: Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Main Large Visual */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-lg border border-[#234735]/12 relative bg-[#FAF7F0] group min-h-[380px] sm:min-h-[480px]">
            <SafeImage
              src={CAFE_IMAGES.spaceInterior}
              fallbackSrc={CAFE_IMAGES.fallbacks.spaceInterior}
              alt="Lush botanical cafe interior of SAGE Farm Cafe with sunlit windows and wooden tables"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
              categoryLabel="Botanical Sanctuary"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9D3B8]">
                  Sunlit Courtyard & Dining Room
                </p>
                <p className="font-serif text-xl sm:text-2xl mt-1">
                  Airy botanical sanctuary in the heart of Jubilee Hills
                </p>
              </div>
              <span className="text-xs text-white/80 shrink-0">Road No. 62A</span>
            </div>
          </div>

          {/* Side Cards: Atmosphere & Micro Moments */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="p-6 sm:p-8 bg-[#FAF7F0] rounded-2xl border border-[#234735]/12 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#C9D3B8]/30 flex items-center justify-center text-[#234735]">
                  <Sun className="w-5 h-5 text-[#234735]" />
                </div>
                <h3 className="font-serif text-2xl text-[#234735] font-normal">
                  Natural Daylight & Verdant Leaves
                </h3>
                <p className="text-sm text-[#77786E] leading-relaxed">
                  Tall windows and trailing botanicals bring natural rhythm into our dining room. A tranquil retreat from the city rush.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#234735]/10 flex items-center gap-2 text-xs text-[#858F65] font-medium">
                <Leaf className="w-3.5 h-3.5" />
                <span>Indoor & Shaded Veranda Seating</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-[#18382B] text-[#FAF7F0] rounded-2xl border border-[#18382B] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C9D3B8]">
                  <Coffee className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-white font-normal">
                  Gather Around Slow Moments
                </h3>
                <p className="text-sm text-[#FAF7F0]/80 leading-relaxed">
                  Whether remote working with a pour-over or sharing bhatura with family, our tables welcome laughter and lingering.
                </p>
              </div>
              <button
                type="button"
                onClick={onPlanVisit}
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C9D3B8] hover:text-white transition-colors cursor-pointer group"
              >
                <span>Reserve or Drop In</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
