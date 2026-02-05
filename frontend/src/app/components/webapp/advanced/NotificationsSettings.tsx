import React, { useState } from 'react';
import { ArrowLeft, Bell } from 'lucide-react';

interface NotificationsSettingsProps {
  onNavigate: (screen: any) => void;
}

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  category: 'recipes' | 'cooking' | 'social' | 'system';
}

export function NotificationsSettings({ onNavigate }: NotificationsSettingsProps) {
  const [notifications, setNotifications] = useState<NotificationSetting[]>([
    // Recipes
    {
      id: 'new-recipes',
      title: 'Новые рекомендации рецептов',
      description: 'Персональные подборки на основе твоих предпочтений',
      enabled: true,
      category: 'recipes',
    },
    {
      id: 'saved-recipes',
      title: 'Избранные рецепты',
      description: 'Напоминания о рецептах из избранного',
      enabled: false,
      category: 'recipes',
    },
    {
      id: 'seasonal',
      title: 'Сезонные рецепты',
      description: 'Рецепты с сезонными продуктами',
      enabled: true,
      category: 'recipes',
    },
    
    // Cooking
    {
      id: 'timer',
      title: 'Таймеры готовки',
      description: 'Уведомления о завершении таймеров',
      enabled: true,
      category: 'cooking',
    },
    {
      id: 'step-reminders',
      title: 'Напоминания о шагах',
      description: 'Подсказки во время приготовления',
      enabled: false,
      category: 'cooking',
    },
    
    // Social
    {
      id: 'comments',
      title: 'Комментарии',
      description: 'Ответы на твои комментарии',
      enabled: true,
      category: 'social',
    },
    {
      id: 'achievements',
      title: 'Достижения',
      description: 'Получение новых достижений',
      enabled: true,
      category: 'social',
    },
    {
      id: 'streak',
      title: 'Поддержка streak',
      description: 'Напоминания о ежедневной активности',
      enabled: false,
      category: 'social',
    },
    
    // System
    {
      id: 'updates',
      title: 'Обновления приложения',
      description: 'Новые функции и улучшения',
      enabled: true,
      category: 'system',
    },
    {
      id: 'subscription',
      title: 'Подписка',
      description: 'Информация об оплате и продлении',
      enabled: true,
      category: 'system',
    },
    {
      id: 'tips',
      title: 'Советы по использованию',
      description: 'Полезные подсказки и хитрости',
      enabled: false,
      category: 'system',
    },
  ]);

  const toggleNotification = (id: string) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, enabled: !n.enabled } : n
    ));
  };

  const toggleCategory = (category: string, enabled: boolean) => {
    setNotifications(notifications.map(n =>
      n.category === category ? { ...n, enabled } : n
    ));
  };

  const categories = [
    { id: 'recipes', name: 'Рецепты', emoji: '🍳' },
    { id: 'cooking', name: 'Готовка', emoji: '⏲️' },
    { id: 'social', name: 'Социальное', emoji: '👥' },
    { id: 'system', name: 'Системные', emoji: '⚙️' },
  ];

  const getCategoryNotifications = (category: string) => {
    return notifications.filter(n => n.category === category);
  };

  const isCategoryEnabled = (category: string) => {
    const categoryNotifs = getCategoryNotifications(category);
    return categoryNotifs.some(n => n.enabled);
  };

  const allEnabled = notifications.every(n => n.enabled);
  const noneEnabled = notifications.every(n => !n.enabled);

  const toggleAll = () => {
    const newState = !allEnabled;
    setNotifications(notifications.map(n => ({ ...n, enabled: newState })));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-3 sticky top-0 z-10">
        <button
          onClick={() => onNavigate('profile')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold text-gray-900">Уведомления</h1>
          <p className="text-sm text-gray-500">
            Настрой, что хочешь получать
          </p>
        </div>
        <button
          onClick={toggleAll}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
            allEnabled
              ? 'bg-red-100 text-red-600 hover:bg-red-200'
              : 'bg-green-100 text-green-600 hover:bg-green-200'
          }`}
        >
          {allEnabled ? 'Откл. все' : 'Вкл. все'}
        </button>
      </div>

      <div className="px-4 py-6">
        {/* Master Toggle */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#FFD166] rounded-full flex items-center justify-center">
                <Bell size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Все уведомления</h3>
                <p className="text-sm text-gray-600">
                  {noneEnabled ? 'Отключены' : `Активно: ${notifications.filter(n => n.enabled).length}`}
                </p>
              </div>
            </div>
            <button
              onClick={toggleAll}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                noneEnabled ? 'bg-gray-300' : 'bg-[#FF6B35]'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  noneEnabled ? '' : 'translate-x-7'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {categories.map((category) => {
            const categoryNotifs = getCategoryNotifications(category.id);
            const categoryEnabled = isCategoryEnabled(category.id);

            return (
              <div key={category.id}>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-2xl">{category.emoji}</span>
                    {category.name}
                  </h2>
                  <button
                    onClick={() => toggleCategory(category.id, !categoryEnabled)}
                    className="text-sm text-[#FF6B35] font-semibold hover:underline"
                  >
                    {categoryEnabled ? 'Откл. все' : 'Вкл. все'}
                  </button>
                </div>

                {/* Category Items */}
                <div className="space-y-2">
                  {categoryNotifs.map((notif) => (
                    <div
                      key={notif.id}
                      className="bg-white rounded-xl p-4 flex items-center gap-4"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {notif.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {notif.description}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleNotification(notif.id)}
                        className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                          notif.enabled ? 'bg-[#FF6B35]' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            notif.enabled ? 'translate-x-6' : ''
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 mt-6">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div className="text-sm text-blue-900">
              <strong>Совет:</strong> Уведомления о таймерах рекомендуем держать включенными, чтобы не пропустить важные моменты при готовке.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={() => onNavigate('profile')}
          className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Сохранить настройки
        </button>
      </div>
    </div>
  );
}
