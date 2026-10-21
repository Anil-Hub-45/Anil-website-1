import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, Info } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/cafeData.ts';
import { SageLeaf, TomatoBranch, SeedPod, CitrusSlice } from './BotanicalIllustrations.tsx';
import { DishDetailModal } from './DishDetailModal.tsx';
import { SafeImage } from './SafeImage.tsx';

interface FeaturedMenuProps {
  onPlanVisit: () => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onPlanVisit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#F5F0E5] relative overflow-hidden">
      {/* Background botanical motifs */}
      <div className="absolute top-12 right-6 text-[#858F65]/20 pointer-events-none hidden lg:block">
        <CitrusSlice className="w-24 h-24" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#858F65]" />
            <span className="text-xs uppercase font-sans tracking-[0.24em] font-semibold text-[#858F65]">
              From Our Table
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#234735] font-normal leading-[1.12] mb-4">
            A taste of the SAGE way.
          </h2>

          <p className="text-base sm:text-lg text-[#252A24]/80 leading-relaxed font-normal">
            Colorful bowls, comforting favorites, fresh sips, and little indulgences. Every dish is composed with care for natural balance and mindful gathering.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#77786E]">
            <Info className="w-3.5 h-3.5 text-[#858F65]" />
            <span>Indicative guest spend: ₹400 – ₹1,200 per person · Seasonal produce</span>
          </div>
        </div>

        {/* Interactive Filter Controls (Functional button elements per design constitution) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#234735] text-white shadow-xs'
                    : 'bg-[#FAF7F0] text-[#252A24]/75 hover:text-[#234735] hover:bg-white border border-[#234735]/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Composition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItemModal(item)}
              className="group bg-[#FAF7F0] rounded-2xl border border-[#234735]/12 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#234735]/25 cursor-pointer relative"
            >
              {/* Optional Dish Image */}
              {item.image && (
                <div className="mb-4 rounded-xl overflow-hidden aspect-[4/3] bg-[#234735]/5 relative">
                  <SafeImage
                    src={item.image}
                    fallbackSrc={item.fallbackImage}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    categoryLabel={item.categoryLabel}
                  />
                  {item.isSignature && (
                    <span className="absolute top-3 left-3 bg-[#18382B]/85 backdrop-blur-xs text-[#FAF7F0] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm">
                      Chef's Signature
                    </span>
                  )}
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#234735] group-hover:text-[#C77B52] transition-colors font-medium">
                    {item.name}
                  </h3>
                  {item.indicativePrice && (
                    <span className="font-sans text-sm font-semibold text-[#234735] tabular-nums shrink-0">
                      {item.indicativePrice}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#252A24]/75 leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom metadata tags */}
              <div className="pt-3 border-t border-[#234735]/10 flex items-center justify-between text-xs text-[#77786E]">
                <div className="flex items-center gap-2 flex-wrap">
                  {item.dietary?.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[#858F65] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#234735] group-hover:translate-x-1 transition-transform">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu Invitation Bar */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAF7F0] rounded-2xl border border-[#234735]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <SageLeaf className="w-10 h-10 text-[#234735] shrink-0" />
            <div>
              <p className="font-serif text-xl sm:text-2xl text-[#234735]">
                Craving something specific?
              </p>
              <p className="text-xs sm:text-sm text-[#77786E] mt-0.5">
                Our kitchen also serves daily seasonal specials, cold-pressed elixirs, and sourdough bakes at Jubilee Hills.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onPlanVisit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#234735] hover:bg-[#18382B] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            <span>Plan Your Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Dish Detail Dialog */}
      <DishDetailModal
        item={activeItemModal}
        onClose={() => setActiveItemModal(null)}
        onPlanVisit={onPlanVisit}
      />
    </section>
  );
};
