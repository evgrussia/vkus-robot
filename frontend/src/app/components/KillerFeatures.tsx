import React from 'react';
import { Timer, Volume2, Check, Bell } from 'lucide-react';

export function KillerFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1: Timers */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Killer Feature — никто не делает
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Встроенные таймеры — больше ничего не пригорит
            </h2>

            <div className="space-y-4 mb-8">
              {[
                'Автоматически создаются из текста рецепта',
                'Работают в фоне даже при закрытом приложении',
                'Push-уведомления в Telegram',
                'Несколько таймеров одновременно',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
              {/* Timer UI Mockup */}
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-4">Рецепт: Паста Карбонара</div>

                {/* Circular Timer */}
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <svg className="transform -rotate-90 w-64 h-64">
                    <circle
                      cx="128"
                      cy="128"
                      r="110"
                      stroke="#E5E7EB"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="128"
                      cy="128"
                      r="110"
                      stroke="url(#gradient)"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="691"
                      strokeDashoffset="173"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B35" />
                        <stop offset="100%" stopColor="#FFD166" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-gray-900">12:45</div>
                    <div className="text-sm text-gray-500 mt-2">осталось</div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex gap-4 justify-center mb-6">
                  <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                    ⏸️ Пауза
                  </button>
                  <button className="px-8 py-3 bg-red-100 text-red-600 rounded-xl font-semibold hover:bg-red-200 transition-colors">
                    ⏹️ Стоп
                  </button>
                </div>

                {/* Notification */}
                <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 border-2 border-[#FF6B35]/30">
                  <div className="flex items-center gap-3">
                    <Bell className="text-[#FF6B35]" size={24} />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">⏰ Таймер завершён!</div>
                      <div className="text-sm text-gray-600">Проверь блюдо</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Voice */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
              {/* Voice UI Mockup */}
              <div className="text-center mb-8">
                <div className="text-sm text-gray-500 mb-6">Шаг 3 из 8</div>

                {/* Waveform Animation */}
                <div className="flex items-end justify-center gap-1 h-32 mb-6">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-[#FF6B35] to-[#FFD166] rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="text-lg font-semibold text-gray-900 mb-2">
                  🎤 Слушаю команду...
                </div>
                <div className="text-sm text-gray-500">Скажите "Следующий шаг"</div>
              </div>

              {/* Voice Commands */}
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3 text-left">
                  <div className="text-xs text-green-600 font-semibold mb-1">Вы сказали:</div>
                  <div className="text-gray-900">"Следующий шаг"</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-left text-sm text-gray-600">
                  "Повтори ингредиенты"
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-left text-sm text-gray-600">
                  "Поставь таймер на 10 минут"
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Killer Feature — уникально
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Голосовое управление — готовь без рук
            </h2>

            <div className="space-y-4 mb-8">
              {[
                'Грязные руки? Не проблема',
                '8 голосовых команд на русском',
                'Озвучка шагов через TTS',
                'Точность распознавания >90%',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
