import React from 'react';
import { Camera, Brain, Wand2, ChefHat } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Camera,
    emoji: '📸',
    title: 'Фото холодильника',
    description: 'Сфотографируй содержимое холодильника и отправь в Telegram-бот',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Brain,
    emoji: '🤖',
    title: 'AI распознает продукты',
    description: 'Нейросеть YOLOv8 определит все продукты за 30 секунд',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    icon: Wand2,
    emoji: '🍳',
    title: 'Генерация рецептов',
    description: 'GPT-4o создаст 3-5 рецептов из твоих продуктов с учётом диеты',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    icon: ChefHat,
    emoji: '👨‍🍳',
    title: 'Готовь с AI-ассистентом',
    description: 'Пошаговые инструкции, встроенные таймеры, голосовое управление',
    color: 'from-green-500 to-emerald-500',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4 простых шага от фото холодильника до готового блюда
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-orange-200 to-green-200">
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 animate-pulse" />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Number Circle */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg relative z-10`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {step.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-20 bottom-0 w-1 bg-gradient-to-b from-gray-300 to-transparent ml-[-0.5px]" />
              )}

              <div className="flex gap-4">
                {/* Number Circle */}
                <div
                  className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg relative z-10`}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-3">{step.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
