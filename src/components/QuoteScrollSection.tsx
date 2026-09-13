import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { Sparkles, ChevronDown } from 'lucide-react';

interface QuoteScrollSectionProps {
  onExploreClick?: () => void;
}

interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  // As scroll progress goes from range[0] to range[1], opacity goes from 0.15 to 1, and color transitions from muted stone to dark charcoal
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="inline-block relative mr-[0.26em] mb-[0.1em]">
      <motion.span
        style={{ opacity, y }}
        className="inline-block transition-colors duration-150 text-stone-900"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const QuoteScrollSection: React.FC<QuoteScrollSectionProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across this 280vh-tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Meaningful, resonant quote regarding health, nutrition and inner transformation
  const quoteText =
    "„Мой дар — бережно вести тебя по пути исцеления. Истинное здоровье начинается тогда, когда ты выбираешь себя и даешь телу природную поддержку.”";
  const author = "Ольгица Божинович — Консультант по питанию и нутрициологии, Health Coach";

  const words = quoteText.split(' ');

  // Calculate author fade-in towards the end of the scroll (e.g. 0.82 to 0.98)
  const authorOpacity = useTransform(scrollYProgress, [0.82, 0.96], [0, 1]);
  const authorY = useTransform(scrollYProgress, [0.82, 0.96], [12, 0]);

  return (
    <div
      id="quote-sticky-container"
      ref={containerRef}
      className="relative w-full h-[260vh] bg-white"
    >
      {/* Sticky Fullscreen Frame that stays pinned while user scrolls */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center px-6 sm:px-12 lg:px-20 py-12 sm:py-16 overflow-hidden bg-white text-stone-900">
        
        {/* Subtle decorative background watermark/glow for high elegance */}
        <div 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-100/40 rounded-full blur-[160px]" 
          aria-hidden="true" 
        />

        {/* Top Header Tag inside the white section */}
        <div className="relative z-10 flex items-center gap-2 pt-2 sm:pt-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium text-stone-500">
            Философия здоровья &middot; bozinovicolgica.rs
          </span>
        </div>

        {/* Center: The Word-by-Word Reveal Animated Quote */}
        <div className="relative z-10 max-w-4xl sm:max-w-5xl mx-auto text-center px-2 sm:px-4 my-auto">
          <p className="font-serif-title text-[28px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[68px] leading-[1.2] sm:leading-[1.18] tracking-tight select-none">
            {words.map((word, i) => {
              // Word active range distribution across 0.05 to 0.82 of scroll progression
              const start = 0.06 + (i / words.length) * 0.74;
              const end = start + (1 / words.length) * 0.74;

              return (
                <Word key={i} range={[start, end]} progress={scrollYProgress}>
                  {word}
                </Word>
              );
            })}
          </p>

          {/* Author attribution reveals when quote completes */}
          <motion.div
            style={{ opacity: authorOpacity, y: authorY }}
            className="mt-6 sm:mt-10 flex flex-col items-center gap-2"
          >
            <div className="w-10 h-[1.5px] bg-amber-500/80 mb-2 rounded-full" />
            <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-stone-600">
              {author}
            </p>
          </motion.div>
        </div>

        {/* Bottom indicator that fades out as user reaches end or can be clicked to smoothly jump to Can you relate */}
        <div className="relative z-10 pb-2">
          <button
            onClick={() => {
              const el = document.getElementById('can-you-relate-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-[11px] uppercase tracking-widest cursor-pointer group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>Листайте вниз &middot; Знакомо ли вам это?</span>
            <ChevronDown className="w-3.5 h-3.5 text-amber-600 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
