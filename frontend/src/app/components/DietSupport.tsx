import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const diets = [
  { emoji: '🥬', name: 'Средиземноморская', id: 'mediterranean' },
  { emoji: '❤️', name: 'DASH', id: 'dash' },
  { emoji: '🥓', name: 'Кето', id: 'keto' },
  { emoji: '🌱', name: 'Веганская', id: 'vegan' },
  { emoji: '🦴', name: 'Палео', id: 'paleo' },
  { emoji: '🌾', name: 'Безглютеновая', id: 'glutenfree' },
  { emoji: '⏰', name: 'Интервальное голодание', id: 'if' },
  { emoji: '🥩', name: 'Флекситарианская', id: 'flexitarian' },
  { emoji: '🧠', name: 'MIND', id: 'mind' },
  { emoji: '📉', name: 'Низкоуглеводная', id: 'lowcarb' },
];

export function DietSupport() {
  const [selectedDiet, setSelectedDiet] = useState('keto');

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ECDC4]/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35]/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            20 диет из коробки
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            От кето до веганства. От халяля до палео. Просто выбери диету в настройках.
          </p>
        </div>

        {/* Diet Selector */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max px-4">
            {diets.map((diet) => (
              <button
                key={diet.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedDiet === diet.id
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
                onClick={() => setSelectedDiet(diet.id)}
              >
                <span className="text-xl">{diet.emoji}</span>
                <span>{diet.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Transformation Example */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Original Recipe */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200">
            <div className="text-sm text-gray-500 mb-2">Оригинальный рецепт</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Паста Карбонара</h3>

            <img
              src="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop"
              alt="Паста Карбонара"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Калории:</span>
                <span className="font-semibold">450 ккал</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Белки:</span>
                <span className="font-semibold">15г</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Жиры:</span>
                <span className="font-semibold">22г</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Углеводы:</span>
                <span className="font-semibold">48г</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-2">Основные ингредиенты:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Макароны</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Бекон</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Сливки</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Сыр</span>
              </div>
            </div>
          </div>

          {/* Adapted Recipe */}
          <div className="bg-gradient-to-br from-[#FF6B35]/5 to-[#FFD166]/5 rounded-2xl shadow-lg p-6 border-2 border-[#FF6B35]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-[#FF6B35] font-semibold">🥓 Кето-версия</span>
              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                Адаптировано
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Кабачковая лапша Карбонара</h3>

            <img
              src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop"
              alt="Кабачковая лапша"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Калории:</span>
                <span className="font-semibold text-green-600">280 ккал ↓</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Белки:</span>
                <span className="font-semibold text-green-600">20г ↑</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Жиры:</span>
                <span className="font-semibold">18г</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Углеводы:</span>
                <span className="font-semibold text-green-600">8г ↓</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#FF6B35]/30">
              <div className="text-sm text-gray-600 mb-3">Замены ингредиентов:</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight size={16} className="text-[#FF6B35]" />
                  <span className="line-through text-gray-400">Макароны</span>
                  <span>→</span>
                  <span className="font-semibold text-[#FF6B35]">Кабачковая лапша</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight size={16} className="text-[#FF6B35]" />
                  <span className="line-through text-gray-400">Сливки</span>
                  <span>→</span>
                  <span className="font-semibold text-[#FF6B35]">Кокосовые сливки</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-2 text-sm text-green-700">
                <Check size={16} />
                <span className="font-semibold">Вписывается в твой дневной план</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}