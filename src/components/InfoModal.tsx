import React from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { BrandLeafIcon } from './CustomIcons';

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
      title: 'О философии и подходе',
      subtitle: 'Индивидуальные программы здоровья и питания',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
          <p>
            Мы объединяем передовые научные достижения биохимии питания, лабораторной диагностики и персонального сопровождения.
          </p>
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200">
            <h4 className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Принцип целостности
            </h4>
            <p className="text-xs text-stone-600">
              Каждый организм неповторим. Мы не используем типовые диеты — каждый протокол составляется на основе анамнеза, анализов и индивидуального ритма жизни.
            </p>
          </div>
          <p>
            Наша цель — восстановить природный запас энергии, улучшить метаболизм и подарить ощущение легкости и уверенности в каждом дне.
          </p>
        </div>
      ),
    },
    services: {
      title: 'Программы и форматы',
      subtitle: 'Выберите оптимальное направление оздоровления',
      body: (
        <div className="space-y-3">
          {[
            {
              name: 'Комплексный чекап и нутрициологический протокол',
              dur: '2 недели',
              desc: 'Глубокий анализ микроэлементов, детокс-поддержка, персональный план питания.',
            },
            {
              name: 'Трансформация пищевых привычек',
              dur: '1 месяц',
              desc: 'Ежедневная обратная связь, меню на каждый день, подбор сертифицированных нутрицевтиков.',
            },
            {
              name: 'VIP-сопровождение «Новая Энергия»',
              dur: '3 месяца',
              desc: 'Полное ведение до стойкого результата, коррекция анализов в динамике, связь 24/7.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectService && onSelectService(item.name)}
              className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-amber-50/60 hover:border-amber-300 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-amber-900">
                  {item.name}
                </h4>
                <span className="text-[11px] text-amber-700 font-medium px-2 py-0.5 rounded-full bg-amber-100/80">
                  {item.dur}
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-1">
                {item.desc}
              </p>
              <div className="mt-2 flex items-center gap-1 text-[11px] text-amber-700 font-medium group-hover:translate-x-1 transition-transform">
                <span>Выбрать программу</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    results: {
      title: 'Истории преображения',
      subtitle: 'Реальные результаты наших клиентов',
      body: (
        <div className="space-y-3">
          {[
            {
              client: 'Екатерина В., 34 года',
              res: 'Нормализация сна, снижение веса на 6 кг за 6 недель, устранение хронической усталости.',
            },
            {
              client: 'Михаил С., 42 года',
              res: 'Снижение уровня системного воспаления, повышение выносливости и нормализация липидного профиля.',
            },
            {
              client: 'Ольга К., 29 лет',
              res: 'Очищение кожи, восстановление баланса железа и витамина D, ощущение легкости и прилива сил.',
            },
          ].map((res, i) => (
            <div key={i} className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
              <div className="flex items-center gap-2 mb-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-stone-900">
                  {res.client}
                </span>
              </div>
              <p className="text-xs text-stone-600 pl-6">
                {res.res}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Мы всегда рады ответить на ваши вопросы',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700">
          <p>
            Запишитесь на вводную 20-минутную сессию или напишите нам удобным способом:
          </p>
          <div className="space-y-2 text-stone-900 font-medium">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex justify-between items-center">
              <span>Телефон:</span>
              <span className="text-amber-800">+7 (999) 123-45-67</span>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex justify-between items-center">
              <span>Telegram:</span>
              <span className="text-amber-800">@olgica_health</span>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex justify-between items-center">
              <span>Прием:</span>
              <span>Пн – Сб: 10:00 – 20:00</span>
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
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <BrandLeafIcon className="w-5 h-5 text-amber-600" />
          <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
            Путь к себе
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

        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
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
