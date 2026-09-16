import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Clock, 
  Video, 
  Award, 
  Globe, 
  Layers, 
  ShieldCheck, 
  MessageCircle,
  Sparkles,
  PhoneCall,
  ExternalLink
} from 'lucide-react';
import { PROGRAM_DETAILS_MAP, ProgramDetail } from '../data/programDetailsData';
import { OLGICA_DATA } from '../data/bozinovicData';
import { TelegramIcon, TikTokIcon, InstagramIcon, VKIcon } from './SocialIcons';
import { OlgicaLogo } from './OlgicaLogo';

interface ProgramDetailPageProps {
  programId: string;
  onBack: () => void;
  onBookNow: (programTitle: string) => void;
  onSelectOtherProgram?: (programId: string) => void;
}

const OLGICA_AVATAR = 'https://res.cloudinary.com/l4orv4yo/image/upload/v1789296600/4a71d565-05e6-469b-a690-0ba4ffed9f28_ioaikn.png';

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({
  programId,
  onBack,
  onBookNow,
  onSelectOtherProgram,
}) => {
  // Retrieve program details or fallback to flagship growth program
  const program: ProgramDetail = PROGRAM_DETAILS_MAP[programId] || PROGRAM_DETAILS_MAP['growth'];

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [programId]);

  return (
    <div id="program-detail-view" className="min-h-screen bg-[#fafcfb] text-stone-900 pb-20 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Top Fixed / Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              id="back-to-programs-nav"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Назад</span>
            </button>
            <div className="h-4 w-px bg-stone-200 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-stone-700 truncate max-w-[200px] sm:max-w-xs">
              {program.title}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://t.me/OlgaHealthBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-medium border border-sky-200/60 transition-colors"
            >
              <TelegramIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Задать вопрос</span>
            </a>
            <button
              onClick={() => onBookNow(program.title)}
              id="nav-book-program-btn"
              className="px-4 py-1.5 rounded-full bg-stone-900 hover:bg-[#2C6E67] text-white text-xs font-medium transition-all shadow-xs cursor-pointer"
            >
              Записаться
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">

        {/* 
          ===========================================================================
          TOP HERO HEADER BANNER (Matching "Mastering Creative UI/UX Design" block)
          ===========================================================================
        */}
        <div 
          id="course-header-banner"
          className="w-full bg-[#f0f7f5] border border-[#2C6E67]/15 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center shadow-xs relative overflow-hidden"
        >
          {/* Subtle Ambient Background Watermark */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

          {/* Category / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#2C6E67]/20 text-[#2C6E67] text-xs font-semibold tracking-wide uppercase mb-3 sm:mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2C6E67]" />
            <span>{program.category}</span>
          </div>

          {/* Big Course Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-stone-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            {program.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-stone-600 max-w-2xl mx-auto mt-3 sm:mt-4 font-normal leading-relaxed">
            {program.subtitle}
          </p>
        </div>

        {/* 
          ===========================================================================
          TWO-COLUMN LAYOUT (Matching user uploaded screenshot)
          ===========================================================================
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8 sm:mt-12 items-start">

          {/* 
            -------------------------------------------------------------------------
            LEFT COLUMN: Image, Description, What You'll Learn, Curriculum
            -------------------------------------------------------------------------
          */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">

            {/* Featured Landscape Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 bg-stone-100 aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={program.heroImage}
                alt={program.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Description Text */}
            <div>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                {program.intro}
              </p>
            </div>

            {/* "What You'll Learn:" Section */}
            <div className="pt-2">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight mb-4">
                Что входит в программу и чему вы научитесь:
              </h2>

              <ul className="space-y-3">
                {program.whatYouWillLearn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#2C6E67] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold shadow-2xs">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Concluding takeaway line */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-50/60 border-l-4 border-[#2C6E67] text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {program.concludingNote}
              </div>
            </div>

            {/* 
              -----------------------------------------------------------------------
              "Course Curriculum" Section (Matching Chapter 1, Chapter 2 cards)
              -----------------------------------------------------------------------
            */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight mb-5">
                Программа курса и этапы протокола
              </h2>

              <div className="space-y-5">
                {program.curriculum.map((chapter) => (
                  <div
                    key={chapter.chapterNumber}
                    className="rounded-2xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    {/* Chapter Heading (e.g. Chapter 1: Foundations... in soft blue/emerald) */}
                    <div className="mb-4">
                      <h3 className="text-sm sm:text-base font-bold text-[#2C6E67] tracking-tight">
                        {chapter.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mt-0.5">
                        {chapter.subtitle}
                      </p>
                    </div>

                    {/* Lessons list in grey pill rows matching user screenshot */}
                    <div className="space-y-2">
                      {chapter.lessons.map((lesson, lIdx) => (
                        <div
                          key={lIdx}
                          className="bg-[#f8faf9] hover:bg-[#f1f5f4] rounded-xl px-4 py-3 flex items-center justify-between gap-3 text-xs sm:text-[13px] text-stone-800 transition-colors border border-stone-100"
                        >
                          <span className="font-medium truncate max-w-[80%] sm:max-w-md">
                            {lesson.title}
                          </span>
                          <span className="text-[11px] sm:text-xs font-medium text-stone-400 flex items-center gap-1 flex-shrink-0">
                            <Clock className="w-3 h-3 text-stone-400" />
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Switch to Other Programs Quick Bar */}
            {onSelectOtherProgram && (
              <div className="pt-6 border-t border-stone-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                  Другие доступные программы:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['starter', 'growth', 'business']
                    .filter((id) => id !== program.id)
                    .map((otherId) => {
                      const other = PROGRAM_DETAILS_MAP[otherId];
                      if (!other) return null;
                      return (
                        <button
                          key={otherId}
                          onClick={() => onSelectOtherProgram(otherId)}
                          className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-[#2C6E67] text-left transition-all cursor-pointer shadow-2xs group"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                            {other.tag}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#2C6E67] transition-colors block mt-0.5">
                            {other.title}
                          </span>
                          <span className="text-xs text-stone-500 font-medium block mt-1">
                            {other.price}
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>
            )}

          </div>

          {/* 
            -------------------------------------------------------------------------
            RIGHT COLUMN: Course Includes Card & Instructor Profile Card
            -------------------------------------------------------------------------
          */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">

            {/* 
              CARD 1: "Course Includes :" Card (Matching screenshot)
            */}
            <div 
              id="course-includes-card"
              className="bg-white border border-stone-200/90 rounded-2xl sm:rounded-3xl p-6 shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight mb-5">
                В программу входит :
              </h3>

              {/* Key - Value list with icons matching screenshot */}
              <div className="space-y-3.5 text-xs sm:text-[13px]">
                
                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="flex items-center gap-2 text-stone-500 font-normal">
                    <Layers className="w-3.5 h-3.5 text-stone-400" />
                    Уровень
                  </span>
                  <span className="font-semibold text-stone-900">
                    {program.includes.level}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="flex items-center gap-2 text-stone-500 font-normal">
                    <Video className="w-3.5 h-3.5 text-stone-400" />
                    Материалы
                  </span>
                  <span className="font-semibold text-stone-900">
                    {program.includes.videoLessons}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="flex items-center gap-2 text-stone-500 font-normal">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    Длительность
                  </span>
                  <span className="font-semibold text-stone-900">
                    {program.includes.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="flex items-center gap-2 text-stone-500 font-normal">
                    <Award className="w-3.5 h-3.5 text-stone-400" />
                    Протокол
                  </span>
                  <span className="font-semibold text-stone-900">
                    {program.includes.certificate}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="flex items-center gap-2 text-stone-500 font-normal">
                    <Globe className="w-3.5 h-3.5 text-stone-400" />
                    Язык
                  </span>
                  <span className="font-semibold text-stone-900">
                    {program.includes.language}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="flex items-center gap-2 text-stone-500 font-normal">
                    <MessageCircle className="w-3.5 h-3.5 text-stone-400" />
                    Поддержка
                  </span>
                  <span className="font-semibold text-stone-900 text-right">
                    {program.includes.support}
                  </span>
                </div>

              </div>

              {/* Price Block with Russian Rubles */}
              <div className="mt-6 pt-5 border-t border-stone-100">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs text-stone-500 font-medium">
                    Стоимость:
                  </span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                      {program.price}
                    </span>
                    <span className="text-xs text-stone-500 font-normal block">
                      {program.pricePeriod}
                    </span>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <button
                  onClick={() => onBookNow(program.title)}
                  id="course-cta-book-btn"
                  className="w-full mt-5 py-3.5 rounded-full bg-stone-900 hover:bg-[#2C6E67] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Записаться на программу</span>
                  <Check className="w-4 h-4" />
                </button>

                <p className="mt-2.5 text-center text-[11px] text-stone-400">
                  Безопасная оплата и моментальный доступ к материалам
                </p>
              </div>

            </div>

            {/* 
              CARD 2: Instructor / Author Card (Matching "Rico Pranata" card in screenshot)
            */}
            <div 
              id="course-author-card"
              className="bg-white border border-stone-200/90 rounded-2xl sm:rounded-3xl p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                {/* Square Avatar Photo of Olgica Bozinovic with rounded-xl corners */}
                <img
                  src={OLGICA_AVATAR}
                  alt={OLGICA_DATA.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover flex-shrink-0 shadow-2xs border border-stone-100"
                />

                {/* Author Info & Social Links */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight truncate">
                    {OLGICA_DATA.name}
                  </h4>
                  <p className="text-[10.5px] font-semibold text-stone-400 uppercase tracking-wider mt-0.5">
                    НУТРИЦИОЛОГ · КОУЧ ПО ЗДОРОВЬЮ
                  </p>

                  {/* Social Icons matching the 4 icons in the screenshot */}
                  <div className="flex items-center gap-3.5 mt-2.5 text-stone-600">
                    <a
                      href="https://t.me/OlgaHealthBot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#2C6E67] hover:scale-110 transition-transform"
                      title="Telegram"
                    >
                      <TelegramIcon className="w-4 h-4 text-sky-600" />
                    </a>
                    <a
                      href="https://www.instagram.com/bozinovic.olgica?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-600 hover:scale-110 transition-transform"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@bozinovic.olgica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-900 hover:scale-110 transition-transform"
                      title="TikTok"
                    >
                      <TikTokIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://vk.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 hover:scale-110 transition-transform"
                      title="VKontakte"
                    >
                      <VKIcon className="w-4 h-4 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio summary snippet */}
              <p className="mt-4 pt-3.5 border-t border-stone-100 text-xs text-stone-600 leading-relaxed font-light">
                Инженер биотехнологий, окончила Технологический факультет в Белграде и фармацевтический колледж. Сотни успешных клинических кейсов восстановления здоровья.
              </p>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};
