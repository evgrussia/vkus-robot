import React from 'react';
import { Camera, Brain, Timer, Mic, Salad, BarChart3, ShoppingCart, FolderOpen, TrendingUp, ArrowRight } from 'lucide-react';

const features = [
  {
    emoji: '📸',
    icon: Camera,
    title: 'Распознавание из фото',
    description: 'AI определяет продукты на фото холодильника с точностью 85%+',
    highlighted: false,
  },
  {
    emoji: '🧠',
    icon: Brain,
    title: 'Генерация рецептов GPT-4o',
    description: 'Уникальные рецепты за 30 секунд с учётом ваших продуктов',
    highlighted: false,
  },
  {
    emoji: '⏱️',
    icon: Timer,
    title: 'Встроенные таймеры',
    description: 'Автоматические таймеры в каждом шаге. Push-уведомления когда готово',
    highlighted: false,
  },
  {
    emoji: '🎤',
    icon: Mic,
    title: 'Голосовое управление',
    description: 'Управляй рецептом голосом: "Следующий шаг", "Поставь таймер"',
    highlighted: true,
    badge: 'Killer Feature',
  },
  {
    emoji: '🥗',
    icon: Salad,
    title: '20 диет',
    description: 'Кето, веган, DASH, палео, безглютеновая и ещё 15 диет',
    highlighted: true,
    badge: 'Killer Feature',
  },
  {
    emoji: '📊',
    icon: BarChart3,
    title: 'Расчёт КБЖУ',
    description: 'Калории, белки, жиры, углеводы для каждого рецепта',
    highlighted: false,
  },
  {
    emoji: '🛒',
    icon: ShoppingCart,
    title: 'Заказ продуктов',
    description: 'Недостающие продукты — в СберМаркет или Яндекс.Лавку в 1 клик',
    highlighted: false,
  },
  {
    emoji: '📁',
    icon: FolderOpen,
    title: 'Коллекции рецептов',
    description: 'Сохраняй любимые рецепты в тематические коллекции',
    highlighted: false,
  },
  {
    emoji: '📈',
    icon: TrendingUp,
    title: 'Персонализация',
    description: 'Рекомендации на основе истории и предпочтений',
    highlighted: false,
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4ECDC4]/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Возможности
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Всё, что нужно для комфортной готовки с AI-помощником
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 transition-all duration-300 ${
                feature.highlighted
                  ? 'bg-gradient-to-br from-[#FF6B35]/10 to-[#FFD166]/10 border-2 border-[#FF6B35]/30 hover:border-[#FF6B35] hover:shadow-xl'
                  : 'bg-gray-50 border-2 border-transparent hover:border-gray-200 hover:shadow-lg'
              }`}
            >
              {/* Badge */}
              {feature.badge && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {feature.badge}
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FFD166]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{feature.emoji}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">{feature.description}</p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[#FF6B35] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Подробнее
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
