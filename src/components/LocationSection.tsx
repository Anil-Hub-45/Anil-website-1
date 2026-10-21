import React from 'react';
import { MapPin, Navigation, Clock, Phone, Check, ExternalLink, Sparkles, Car } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData.ts';
import { SageLeaf, CitrusSlice } from './BotanicalIllustrations.tsx';

interface LocationSectionProps {
  onPlanVisit: () => void;
  onOpenKokapetModal: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  onPlanVisit,
  onOpenKokapetModal,
}) => {
  const jh = CAFE_DETAILS.locations.jubileeHills;

  return (
    <section id="locations" className="py-20 sm:py-28 bg-[#F5F0E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#858F65]" />
            <span className="text-xs uppercase font-sans tracking-[0.24em] font-semibold text-[#858F65]">
              Find Your Sanctuary
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#234735] font-normal leading-[1.12] mb-4">
            Your next little escape.
          </h2>

          <p className="text-base sm:text-lg text-[#252A24]/80 leading-relaxed font-normal">
            Tucked along Jubilee Hills' leafy lanes, SAGE is designed as a calm respite for slow mornings, leisurely luncheons, and intimate garden dinners.
          </p>
        </div>

        {/* Location Grid: Primary Jubilee Hills & Kokapet Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Primary Location: Jubilee Hills */}
          <div className="lg:col-span-7 bg-[#FAF7F0] rounded-2xl border border-[#234735]/15 p-6 sm:p-8 sm:py-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#234735] text-white flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#FAF7F0]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#858F65]">
                      Primary Flagship
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#234735]">
                      Jubilee Hills
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs text-[#234735] font-medium bg-[#C9D3B8]/30 px-3 py-1 rounded-full border border-[#234735]/10">
                  <span className="w-2 h-2 rounded-full bg-[#234735]" />
                  Open Now
                </span>
              </div>

              {/* Verified Address */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#858F65] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-[#252A24]">
                      {jh.address}
                    </p>
                    <p className="text-xs sm:text-sm text-[#77786E]">
                      {jh.city}
                    </p>
                    <p className="text-xs text-[#858F65] mt-1 font-medium">
                      {jh.notes}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#858F65] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#252A24]">Hours of Gathering</p>
                    <p className="text-xs sm:text-sm text-[#77786E]">{jh.hours}</p>
                    <p className="text-xs text-[#77786E]">Kitchen closes at 10:00 PM</p>
                  </div>
                </div>

                {/* Phone & Inquiries */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#858F65] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#252A24]">Cafe Desk & Enquiries</p>
                    <a
                      href={`tel:${jh.phone}`}
                      className="text-xs sm:text-sm text-[#234735] hover:text-[#C77B52] font-medium transition-colors"
                    >
                      {jh.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Dining Modes */}
              <div className="pt-6 border-t border-[#234735]/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CAFE_DETAILS.diningModes.map((mode) => (
                  <div key={mode.title} className="p-3 bg-white rounded-xl border border-[#234735]/10">
                    <p className="text-xs font-semibold text-[#234735] flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#858F65]" />
                      {mode.title}
                    </p>
                    <p className="text-[11px] text-[#77786E] mt-1 leading-normal">
                      {mode.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-8 mt-8 border-t border-[#234735]/10 flex flex-wrap items-center gap-4">
              <a
                href={jh.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#234735] hover:bg-[#18382B] rounded-full transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Google Maps Directions</span>
              </a>

              <button
                type="button"
                onClick={onPlanVisit}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#234735] bg-white hover:bg-[#FAF7F0] border border-[#234735]/20 rounded-full transition-colors cursor-pointer"
              >
                <span>Plan Visit / Inquiry</span>
              </button>
            </div>
          </div>

          {/* Kokapet Card & Aesthetic Map / Environment visual */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Kokapet Announcement Card */}
            <div className="p-6 sm:p-8 bg-[#18382B] text-[#FAF7F0] rounded-2xl border border-[#18382B] relative overflow-hidden flex flex-col justify-between shadow-md">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <CitrusSlice className="w-32 h-32 text-white" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 mb-3 bg-[#FAF7F0]/10 px-3 py-1 rounded-full text-xs text-[#C9D3B8]">
                  <Sparkles className="w-3 h-3 text-[#C77B52]" />
                  <span>Now In Kokapet</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">
                  Sage is Expanding to Kokapet
                </h3>

                <p className="text-xs sm:text-sm text-[#FAF7F0]/80 leading-relaxed mb-4">
                  We are preparing a new botanical sanctuary in Kokapet. Final street coordinates, launch calendar, and table reservations will be officially announced prior to opening.
                </p>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-[#C9D3B8]">
                  <span>Status: Previewing site & landscape design. Address details pending publication.</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#FAF7F0]/70">Kokapet, Hyderabad</span>
                <button
                  type="button"
                  onClick={onOpenKokapetModal}
                  className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-[#C77B52] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Get Launch Notice</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Travel / Kerbside Convenience Card */}
            <div className="p-6 sm:p-8 bg-[#FAF7F0] rounded-2xl border border-[#234735]/12 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#C9D3B8]/30 flex items-center justify-center text-[#234735]">
                  <Car className="w-4 h-4 text-[#234735]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#234735]">
                    Valet & Kerbside Hospitality
                  </h4>
                  <p className="text-xs text-[#77786E]">Convenient access on Road No. 62A</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#252A24]/75 leading-relaxed">
                Enjoy seamless arrivals with complimentary valet on weekends. For busy mornings, phone ahead for our kerbside hand-off straight to your vehicle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
