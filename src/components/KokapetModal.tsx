import React, { useState } from 'react';
import { X, MapPin, Bell, CheckCircle, Sparkles } from 'lucide-react';
import { SageLeaf } from './BotanicalIllustrations.tsx';

interface KokapetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KokapetModal: React.FC<KokapetModalProps> = ({ isOpen, onClose }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="kokapet-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF7F0] rounded-2xl shadow-2xl border border-[#234735]/15 overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#234735] hover:bg-[#F5F0E5] rounded-full transition-colors cursor-pointer"
          aria-label="Close Kokapet notice"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-[#C77B52]/15 text-[#C77B52] rounded-xl">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#C77B52]">
              New Location Announcement
            </span>
            <h3 id="kokapet-modal-title" className="font-serif text-2xl sm:text-3xl text-[#234735]">
              SAGE is coming to Kokapet
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#252A24]/80 leading-relaxed mb-6 font-normal">
          We are thrilled to bring the SAGE farm-to-table spirit and botanical dining to Kokapet, Hyderabad. Physical site setup, exact street coordinates, and guest booking links are currently being finalized.
        </p>

        <div className="p-4 bg-[#F5F0E5] rounded-xl border border-[#234735]/10 mb-6 text-xs text-[#77786E] space-y-1.5">
          <p className="font-medium text-[#252A24]">
            Note for Guests & Partners:
          </p>
          <p>
            Please visit our established <strong>Jubilee Hills</strong> location (Road 62A) for current daily dining. Complete Kokapet verified timings, menu previews, and contact lines will be published as soon as doors open.
          </p>
        </div>

        {submitted ? (
          <div className="p-5 bg-[#C9D3B8]/30 rounded-xl border border-[#858F65]/30 text-center space-y-2 animate-in zoom-in-95 duration-200">
            <CheckCircle className="w-8 h-8 text-[#234735] mx-auto" />
            <p className="font-serif text-lg text-[#234735]">You're on the Kokapet Priority List</p>
            <p className="text-xs text-[#77786E]">
              We will send you opening date invitations and exclusive table access once verified.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 px-5 py-2 text-xs uppercase font-semibold text-white bg-[#234735] rounded-full hover:bg-[#18382B]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#252A24]">
              Get Kokapet Opening Day Invitation
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="Enter email or phone number"
                className="flex-1 px-4 py-2.5 text-xs bg-white rounded-lg border border-[#234735]/20 focus:outline-hidden focus:border-[#234735] text-[#252A24]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#234735] hover:bg-[#18382B] rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Notify Me
              </button>
            </div>
            <p className="text-[11px] text-[#77786E]">
              Zero spam. Only official launch notifications from SAGE Farm Cafe.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
