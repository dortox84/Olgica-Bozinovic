import React from 'react';
import { X, Sparkles, Check, ArrowRight, Phone, Instagram, FileText, ExternalLink } from 'lucide-react';
import { BrandLeafIcon } from './CustomIcons';
import { OLGICA_DATA } from '../data/bozinovicData';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: string;
  onSelectService?: (serviceTitle: string) => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  section,
  onSelectService,
}) => {
  if (!isOpen) return null;

  const contentMap: Record<
    string,
    { title: string; subtitle: string; body: React.ReactNode }
  > = {
    about: {
      title: 'Обо мне и моем подходе',
      subtitle: OLGICA_DATA.tagline,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200">
            <img 
              src={OLGICA_DATA.photos.profileSquare} 
              alt={OLGICA_DATA.name}
              className="w-16 h-16 rounded-xl object-cover border border-amber-300 flex-shrink-0 shadow-sm" 
            />
            <div>
              <h4 className="font-semibold text-stone-900 text-sm">{OLGICA_DATA.name}</h4>
              <p className="text-xs text-amber-800 mt-0.5">{OLGICA_DATA.bio.headline}</p>
            </div>
          </div>

          {OLGICA_DATA.bio.paragraphs.map((p, i) => (
            <p key={i} className="text-stone-700">
              {p}
            </p>
          ))}

          <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700">
            <span className="font-semibold text-stone-900 block mb-1">Девиз:</span>
            <em>„{OLGICA_DATA.motto}”</em> — {OLGICA_DATA.subMotto}
          </div>
        </div>
      ),
    },
    services: {
      title: 'Программы оздоровления',
      subtitle: 'Найдите подходящую программу и начните путь к преображению',
      body: (
        <div className="space-y-3.5">
          {OLGICA_DATA.programs.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectService && onSelectService(item.title)}
              className="p-4 rounded-xl border border-stone-200 bg-stone-50/90 hover:bg-amber-50/60 hover:border-amber-300 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-800">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-semibold text-stone-900 group-hover:text-amber-900 mt-0.5">
                    {item.title}
                  </h4>
                </div>
                {item.price && (
                  <span className="text-xs font-semibold text-stone-900 px-2.5 py-1 rounded-full bg-white border border-stone-200 shadow-xs whitespace-nowrap">
                    {item.price}
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                {item.description}
              </p>
              <ul className="mt-2.5 space-y-1 text-xs text-stone-700">
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-stone-200/60 text-xs">
                <span className="text-stone-500 font-light">{item.duration}</span>
                <span className="inline-flex items-center gap-1 text-amber-700 font-medium group-hover:translate-x-1 transition-transform">
                  <span>Выбрать эту программу</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    results: {
      title: 'Отзывы и благодарности',
      subtitle: 'Реальный опыт клиентов с сайта bozinovicolgica.rs',
      body: (
        <div className="space-y-3.5">
          {OLGICA_DATA.testimonials.map((t) => (
            <div key={t.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/90 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-stone-900">
                  {t.author} {t.location ? `· ${t.location}` : ''}
                </span>
                <div className="flex items-center gap-0.5 text-amber-500">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-xs text-stone-700 italic leading-relaxed">
                „{t.quote}”
              </p>
              {t.highlight && (
                <div className="mt-2 text-[11px] font-medium text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded-md inline-block">
                  ✓ {t.highlight}
                </div>
              )}
            </div>
          ))}
        </div>
      ),
    },
    contact: {
      title: 'Записаться на консультацию & Контакты',
      subtitle: 'Уделив время индивидуальной беседе, мы вместе найдем стойкое решение',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700">
          <p>
            Опишите мне вашу проблему со здоровьем, чтобы мы составили персональный протокол питания и суплементации, подходящий именно вам:
          </p>
          <div className="space-y-2.5 text-stone-900 font-medium">
            <a 
              href={`tel:${OLGICA_DATA.phone}`} 
              className="p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 flex justify-between items-center transition-colors group"
            >
              <span className="flex items-center gap-2 text-stone-700">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Телефон / Звонок:</span>
              </span>
              <span className="text-amber-800 group-hover:underline font-semibold">{OLGICA_DATA.displayPhone}</span>
            </a>

            <a 
              href={OLGICA_DATA.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 flex justify-between items-center transition-colors group"
            >
              <span className="flex items-center gap-2 text-stone-700">
                <Instagram className="w-4 h-4 text-amber-600" />
                <span>Instagram:</span>
              </span>
              <span className="text-amber-800 group-hover:underline">{OLGICA_DATA.socials.instagramHandle}</span>
            </a>

            <a 
              href={OLGICA_DATA.socials.healthSurveyForm} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 flex justify-between items-center transition-colors group"
            >
              <span className="flex items-center gap-2 text-emerald-900">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>Анкета состояния здоровья:</span>
              </span>
              <span className="text-emerald-800 font-semibold inline-flex items-center gap-1">
                Заполнить анкету <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex justify-between items-center">
              <span>Консультации:</span>
              <span className="text-stone-700">Онлайн по видеосвязи</span>
            </div>
          </div>
        </div>
      ),
    },
  };

  const current = contentMap[section] || contentMap.about;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="info-modal-card"
        className="relative w-full max-w-lg rounded-2xl border border-stone-200 bg-white/98 backdrop-blur-2xl p-6 sm:p-8 text-stone-900 shadow-2xl shadow-stone-900/20 overflow-hidden"
      >
        {/* Top gold specular line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />

        <button
          id="close-info-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <BrandLeafIcon className="w-5 h-5 text-amber-600" />
          <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
            Встань на путь здоровья
          </span>
        </div>

        <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-stone-900">
          {current.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 font-normal mt-1 mb-6">
          {current.subtitle}
        </p>

        <div className="max-h-[60vh] overflow-y-auto pr-1">
          {current.body}
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-between items-center">
          <a
            href={OLGICA_DATA.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-500 hover:text-stone-900 inline-flex items-center gap-1"
          >
            <span>bozinovicolgica.rs</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full border border-stone-900 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-all shadow-md cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
