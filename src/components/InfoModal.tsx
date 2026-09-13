import React from 'react';
import { X, Check, ShieldCheck, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { BrandLeafIcon } from './CustomIcons';

interface InfoModalProps {
  section: string | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ section, onClose, onOpenBooking }) => {
  if (!section) return null;

  const contentMap: Record<string, { title: string; subtitle: string; content: React.ReactNode }> = {
    about: {
      title: 'О коуче',
      subtitle: 'Сертифицированный специалист ICF с 7-летним опытом',
      content: (
        <div className="space-y-4 text-sm text-zinc-300 font-light leading-relaxed">
          <p>
            Привет! Я практикующий лайф-коуч с аккредитацией Международной федерации коучинга (ICF). Моя миссия — помочь вам преодолеть внутренние блоки, вернуть контакт с истинными желаниями и выстроить гармоничную жизнь.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-3 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md">
              <span className="text-xl font-serif-display text-amber-100 block font-normal">300+</span>
              <span className="text-xs text-zinc-200">Проведенных персональных программ</span>
            </div>
            <div className="p-3 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md">
              <span className="text-xl font-serif-display text-amber-100 block font-normal">1200+</span>
              <span className="text-xs text-zinc-200">Часов коучинговой практики</span>
            </div>
          </div>
        </div>
      ),
    },
    programs: {
      title: 'Программы развития',
      subtitle: 'Структурированный путь от сомнений к устойчивым результатам',
      content: (
        <div className="space-y-3">
          {[
            { name: '1. Диагностическая сессия', desc: 'Анализ текущего состояния, аудит колеса жизненного баланса и формирование точки «Б».' },
            { name: '2. Проработка блоков и страхов', desc: 'Выявление ограничивающих установок, синдрома самозванца и тревожности.' },
            { name: '3. Индивидуальная стратегия', desc: 'Пошаговый персональный план действий с поддержкой в мессенджерах 5 дней в неделю.' },
            { name: '4. Интеграция и трансформация (+52%)', desc: 'Закрепление новых паттернов поведения, уверенности и внутренней опоры.' },
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md">
              <h4 className="text-xs font-semibold text-amber-100">{item.name}</h4>
              <p className="text-xs text-zinc-200 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    reviews: {
      title: 'Отзывы клиентов',
      subtitle: 'Реальные истории людей, которые изменили свою жизнь',
      content: (
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md text-xs leading-relaxed text-zinc-100">
            <p className="italic font-serif-display text-sm text-white">
              «После 2 месяцев работы я наконец решилась уйти из токсичной корпорации и открыла свое дело. Ушла вечная тревога, появилось спокойствие и ясность.»
            </p>
            <span className="block mt-2 text-zinc-300 font-medium">— Анна М., предприниматель</span>
          </div>
          <div className="p-3.5 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md text-xs leading-relaxed text-zinc-100">
            <p className="italic font-serif-display text-sm text-white">
              «Коучинг помог мне наладить отношения с партнером и научиться говорить «нет» без чувства вины. Огромная благодарность!»
            </p>
            <span className="block mt-2 text-zinc-300 font-medium">— Михаил В., IT-руководитель</span>
          </div>
        </div>
      ),
    },
    blog: {
      title: 'Статьи и практики',
      subtitle: 'Материалы для самопознания и регулярной рефлексии',
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md hover:border-white/35 transition-colors">
            <span className="text-amber-200 text-[10px] uppercase font-mono font-semibold">Практика дня</span>
            <h4 className="text-sm font-medium text-white mt-0.5">Как перестать откладывать важное: методика микрошагов</h4>
            <p className="text-zinc-200 mt-1 leading-relaxed">Простой психологический алгоритм снижения сопротивления перед новыми вызовами.</p>
          </div>
          <div className="p-3 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md hover:border-white/35 transition-colors">
            <span className="text-amber-200 text-[10px] uppercase font-mono font-semibold">Гайд</span>
            <h4 className="text-sm font-medium text-white mt-0.5">Внутренний критик: трансформируем осуждение в союзника</h4>
            <p className="text-zinc-200 mt-1 leading-relaxed">Техника когнитивной переоценки для укрепления самооценки.</p>
          </div>
        </div>
      ),
    },
    contacts: {
      title: 'Контакты',
      subtitle: 'Свяжитесь удобным для вас способом',
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-amber-200" />
              <div>
                <span className="block text-white font-medium">Telegram</span>
                <span className="text-zinc-200">@lifecoach_path</span>
              </div>
            </div>
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs text-amber-200 hover:text-amber-100 hover:underline font-medium"
            >
              Написать
            </a>
          </div>

          <div className="p-3.5 rounded-xl border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-200" />
              <div>
                <span className="block text-white font-medium">Электронная почта</span>
                <span className="text-zinc-200">coach@waytoyourself.com</span>
              </div>
            </div>
            <span className="text-xs text-zinc-300">24/7</span>
          </div>
        </div>
      ),
    },
  };

  const current = contentMap[section] || contentMap.about;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="info-modal-card"
        className="relative w-full max-w-lg rounded-2xl border border-white/25 bg-black/80 backdrop-blur-2xl p-6 sm:p-8 text-white shadow-2xl shadow-black/80 overflow-hidden"
      >
        {/* Subtle top edge glass specular highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <button
          id="close-info-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <BrandLeafIcon className="w-5 h-5 text-amber-200" />
          <span className="text-xs uppercase tracking-wider text-amber-200 font-semibold">
            Путь к себе
          </span>
        </div>

        <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-white">
          {current.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-200 font-normal mt-1 mb-6">
          {current.subtitle}
        </p>

        <div className="max-h-[60vh] overflow-y-auto pr-1">
          {current.content}
        </div>

        <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-zinc-200 hover:text-white transition-colors cursor-pointer"
          >
            Закрыть
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="rounded-full border border-white/35 hover:border-white/70 bg-white/20 hover:bg-white/30 backdrop-blur-xl px-5 py-2 text-xs text-white font-medium transition-all shadow-lg cursor-pointer"
          >
            Записаться на сессию →
          </button>
        </div>
      </div>
    </div>
  );
};
