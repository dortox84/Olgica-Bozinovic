import React, { useState } from 'react';
import { ArrowUpRight, Video, VideoOff, Mic, MicOff, PhoneCall } from 'lucide-react';
import { BrandLeafIcon } from './CustomIcons';

interface BottomCardsProps {
  onOpenBooking: () => void;
  onOpenStories?: () => void;
}

export const BottomCards: React.FC<BottomCardsProps> = ({ onOpenBooking, onOpenStories }) => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  return (
    <section className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 sm:pt-10 pb-12 sm:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        
        {/* CARD 1: 400+ Clients & Real Stories */}
        <div 
          id="card-client-stats"
          className="group relative rounded-2xl border border-white/25 bg-black/60 hover:bg-black/75 backdrop-blur-2xl hover:border-white/45 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between min-h-[175px] shadow-2xl shadow-black/50 overflow-hidden"
        >
          {/* Subtle top edge glass specular highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Top Row: 400+ and clients text */}
          <div className="flex items-start gap-3.5 relative z-10">
            <span className="font-serif-display text-4xl sm:text-[46px] font-normal tracking-tight text-[#fff0db] leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              400+
            </span>
            <div className="flex flex-col text-xs sm:text-[13px] text-zinc-100 font-normal leading-snug pt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              <span>довольных клиентов</span>
              <span>восстановили здоровье</span>
            </div>
          </div>

          {/* Bottom Right: Botanical leaf + Real Stories slogan */}
          <div 
            onClick={onOpenStories || onOpenBooking}
            className="self-end flex items-start gap-2 text-zinc-100 hover:text-amber-100 transition-colors cursor-pointer relative z-10 group/stories drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
          >
            <div className="text-amber-200 group-hover/stories:scale-110 transition-transform mt-0.5">
              <BrandLeafIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-xs leading-tight text-zinc-100 group-hover/stories:text-white font-medium">
              <span>Отзывы клиентов.</span>
              <span>Природное восстановление.</span>
            </div>
          </div>
        </div>

        {/* CARD 2: Program Put Zdravlja BO */}
        <div 
          id="card-program-stats"
          className="group relative rounded-2xl border border-white/25 bg-black/60 hover:bg-black/75 backdrop-blur-2xl hover:border-white/45 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between min-h-[175px] shadow-2xl shadow-black/50 overflow-hidden"
        >
          {/* Subtle top edge glass specular highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Top Row: Title + Metric */}
          <div className="flex items-start justify-between gap-2 relative z-10">
            <h2 className="text-sm sm:text-base font-medium text-white leading-snug max-w-[200px] drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
              Программа «Путь Здоровья»<br />& Очищение Печени BO
            </h2>
            <div className="flex items-center gap-1 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
              <span>100%</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Bottom Row: Explanation & Ascending Gold Chart */}
          <div className="flex items-end justify-between gap-3 mt-4 relative z-10">
            <p className="text-xs text-[#ececf0] font-normal leading-relaxed max-w-[210px] sm:max-w-[230px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              Биотехнологии, фармация и коучинг, объединенные в индивидуальный протокол для стойкого исцеления.
            </p>

            {/* Ascending 4-bar chart */}
            <div className="flex items-end gap-1.5 pb-0.5 flex-shrink-0" aria-label="Этапы восстановления">
              <div 
                className="w-2.5 h-3.5 rounded-[2px] bg-amber-300/80 transition-all duration-500 group-hover:h-4.5 shadow-sm" 
                title="Фаза 1: Анамнез и лабораторные анализы" 
              />
              <div 
                className="w-2.5 h-6 rounded-[2px] bg-amber-300/90 transition-all duration-500 group-hover:h-7 shadow-sm" 
                title="Фаза 2: Очищение печени и кишечника" 
              />
              <div 
                className="w-2.5 h-9 rounded-[2px] bg-amber-200 transition-all duration-500 group-hover:h-10 shadow-sm" 
                title="Фаза 3: Персонализированный рацион" 
              />
              <div 
                className="w-2.5 h-13 rounded-[2px] bg-[#fff8ea] transition-all duration-500 group-hover:h-14 shadow-sm" 
                title="Фаза 4: Долговечная жизненная сила и иммунитет" 
              />
            </div>
          </div>
        </div>

        {/* CARD 3: Video Consultation Preview */}
        <div 
          id="card-consultation-call"
          className="group relative rounded-2xl border border-white/25 bg-black/60 hover:bg-black/75 backdrop-blur-2xl hover:border-white/45 transition-all duration-300 p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 min-h-[175px] shadow-2xl shadow-black/50 overflow-hidden"
        >
          {/* Subtle top edge glass specular highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Left Video Box with Bokeh & Sound Wave */}
          <div 
            onClick={onOpenBooking}
            className="w-[125px] sm:w-[135px] h-[130px] sm:h-[140px] rounded-xl relative overflow-hidden bg-black/60 backdrop-blur-md flex-shrink-0 border border-white/25 cursor-pointer shadow-inner group/video"
          >
            {/* Cinematic Bokeh Background lights */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#120f0b]/80 via-[#1a1714]/70 to-[#251e18]/70">
              {/* Soft warm bokeh circles matching the screenshot */}
              <div className="absolute -top-3 -right-2 w-14 h-14 rounded-full bg-amber-200/30 blur-md" />
              <div className="absolute top-8 right-6 w-8 h-8 rounded-full bg-amber-100/40 blur-sm" />
              <div className="absolute top-14 right-2 w-6 h-6 rounded-full bg-amber-300/35 blur-xs" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full bg-amber-600/20 blur-lg" />
              <div className="absolute top-4 left-6 w-5 h-5 rounded-full bg-white/25 blur-xs" />
            </div>

            {/* Sound Wave / Voice indicator overlay (horizontal stacked bars from screenshot) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 z-10">
              <div className="w-5 h-[1.5px] bg-white rounded-full animate-pulse shadow-sm" />
              <div className="w-8 h-[1.5px] bg-white rounded-full animate-pulse delay-75 shadow-sm" />
              <div className="w-6 h-[1.5px] bg-white rounded-full animate-pulse delay-150 shadow-sm" />
              <div className="w-7 h-[1.5px] bg-white rounded-full animate-pulse delay-100 shadow-sm" />
              <div className="w-4 h-[1.5px] bg-white rounded-full animate-pulse delay-200 shadow-sm" />
            </div>

            {/* Subtle live indicator badge in video */}
            <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/25 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] text-white font-semibold tracking-wider">ONLINE</span>
            </div>
          </div>

          {/* Right Text & Action Controls */}
          <div className="flex flex-col justify-between h-full py-1 flex-grow relative z-10">
            <div>
              <h2 className="text-xs sm:text-sm font-medium text-white leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                Онлайн-консультация<br />с Ольгицей
              </h2>
              <p className="text-[11px] sm:text-xs text-[#ececf0] font-normal mt-1.5 leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                Забронируйте время и узнайте решение вашей проблемы
              </p>
            </div>

            {/* Call Control Buttons */}
            <div className="flex items-center gap-2 pt-3">
              {/* Video toggle */}
              <button
                id="call-toggle-video"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVideoOn(!isVideoOn);
                }}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all border backdrop-blur-md ${
                  isVideoOn 
                    ? 'bg-white/20 hover:bg-white/30 text-white border-white/35 shadow-sm' 
                    : 'bg-black/50 text-zinc-300 border-white/20'
                }`}
                title={isVideoOn ? "Выключить камеру" : "Включить камеру"}
                aria-label="Переключить камеру"
              >
                {isVideoOn ? <Video className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5" />}
              </button>

              {/* Mic toggle */}
              <button
                id="call-toggle-mic"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMicOn(!isMicOn);
                }}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all border backdrop-blur-md ${
                  isMicOn 
                    ? 'bg-white/20 hover:bg-white/30 text-white border-white/35 shadow-sm' 
                    : 'bg-black/50 text-zinc-300 border-white/20'
                }`}
                title={isMicOn ? "Выключить микрофон" : "Включить микрофон"}
                aria-label="Переключить микрофон"
              >
                {isMicOn ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
              </button>

              {/* Call button / start session */}
              <button
                id="call-start-consultation"
                onClick={onOpenBooking}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e04f4f] hover:bg-[#eb5a5a] active:scale-95 flex items-center justify-center text-white transition-all border border-white/40 shadow-lg shadow-red-950/50 backdrop-blur-md cursor-pointer"
                title="Записаться на консультацию"
                aria-label="Записаться на консультацию"
              >
                <PhoneCall className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
