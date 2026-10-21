import React, { useState } from 'react';
import { X, Calendar, Users, Clock, MapPin, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { CAFE_DETAILS } from '../data/cafeData.ts';
import { SageLeaf } from './BotanicalIllustrations.tsx';

interface VisitPlanningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitPlanningModal: React.FC<VisitPlanningModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [partySize, setPartySize] = useState('2 Guests');
  const [visitDate, setVisitDate] = useState('Today');
  const [timeSlot, setTimeSlot] = useState('1:00 PM – Lunch');
  const [seatingPreference, setSeatingPreference] = useState('Veranda Garden');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) return;
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="visit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF7F0] rounded-2xl shadow-2xl border border-[#234735]/15 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#234735]/10 flex items-center justify-between shrink-0 bg-[#F5F0E5]">
          <div className="flex items-center gap-2.5">
            <SageLeaf className="w-6 h-6 text-[#234735]" />
            <div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#858F65]">
                SAGE Farm Cafe · Jubilee Hills
              </span>
              <h3 id="visit-modal-title" className="font-serif text-2xl text-[#234735]">
                Plan Your Visit
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#234735] hover:bg-[#234735]/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {confirmed ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-[#234735] rounded-full flex items-center justify-center mx-auto text-[#FAF7F0]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#234735]">
                We Look Forward to Welcoming You
              </h4>
              <p className="text-sm text-[#252A24]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{guestName}</strong>. Your visit inquiry for <strong>{partySize}</strong> ({seatingPreference}) on <strong>{visitDate}</strong> around <strong>{timeSlot}</strong> has been recorded.
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#234735]/15 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-[#77786E]">
                  <span>Location</span>
                  <span className="font-medium text-[#252A24]">1227, Road 62A, Jubilee Hills</span>
                </div>
                <div className="flex justify-between text-[#77786E]">
                  <span>Seating</span>
                  <span className="font-medium text-[#252A24]">{seatingPreference}</span>
                </div>
                <div className="flex justify-between text-[#77786E]">
                  <span>Contact Registered</span>
                  <span className="font-medium text-[#252A24]">{guestPhone}</span>
                </div>
                {dietaryNotes && (
                  <div className="flex justify-between text-[#77786E]">
                    <span>Dietary note</span>
                    <span className="font-medium text-[#252A24]">{dietaryNotes}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${CAFE_DETAILS.locations.jubileeHills.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase font-semibold text-white bg-[#234735] rounded-full hover:bg-[#18382B]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Cafe Desk ({CAFE_DETAILS.locations.jubileeHills.phone})</span>
                </a>
                <a
                  href={CAFE_DETAILS.locations.jubileeHills.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase font-semibold text-[#234735] bg-white border border-[#234735]/20 rounded-full hover:bg-[#F5F0E5]"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 bg-[#C9D3B8]/20 rounded-xl border border-[#858F65]/20 text-xs text-[#234735] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#858F65] shrink-0" />
                <span>
                  Jubilee Hills: Walk-ins are always warmly welcomed. Peak weekend hours run 12:30–3:30 PM & 7:00–9:30 PM.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#252A24] mb-1.5">
                    Party Size
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#234735]/20 rounded-lg text-[#252A24] focus:outline-hidden focus:border-[#234735]"
                  >
                    <option>1 Guest (Solo work / coffee)</option>
                    <option>2 Guests</option>
                    <option>3–4 Guests</option>
                    <option>5–8 Guests (Family / Friends)</option>
                    <option>8+ Guests (Gathering)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#252A24] mb-1.5">
                    Seating Space
                  </label>
                  <select
                    value={seatingPreference}
                    onChange={(e) => setSeatingPreference(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#234735]/20 rounded-lg text-[#252A24] focus:outline-hidden focus:border-[#234735]"
                  >
                    <option>Veranda Garden (Pet-friendly)</option>
                    <option>Main Sunlit Botanical Hall</option>
                    <option>Quiet Work / Book Corner</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#252A24] mb-1.5">
                    Day of Visit
                  </label>
                  <select
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#234735]/20 rounded-lg text-[#252A24] focus:outline-hidden focus:border-[#234735]"
                  >
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>This Upcoming Saturday</option>
                    <option>This Upcoming Sunday</option>
                    <option>Next Week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#252A24] mb-1.5">
                    Approximate Time
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#234735]/20 rounded-lg text-[#252A24] focus:outline-hidden focus:border-[#234735]"
                  >
                    <option>8:30 AM – Morning Coffee & Brews</option>
                    <option>10:30 AM – Mid-Morning Bowls</option>
                    <option>1:00 PM – Lunch</option>
                    <option>4:30 PM – Afternoon Sips & Dessert</option>
                    <option>7:30 PM – Dinner Gathering</option>
                    <option>9:00 PM – Late Hearth Pizza</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#252A24] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#234735]/20 rounded-lg text-[#252A24] focus:outline-hidden focus:border-[#234735]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#252A24] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 Mobile number"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#234735]/20 rounded-lg text-[#252A24] focus:outline-hidden focus:border-[#234735]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-[#252A24] mb-1.5">
                  Dietary Preferences or Special Notes (Optional)
                </label>
                <input
                  type="text"
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  placeholder="e.g., Vegan, Gluten-free, Celebrating birthday, Dog accompanying"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#234735]/20 rounded-lg text-[#252A24] focus:outline-hidden focus:border-[#234735]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#234735] hover:bg-[#18382B] rounded-full transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Confirm Visit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
