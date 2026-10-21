import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { BrandIntroduction } from './components/BrandIntroduction.tsx';
import { FeaturedMenu } from './components/FeaturedMenu.tsx';
import { FoodStory } from './components/FoodStory.tsx';
import { TheSpace } from './components/TheSpace.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { VisitCTA } from './components/VisitCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { VisitPlanningModal } from './components/VisitPlanningModal.tsx';
import { KokapetModal } from './components/KokapetModal.tsx';

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isKokapetModalOpen, setIsKokapetModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F0E5] text-[#252A24] font-sans selection:bg-[#C9D3B8] selection:text-[#18382B] flex flex-col">
      {/* Top Navigation */}
      <Header
        onPlanVisit={() => setIsVisitModalOpen(true)}
        onOpenKokapetModal={() => setIsKokapetModalOpen(true)}
      />

      {/* Main Editorial Story Flow */}
      <main className="flex-1">
        <HeroSection onPlanVisit={() => setIsVisitModalOpen(true)} />
        <BrandIntroduction />
        <FeaturedMenu onPlanVisit={() => setIsVisitModalOpen(true)} />
        <FoodStory />
        <TheSpace onPlanVisit={() => setIsVisitModalOpen(true)} />
        <ReviewsSection />
        <LocationSection
          onPlanVisit={() => setIsVisitModalOpen(true)}
          onOpenKokapetModal={() => setIsKokapetModalOpen(true)}
        />
        <VisitCTA onPlanVisit={() => setIsVisitModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onPlanVisit={() => setIsVisitModalOpen(true)}
        onOpenKokapetModal={() => setIsKokapetModalOpen(true)}
      />

      {/* Interactive Modals */}
      <VisitPlanningModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />

      <KokapetModal
        isOpen={isKokapetModalOpen}
        onClose={() => setIsKokapetModalOpen(false)}
      />
    </div>
  );
}
