import React, { useState } from 'react';
import { Modal } from './Modal';
import { Star, Send } from 'lucide-react';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: any;
  onSubmit?: (rating: number, review: string) => void;
}

const quickFeedback = [
  { id: 'delicious', emoji: '😋', label: 'Вкусно' },
  { id: 'easy', emoji: '👍', label: 'Легко' },
  { id: 'fast', emoji: '⚡', label: 'Быстро' },
  { id: 'healthy', emoji: '🥗', label: 'Полезно' },
  { id: 'family', emoji: '👨‍👩‍👧', label: 'Семейное' },
  { id: 'festive', emoji: '🎉', label: 'Праздничное' },
];

export function RatingModal({ isOpen, onClose, recipe, onSubmit }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit?.(rating, review);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setRating(0);
        setReview('');
        setSelectedTags([]);
      }, 2000);
    }
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  if (submitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false} size="sm">
        <div className="p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <div className="text-5xl animate-bounce">✅</div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Спасибо за отзыв!
          </h3>
          <p className="text-gray-600">
            Твоё мнение помогает нам становиться лучше
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Оцени рецепт" size="md">
      <div className="p-6">
        {/* Recipe Info */}
        <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FFD166]/10 rounded-xl p-4 mb-6 border border-[#FF6B35]/20">
          <div className="flex items-center gap-3">
            {recipe?.image && (
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
            )}
            <div>
              <h4 className="font-bold text-gray-900">{recipe?.name || 'Рецепт'}</h4>
              <p className="text-sm text-gray-600">Как тебе блюдо?</p>
            </div>
          </div>
        </div>

        {/* Star Rating */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 text-center">
            Поставь оценку
          </h4>
          <div className="flex justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <Star
                  size={40}
                  className={`transition-colors ${
                    star <= (hoveredRating || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="text-center text-sm text-gray-600">
            {rating === 0 && 'Выбери количество звёзд'}
            {rating === 1 && 'Плохо'}
            {rating === 2 && 'Так себе'}
            {rating === 3 && 'Нормально'}
            {rating === 4 && 'Хорошо'}
            {rating === 5 && 'Отлично!'}
          </div>
        </div>

        {/* Quick Feedback Tags */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">
            Быстрая оценка (необязательно)
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {quickFeedback.map((tag) => (
              <button
                key={tag.id}
                onClick={() => toggleTag(tag.id)}
                className={`py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                  selectedTags.includes(tag.id)
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-xl mb-1">{tag.emoji}</div>
                <div className="text-xs">{tag.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Written Review */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">
            Напиши отзыв (необязательно)
          </h4>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Поделись впечатлениями о рецепте..."
            rows={4}
            maxLength={500}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none"
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {review.length}/500
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FFD166] text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Отправить отзыв
        </button>

        {/* Reward Hint */}
        <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
          <div className="flex items-center gap-2 text-sm text-green-800">
            <div className="text-xl">🎁</div>
            <div>
              <strong>Бонус:</strong> За отзыв ты получишь +5 очков!
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
