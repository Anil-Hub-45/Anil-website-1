import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData.ts';

export const ReviewsSection: React.FC = () => {
  const verifiedReviews = [
    {
      author: 'Ananya S.',
      context: 'Local Guide · Hyderabad',
      text: 'The Gongura Chicken Bhatura is exceptional—authentic tangy kick paired with such light, fluffy bhaturas. Sitting in the plant-filled veranda with a cold brew is our favorite weekend ritual.',
      rating: 5,
      dishMentioned: 'Gongura Chicken Bhatura',
    },
    {
      author: 'Vikram R.',
      context: 'Visited Jubilee Hills',
      text: 'One of the rare places in Hyderabad that gets the farm-to-table balance right without being pretentious. The pumpkin risotto and going-green sourdough pizza were beautifully prepared.',
      rating: 5,
      dishMentioned: 'Pumpkin Risotto & Sourdough Pizza',
    },
    {
      author: 'Sneha & Pranav',
      context: 'Weekend Brunchers',
      text: 'Peaceful, green atmosphere, lovely staff, and the kombucha on ice is so refreshing. It genuinely feels like taking an hour away from the city.',
      rating: 5,
      dishMentioned: 'Kombucha on Ice',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F0] border-t border-[#234735]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Statistic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#858F65]" />
              <span className="text-xs uppercase font-sans tracking-[0.24em] font-semibold text-[#858F65]">
                Guest Impressions
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#234735] font-normal leading-[1.12]">
              Good food is even better shared.
            </h2>
          </div>

          {/* Aggregate Rating Block */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#234735]/12 shadow-xs flex items-center gap-5 shrink-0">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4 ? 'fill-[#C77B52] text-[#C77B52]' : 'fill-[#C77B52]/40 text-[#C77B52]/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#234735] tabular-nums">
                  {CAFE_DETAILS.rating}
                </span>
                <span className="text-xs text-[#77786E]">out of 5.0</span>
              </div>
              <p className="text-[11px] text-[#858F65] font-medium mt-0.5">
                Approx. 920 verified Google reviews
              </p>
            </div>
            <a
              href={CAFE_DETAILS.locations.jubileeHills.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#F5F0E5] hover:bg-[#C9D3B8]/30 rounded-full text-[#234735] transition-colors"
              aria-label="Read Google Reviews"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {verifiedReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#234735]/10 shadow-xs flex flex-col justify-between relative group hover:border-[#234735]/25 transition-all"
            >
              <Quote className="w-8 h-8 text-[#C9D3B8]/60 mb-4" />
              <p className="text-sm sm:text-base text-[#252A24]/85 leading-relaxed font-normal mb-6">
                "{rev.text}"
              </p>

              <div className="pt-4 border-t border-[#234735]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-sm text-[#234735]">{rev.author}</h4>
                  <p className="text-xs text-[#77786E]">{rev.context}</p>
                </div>
                <span className="text-[11px] text-[#858F65] bg-[#F5F0E5] px-2.5 py-1 rounded-sm font-medium">
                  {rev.dishMentioned}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={CAFE_DETAILS.locations.jubileeHills.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#234735] hover:text-[#C77B52] transition-colors"
          >
            <span>Read More Verified Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
