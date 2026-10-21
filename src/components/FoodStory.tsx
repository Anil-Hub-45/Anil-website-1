import React from 'react';
import { SageLeaf, CitrusSlice } from './BotanicalIllustrations.tsx';
import { CAFE_IMAGES } from '../assets/images/index.ts';
import { SafeImage } from './SafeImage.tsx';

export const FoodStory: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F0] border-t border-[#234735]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Pair */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#234735]/10 aspect-[4/5] bg-white group">
              <SafeImage
                src={CAFE_IMAGES.gonguraChicken}
                fallbackSrc={CAFE_IMAGES.fallbacks.gonguraChicken}
                alt="Gongura Chicken Bhatura at SAGE Farm Cafe"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                categoryLabel="Heritage Deccan Plate"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#234735]/10 aspect-[4/5] bg-white sm:mt-10 group">
              <SafeImage
                src={CAFE_IMAGES.kombuchaCoffee}
                fallbackSrc={CAFE_IMAGES.fallbacks.kombuchaCoffee}
                alt="Artisanal iced kombucha and cold brew coffee at SAGE Farm Cafe"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                categoryLabel="Probiotic Brew & Cold Sips"
              />
            </div>

            {/* Overlapping botanical accent */}
            <div className="absolute -bottom-8 left-1/3 -translate-x-1/2 z-10 pointer-events-none hidden sm:block">
              <SageLeaf className="w-16 h-16 text-[#234735]/70 drop-shadow-xs" />
            </div>
          </div>

          {/* Right Column: Editorial Essay */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#858F65]" />
              <span className="text-xs uppercase font-sans tracking-[0.24em] font-semibold text-[#858F65]">
                Culinary Craft
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#234735] font-normal leading-[1.14]">
              Fresh perspectives. <br />
              <span className="italic text-[#C77B52]">Familiar comforts.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#252A24]/85 leading-relaxed font-normal">
              From colorful bowls and inventive pizzas to Indian favorites and thoughtfully made drinks, the menu brings a variety of flavors to the same table.
            </p>

            <div className="space-y-4 pt-2 text-sm text-[#77786E] leading-relaxed">
              <p>
                We believe dining should feel uplifting rather than restrictive. A sourdough pizza with fresh basil and roasted garlic sits comfortably alongside a Deccan gongura chicken bhatura or an 18-hour cold brew.
              </p>
              <p>
                Every element honors natural textures, subtle herbs, and genuine hospitality.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#234735]">
              <span>Handcrafted Seasonality</span>
              <span className="text-[#858F65]" aria-hidden="true">·</span>
              <span>Made In Small Batches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
