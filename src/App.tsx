/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ConfidentalNavbar } from './components/ConfidentalNavbar';
import { ConfidentalHero } from './components/ConfidentalHero';
import { ConfidentalModal } from './components/ConfidentalModal';
import { CanYouRelateSection } from './components/CanYouRelateSection';
import { ImpactResultsSection } from './components/ImpactResultsSection';
import { CtaBannerSection } from './components/CtaBannerSection';

const HERO_BG_URL = 'https://res.cloudinary.com/l4orv4yo/image/upload/v1789260118/1e583dcc-88ab-40e0-a51b-9a7ca95b2ac6_tzzqd3.png';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'contact' | 'products' | 'section';
    sectionName?: string;
  }>({
    isOpen: false,
    type: 'contact',
  });

  /* Smooth scroll helper to navigate between presentation cards */
  const scrollToCard = (cardIndex: number) => {
    const vh = window.innerHeight;
    window.scrollTo({
      top: cardIndex * vh,
      behavior: 'smooth',
    });
  };

  const handleOpenContact = () => {
    setModalState({ isOpen: true, type: 'contact' });
  };

  const handleOpenProducts = () => {
    setModalState({ isOpen: true, type: 'products' });
  };

  const handleOpenSection = (section: string) => {
    if (section === 'home') {
      scrollToCard(0);
      return;
    }
    if (section === 'methods' || section === 'research') {
      scrollToCard(1);
      return;
    }
    if (section === 'results') {
      scrollToCard(2);
      return;
    }
    if (section === 'products') {
      scrollToCard(3);
      return;
    }
    if (section === 'contact') {
      handleOpenContact();
      return;
    }
    setModalState({ isOpen: true, type: 'section', sectionName: section });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative w-full bg-[#121212] text-stone-900 selection:bg-amber-500/20 selection:text-stone-900">

      {/* 
        =============================================================================
        CORE ARCHITECTURE: PRESENTATION CARD STACKING ENGINE
        =============================================================================

        1. SECTION POSITIONING & 100VH VIEWPORT OCCUPANCY:
           Each section has `sticky top-0 h-screen min-h-screen max-h-screen w-full`.
           Because the sections are in natural document flow, the total scrollable
           height equals 400vh (4 slides * 100vh). Native browser scrolling remains
           fully intact with NO scroll lock or artificial wheel hijacking.

        2. THE STACKING ANIMATION (CONTINUOUS & DIRECTLY SCROLL-CONTROLLED):
           - Section 1 pins at `top: 0` as the user begins scrolling.
           - Section 2 is located right below it at 100vh in document flow.
           - As the user scrolls down, Section 2 climbs upward in real time,
             physically sliding over Section 1.
           - At scroll progress = 25%, Section 2 has climbed 25% over Section 1.
           - At scroll progress = 50%, Section 2 is halfway over Section 1.
           - At scroll progress = 100%, Section 2 reaches `top: 0` and pins.
           - Then Section 3 begins climbing over Section 2, and Section 4 over Section 3.
           - Pausing scrolling at any point leaves the animation paused at that exact pixel.
           - Scrolling up reverses the climbing completely and naturally.

        3. Z-INDEX HIERARCHY:
           - Section 1 (Hero): z-index 10 (lowest)
           - Section 2 ("Знакомо ли вам это?"): z-index 20 (above Section 1)
           - Section 3 ("Что говорят о нас"): z-index 30 (above Section 2)
           - Section 4 (CTA & Finale): z-index 40 (above Section 3)
           Each later section layers on top of all preceding sections.

        4. DEPTH & PHYSICAL CARD ACCENTS:
           - Sections 2, 3, and 4 feature rounded top corners (`rounded-t-[28px] sm:rounded-t-[36px] lg:rounded-t-[44px]`).
           - Heavy top shadows (`shadow-[0_-25px_60px_rgba(0,0,0,0.55)]`) create the
             striking tactile illusion of physical cards being pushed up the stack.
           - Content inside remains completely stable while the card moves.

        5. RESPONSIVE BEHAVIOR:
           - Desktop: 100vh full-viewport presentation slides with strong stacking depth.
           - Tablet & Mobile: 100vh full-viewport slides with natural touch scrolling.
           - Strictly enforces image removal in Section 2 ("Знакомо ли вам это?") on < lg.
        =============================================================================
      */}
      <main className="relative w-full">

        {/* 
          ===========================================================================
          SECTION 1 OF 4: HERO SLIDE
          - Position: `sticky top-0 h-screen min-h-screen max-h-screen w-full`
          - z-index: 10 (Base layer of the stack)
          - Content: Logo, Russian pill navbar, badge, lotus title, CTA, and social proof.
          ===========================================================================
        */}
        <div 
          id="section-1-hero"
          className="sticky top-0 h-screen min-h-screen max-h-screen w-full z-10 overflow-hidden flex flex-col justify-between bg-black text-white"
        >
          {/* Background Hero Photography Layer */}
          <div 
            id="hero-background-layer"
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            aria-hidden="true"
          >
            <img
              src={HERO_BG_URL}
              alt="Ольгица Божинович - Путь к здоровью"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_20%] lg:object-center scale-[1.02] transition-transform duration-1000"
            />

            {/* Ambient Dark Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/45" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />
          </div>

          {/* Subtle Warm Amber Glow in Top Right */}
          <div 
            className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] bg-amber-400/[0.06] rounded-full blur-[140px] z-0"
            aria-hidden="true"
          />

          {/* Top Header Navbar */}
          <ConfidentalNavbar 
            onContactClick={handleOpenContact}
            onNavClick={handleOpenSection}
          />

          {/* Hero Body Content */}
          <div className="relative z-10 flex-grow flex flex-col justify-between">
            <ConfidentalHero 
              onExploreProducts={handleOpenProducts}
              onTickerClick={() => handleOpenSection('research')}
            />
          </div>
        </div>

        {/* 
          ===========================================================================
          SECTION 2 OF 4: "Знакомо ли вам это?"
          - Position: `sticky top-0 h-screen min-h-screen max-h-screen w-full`
          - z-index: 20 (Climbs directly over Section 1)
          - Physical Card Styling:
            * `rounded-t-[28px] sm:rounded-t-[36px] lg:rounded-t-[44px]`
            * `shadow-[0_-25px_60px_rgba(0,0,0,0.55)]`
            * `border-t border-white/20`
          - MANDATORY STRICT RESPONSIVE REQUIREMENT (HANDLED IN CanYouRelateSection):
            * Desktop (lg+): Image is VISIBLE as part of the composition.
            * Tablet (< lg) & Phone: Image is COMPLETELY REMOVED from the layout flow
              via `hidden lg:flex` (occupies 0px of layout space).
            * The text content automatically reflows to occupy the full freed space.
          ===========================================================================
        */}
        <div 
          id="section-2-relate"
          className="sticky top-0 h-screen min-h-screen max-h-screen w-full z-20 overflow-hidden rounded-t-[28px] sm:rounded-t-[36px] lg:rounded-t-[44px] shadow-[0_-25px_60px_rgba(0,0,0,0.55)] border-t border-white/20 bg-[#2C6E67]"
        >
          <CanYouRelateSection 
            onRelateClick={handleOpenProducts}
          />
        </div>

        {/* 
          ===========================================================================
          SECTION 3 OF 4: "Что говорят о нас" (TESTIMONIALS & RESULTS)
          - Position: `sticky top-0 h-screen min-h-screen max-h-screen w-full`
          - z-index: 30 (Climbs directly over Section 2)
          - Physical Card Styling:
            * `rounded-t-[28px] sm:rounded-t-[36px] lg:rounded-t-[44px]`
            * `shadow-[0_-25px_60px_rgba(0,0,0,0.35)]`
            * `border-t border-stone-200`
            * Pure white card background `#ffffff`
          ===========================================================================
        */}
        <div 
          id="section-3-impact"
          className="sticky top-0 h-screen min-h-screen max-h-screen w-full z-30 overflow-hidden rounded-t-[28px] sm:rounded-t-[36px] lg:rounded-t-[44px] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-stone-200 bg-white"
        >
          <ImpactResultsSection 
            onStoryClick={() => handleOpenSection('results')}
          />
        </div>

        {/* 
          ===========================================================================
          SECTION 4 OF 4: CALL TO ACTION BANNER & CONCLUSION
          - Position: `sticky top-0 h-screen min-h-screen max-h-screen w-full`
          - z-index: 40 (Climbs directly over Section 3 as the finale card)
          - Physical Card Styling:
            * `rounded-t-[28px] sm:rounded-t-[36px] lg:rounded-t-[44px]`
            * `shadow-[0_-25px_60px_rgba(0,0,0,0.45)]`
            * `border-t border-stone-200`
            * Warm porcelain background with emerald gradient card & clean footer.
          ===========================================================================
        */}
        <div 
          id="section-4-cta"
          className="sticky top-0 h-screen min-h-screen max-h-screen w-full z-40 overflow-hidden rounded-t-[28px] sm:rounded-t-[36px] lg:rounded-t-[44px] shadow-[0_-25px_60px_rgba(0,0,0,0.45)] border-t border-stone-200 bg-[#f8faf9]"
        >
          <CtaBannerSection 
            onPrimaryClick={handleOpenProducts}
            onSecondaryClick={handleOpenContact}
          />
        </div>

      </main>

      {/* Interactive Modal System */}
      <ConfidentalModal 
        isOpen={modalState.isOpen}
        type={modalState.type}
        sectionName={modalState.sectionName}
        onClose={handleCloseModal}
      />

    </div>
  );
}
