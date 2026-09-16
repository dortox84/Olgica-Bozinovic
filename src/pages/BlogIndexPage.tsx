/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Standalone /blog listing — same BlogCardsSection design as the homepage's
// blog section, just reachable and shareable on its own, without the rest
// of the homepage's scroll-stack sections underneath it.

import React from 'react';
import { Link } from 'react-router-dom';
import { OlgicaLogo } from '../components/OlgicaLogo';
import { BlogCardsSection } from '../components/BlogCardsSection';
import { BookingModal } from '../components/BookingModal';

export default function BlogIndexPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Блог — Ольгица Божинович';
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      <header className="w-full px-5 sm:px-8 lg:px-14 xl:px-16 py-5 sm:py-6 border-b border-stone-100">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <Link to="/" aria-label="На главную">
            <OlgicaLogo className="h-8 sm:h-9 w-auto" theme="light" />
          </Link>
          <Link to="/" className="text-sm font-medium text-stone-600 hover:text-stone-900">
            ← Главная
          </Link>
        </div>
      </header>

      <div className="min-h-[calc(100vh-88px)]">
        <BlogCardsSection basePath="/blog" onConsultationClick={() => setBookingOpen(true)} />
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
