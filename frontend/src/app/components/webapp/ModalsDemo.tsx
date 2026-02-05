import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { RecipeShareModal } from './modals/RecipeShareModal';
import { TimerModal } from './modals/TimerModal';
import { VoiceCommandsModal } from './modals/VoiceCommandsModal';
import { DeliveryIntegrationModal } from './modals/DeliveryIntegrationModal';
import { AchievementModal } from './modals/AchievementModal';
import { RatingModal } from './modals/RatingModal';
import { FilterBottomSheet } from './modals/FilterBottomSheet';
import { ConfirmationModal } from './modals/ConfirmationModal';
import { ImagePreviewModal } from './modals/ImagePreviewModal';

interface ModalsDemoProps {
  onNavigate: (screen: any) => void;
}

const demoRecipe = {
  id: 1,
  name: 'Паста Карбонара',
  image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
};

export function ModalsDemo({ onNavigate }: ModalsDemoProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modals = [
    { id: 'share', name: 'Поделиться рецептом', emoji: '🔗', category: 'Социальное' },
    { id: 'timer', name: 'Управление таймерами', emoji: '⏲️', category: 'Готовка' },
    { id: 'voice', name: 'Голосовые команды', emoji: '🎤', category: 'Управление' },
    { id: 'delivery', name: 'Заказ продуктов', emoji: '🛒', category: 'Интеграции' },
    { id: 'achievement', name: 'Получение достижения', emoji: '🏆', category: 'Социальное' },
    { id: 'rating', name: 'Оценка рецепта', emoji: '⭐', category: 'Социальное' },
    { id: 'filters', name: 'Фильтры (Bottom Sheet)', emoji: '🎛️', category: 'Навигация' },
    { id: 'confirmation', name: 'Подтверждение действия', emoji: '⚠️', category: 'Системные' },
    { id: 'image', name: 'Просмотр изображения', emoji: '🖼️', category: 'Медиа' },
  ];

  const categories = Array.from(new Set(modals.map(m => m.category)));

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-3 sticky top-0 z-10">
        <button
          onClick={() => onNavigate('profile')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-gray-900">Modals & Overlays</h1>
          <p className="text-sm text-gray-500">Демонстрация всех модалок</p>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Info Card */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex gap-3">
            <div className="text-2xl">ℹ️</div>
            <div className="text-sm text-blue-900">
              <strong>Часть 4: Modals & Overlays</strong><br />
              Нажми на любую карточку, чтобы увидеть соответствующий модальный компонент в действии.
            </div>
          </div>
        </div>

        {/* Modals by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{category}</h2>
            <div className="grid grid-cols-1 gap-3">
              {modals
                .filter((modal) => modal.category === category)
                .map((modal) => (
                  <button
                    key={modal.id}
                    onClick={() => setActiveModal(modal.id)}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all text-left flex items-center gap-3"
                  >
                    <div className="text-4xl">{modal.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{modal.name}</h3>
                      <p className="text-sm text-gray-500">{modal.category}</p>
                    </div>
                    <div className="text-[#FF6B35] font-semibold">Открыть →</div>
                  </button>
                ))}
            </div>
          </div>
        ))}

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-6 border border-[#FF6B35]/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {modals.length}
            </div>
            <div className="text-gray-600">
              Модальных компонентов создано
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <RecipeShareModal
        isOpen={activeModal === 'share'}
        onClose={() => setActiveModal(null)}
        recipe={demoRecipe}
      />

      <TimerModal
        isOpen={activeModal === 'timer'}
        onClose={() => setActiveModal(null)}
      />

      <VoiceCommandsModal
        isOpen={activeModal === 'voice'}
        onClose={() => setActiveModal(null)}
      />

      <DeliveryIntegrationModal
        isOpen={activeModal === 'delivery'}
        onClose={() => setActiveModal(null)}
      />

      <AchievementModal
        isOpen={activeModal === 'achievement'}
        onClose={() => setActiveModal(null)}
      />

      <RatingModal
        isOpen={activeModal === 'rating'}
        onClose={() => setActiveModal(null)}
        recipe={demoRecipe}
      />

      <FilterBottomSheet
        isOpen={activeModal === 'filters'}
        onClose={() => setActiveModal(null)}
      />

      <ConfirmationModal
        isOpen={activeModal === 'confirmation'}
        onClose={() => setActiveModal(null)}
        onConfirm={() => console.log('Confirmed!')}
        title="Удалить рецепт?"
        message="Это действие нельзя отменить. Рецепт будет удален навсегда."
        confirmText="Удалить"
        cancelText="Отмена"
        type="danger"
        icon="trash"
      />

      <ImagePreviewModal
        isOpen={activeModal === 'image'}
        onClose={() => setActiveModal(null)}
        imageUrl={demoRecipe.image}
        title={demoRecipe.name}
      />
    </div>
  );
}
