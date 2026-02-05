import React from 'react';
import { ArrowLeft, Camera, ChevronRight, LogOut } from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: any) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const user = {
    name: 'Анна Петрова',
    avatar: '👩‍💼',
    subscription: 'Premium 💎',
    stats: {
      recipes: 42,
      cooked: 28,
      streak: 7,
    },
    diets: ['🥗 Веган', '📉 Низкоуглеводная'],
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-3 sticky top-0 z-10">
        <button
          onClick={() => onNavigate('home')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Профиль</h1>
      </div>

      <div className="px-4 py-6">
        {/* User Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFD166] flex items-center justify-center text-3xl">
                {user.avatar}
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Camera size={14} className="text-gray-600" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
              <div className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold mt-1">
                {user.subscription}
              </div>
            </div>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
              Редактировать
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-gradient-to-br from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl">
              <div className="text-2xl font-bold text-[#FF6B35] mb-1">{user.stats.recipes}</div>
              <div className="text-xs text-gray-600">Рецепты</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-1">{user.stats.cooked}</div>
              <div className="text-xs text-gray-600">Приготовлено</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-1">{user.stats.streak}</div>
              <div className="text-xs text-gray-600">Дней streak 🔥</div>
            </div>
          </div>
        </div>

        {/* Settings Section 1 */}
        <div className="bg-white rounded-2xl shadow-sm mb-4 overflow-hidden">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide px-4 pt-4 pb-2">
            Настройки
          </h3>
          <div className="divide-y divide-gray-100">
            <button 
              onClick={() => onNavigate('dietSettings')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Мои диеты</div>
                  <div className="text-sm text-gray-500 flex gap-1 mt-1">
                    {user.diets.map((diet, index) => (
                      <span key={index} className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                        {diet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button 
              onClick={() => onNavigate('allergensSettings')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚫</span>
                <span className="font-semibold text-gray-900">Аллергены и нелюбимые</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button 
              onClick={() => onNavigate('language')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌐</span>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Язык интерфейса</div>
                  <div className="text-sm text-gray-500">Русский</div>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📏</span>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Единицы измерения</div>
                  <div className="text-sm text-gray-500">Метрические</div>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button 
              onClick={() => onNavigate('notifications')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔔</span>
                <span className="font-semibold text-gray-900">Уведомления</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎤</span>
                <span className="font-semibold text-gray-900">Голосовой движок</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Settings Section 2: Subscription */}
        <div className="bg-white rounded-2xl shadow-sm mb-4 overflow-hidden">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide px-4 pt-4 pb-2">
            Подписка
          </h3>
          <div className="divide-y divide-gray-100">
            <button 
              onClick={() => onNavigate('subscription')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💎</span>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Premium — 149₽/мес</div>
                  <div className="text-sm text-gray-500">Следующее списание: 15 марта</div>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📜</span>
                <span className="font-semibold text-gray-900">История платежей</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Settings Section 3: Other */}
        <div className="bg-white rounded-2xl shadow-sm mb-4 overflow-hidden">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide px-4 pt-4 pb-2">
            Прочее
          </h3>
          <div className="divide-y divide-gray-100">
            <button 
              onClick={() => onNavigate('faq')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">❓</span>
                <span className="font-semibold text-gray-900">FAQ</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button 
              onClick={() => onNavigate('support')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <span className="font-semibold text-gray-900">Поддержка</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">ℹ️</span>
                <span className="font-semibold text-gray-900">О приложении</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button 
              onClick={() => onNavigate('modalsDemo')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-purple-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                <div className="text-left">
                  <div className="font-semibold text-purple-600">Modals Demo</div>
                  <div className="text-sm text-purple-500">Демо всех модалок</div>
                </div>
              </div>
              <ChevronRight size={20} className="text-purple-400" />
            </button>

            <button 
              onClick={() => onNavigate('componentsDemo')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-indigo-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧩</span>
                <div className="text-left">
                  <div className="font-semibold text-indigo-600">Components Demo</div>
                  <div className="text-sm text-indigo-500">Все UI компоненты</div>
                </div>
              </div>
              <ChevronRight size={20} className="text-indigo-400" />
            </button>

            <button 
              onClick={() => onNavigate('desktop')}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-teal-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🖥️</span>
                <div className="text-left">
                  <div className="font-semibold text-teal-600">Desktop Version</div>
                  <div className="text-sm text-teal-500">Полноценная веб-версия</div>
                </div>
              </div>
              <ChevronRight size={20} className="text-teal-400" />
            </button>

            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-red-50 transition-colors">
              <div className="flex items-center gap-3">
                <LogOut size={20} className="text-red-600" />
                <span className="font-semibold text-red-600">Выход</span>
              </div>
              <ChevronRight size={20} className="text-red-400" />
            </button>
          </div>
        </div>

        {/* Version Info */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <div>Вкус-Робот v1.0.0</div>
          <div className="mt-1">Сделано с ❤️ в России</div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center">
        <button
          onClick={() => onNavigate('home')}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">🏠</span>
          </div>
          <span className="text-xs">Главная</span>
        </button>
        <button
          onClick={() => onNavigate('recipes')}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">📚</span>
          </div>
          <span className="text-xs">Рецепты</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#FF6B35]">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">⚙️</span>
          </div>
          <span className="text-xs font-semibold">Профиль</span>
        </button>
      </div>
    </div>
  );
}