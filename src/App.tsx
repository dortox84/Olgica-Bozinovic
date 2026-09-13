/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ConfidentalNavbar } from './components/ConfidentalNavbar';
import { ConfidentalHero } from './components/ConfidentalHero';
import { ConfidentalModal } from './components/ConfidentalModal';
import { QuoteScrollSection } from './components/QuoteScrollSection';
import { CanYouRelateSection } from './components/CanYouRelateSection';
import { ImpactResultsSection } from './components/ImpactResultsSection';

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

  const handleOpenContact = () => {
    setModalState({ isOpen: true, type: 'contact' });
  };

  const handleOpenProducts = () => {
    setModalState({ isOpen: true, type: 'products' });
  };

  const handleOpenSection = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section === 'methods' || section === 'research') {
      const el = document.getElementById('can-you-relate-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
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
    <div className="min-h-screen bg-[#0d0c0b] text-white flex flex-col selection:bg-amber-500/20 selection:text-white relative">
      
      {/* 1. First Screen: Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Background Hero Photography Layer */}
        <div 
          id="hero-background-layer"
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={HERO_BG_URL}
            alt="Confidental - Radiant Smile with Sunlight"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[center_20%] lg:object-center scale-[1.02] transition-transform duration-1000"
          />

          {/* Ambient Dark Gradients matching the design */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0d0c0b]/90 via-[#0d0c0b]/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
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
        <main className="relative z-10 flex-grow flex flex-col justify-between">
          <ConfidentalHero 
            onExploreProducts={handleOpenProducts}
            onTickerClick={() => handleOpenSection('research')}
          />
        </main>
      </div>

      {/* 2. White Sticky Quote Section with Word-by-Word Scroll Reveal */}
      <QuoteScrollSection />

      {/* 3. Next Section: "Can you relate?" matching the reference image */}
      <CanYouRelateSection 
        onRelateClick={handleOpenProducts}
      />

      {/* 4. Our Impact & Testimonials with 20.500+ Instagram Followers & Progress Bars */}
      <ImpactResultsSection 
        onStoryClick={() => handleOpenSection('results')}
      />

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
