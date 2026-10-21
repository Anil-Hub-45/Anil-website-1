import React from 'react';
import { X, Sparkles, MapPin, Phone, Info } from 'lucide-react';
import { MenuItem, CAFE_DETAILS } from '../data/cafeData.ts';
import { SageLeaf, CitrusSlice } from './BotanicalIllustrations.tsx';
import { SafeImage } from './SafeImage.tsx';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onPlanVisit: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  onClose,
  onPlanVisit,
}) => {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF7F0] rounded-2xl shadow-2xl border border-[#234735]/15 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#F5F0E5]/80 hover:bg-[#F5F0E5] text-[#234735] rounded-full transition-colors cursor-pointer shadow-xs"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header / Optional Image */}
        {item.image ? (
          <div className="relative h-60 w-full overflow-hidden bg-[#234735]/10 shrink-0">
            <SafeImage
              src={item.image}
              fallbackSrc={item.fallbackImage}
              alt={item.name}
              className="w-full h-full object-cover"
              categoryLabel={item.categoryLabel}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F0] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#858F65] bg-[#FAF7F0]/90 px-2.5 py-1 rounded-sm">
                {item.categoryLabel}
              </span>
            </div>
          </div>
        ) : (
          <div className="pt-8 px-6 flex items-center justify-between border-b border-[#234735]/10 pb-4 shrink-0">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#858F65]">
              {item.categoryLabel}
            </span>
            <SageLeaf className="w-6 h-6 text-[#234735]/40" />
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id="dish-modal-title" className="font-serif text-2xl sm:text-3xl text-[#234735] font-normal">
                {item.name}
              </h3>
              {item.highlightNote && (
                <p className="text-xs text-[#858F65] italic font-serif mt-1">
                  {item.highlightNote}
                </p>
              )}
            </div>
            {item.indicativePrice && (
              <div className="text-right shrink-0">
                <span className="font-sans font-semibold text-lg text-[#234735] tabular-nums">
                  {item.indicativePrice}
                </span>
                <span className="block text-[10px] text-[#77786E]">Indicative price</span>
              </div>
            )}
          </div>

          <p className="text-sm sm:text-base text-[#252A24]/85 leading-relaxed font-normal">
            {item.description}
          </p>

          {/* Dietary Indicators */}
          {item.dietary && item.dietary.length > 0 && (
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#77786E] block mb-2">
                Dietary & Preparation
              </span>
              <div className="flex flex-wrap gap-2">
                {item.dietary.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#234735] bg-[#C9D3B8]/30 px-3 py-1 rounded-md border border-[#234735]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Serving Information */}
          <div className="p-3.5 bg-[#F5F0E5] rounded-xl border border-[#234735]/10 text-xs text-[#77786E] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#858F65] shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-[#252A24]">Served Fresh at Jubilee Hills</p>
              <p className="mt-0.5">
                Available for dine-in and kerbside pickup. Indicative cafe spend is ₹400–₹1,200 per guest.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-[#F5F0E5] border-t border-[#234735]/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <a
            href={CAFE_DETAILS.locations.jubileeHills.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#234735] hover:text-[#C77B52] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Find in Jubilee Hills</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onPlanVisit();
              }}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#234735] hover:bg-[#18382B] rounded-full transition-colors cursor-pointer"
            >
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
